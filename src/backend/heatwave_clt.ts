//import mysql from 'mysql';
import mysql, { QueryResult, RowDataPacket } from "mysql2/promise";

// Your existing code

async function connectToDatabase(): Promise<mysql.Connection> {
  const connectionOptions = {
    host: process.env.DB_IP,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    authPlugins: {
      mysql_native_password: () => () => "your_password",
    },
  };

  console.log("Connecting options", connectionOptions);

  const connection = await mysql.createConnection(connectionOptions);
  console.log("Connected to the MySQL database.");
  return connection;
}

export const performSearch = async (q: string): Promise<any> => {
  const connection = await connectToDatabase();

  // Example query
  const [rows] = await connection.execute(
    `SET @db_list = '["quickstart_db"]';`
  );
  console.log("The solution is:", rows);

  const [rows2] = await connection.execute(
    `CALL sys.ML_MODEL_LOAD('mistral-7b-instruct-v1', NULL);`
  );
  console.log("The ML_MODEL_LOAD is:", rows2);

  let output = "";
  const [rows3] = await connection.execute(
    `SET @options_rag = JSON_OBJECT("vector_store", JSON_ARRAY("quickstart_db.quickstart_embeddings"));`
  );

  const [rows4] = await connection.execute<RowDataPacket[]>(
    `call sys.ML_RAG("${q}",@outputParam,@options_rag);`
  );

  const [rows5] = await connection.execute<RowDataPacket[]>(
    `SELECT @outputParam AS output;`
  );

  let jsonString = "";
  if (Array.isArray(rows5) && rows5.length > 0) {
    console.log("The q is:", rows5);
    jsonString = rows5[0]["output"];
  }

  await connection.end();

  return jsonString;
};

export const countEmbedding = async (): Promise<any> => {
  const connection = await connectToDatabase();

  // Example query
  const [rows] = await connection.execute<RowDataPacket[]>(
    "select count(*) as EmbedCount from quickstart_embeddings;"
  );
  console.log("The result is:", rows);
  let embeddingCount = 0;
  if (Array.isArray(rows) && rows.length > 0) {
    embeddingCount = parseInt(rows[0]["EmbedCount"]);
  }

  await connection.end();

  return embeddingCount;
};

export const embedEnDocs = async (): Promise<any> => {
  const connection = await connectToDatabase();

  // Example query
  const [rows] = await connection.execute(
    `SET @db_list = '["quickstart_db"]';`
  );

  const [rows2] = await connection.execute(
    `CALL sys.ML_MODEL_LOAD('mistral-7b-instruct-v1', NULL);`
  );
  console.log("The ML_MODEL_LOAD is:", rows2);

  const [drop] = await connection.execute(
    `drop table IF EXISTS quickstart_embeddings;`
  );

  const [rows3] = await connection.execute(
    `SET @dl_tables = '[{ "db_name": "quickstart_db", "tables": [{ "table_name": "quickstart_embeddings", "dialect": { "format": "pdf" }, "file": [{ "par": "https://objectstorage.il-jerusalem-1.oraclecloud.com/p/BNySmWgkewKrVqY9Wd-UcCXiVdxR0L-unxkvAjBfXqV2zOtHlwkWcVnLT0h_dQfR/n/oraseemeail/b/genai/o/" }] }] }]';`
  );

  const [options] = await connection.execute(
    `SET @options = JSON_OBJECT( 'output', 'normal', 'policy', 'disable_unsupported_columns', 'external_tables', CAST(@dl_tables AS JSON) );`
  );

  console.log("start embedding");
  const [rows4] = await connection.execute<RowDataPacket[]>(
    `CALL sys.heatwave_load(@db_list, @options);`
  );

  console.log("The result heatwave_load:", rows4);
  await connection.end();

  return await countEmbedding();
};
