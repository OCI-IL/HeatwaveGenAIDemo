import express, { Request, Response } from "express";
import {
  countEmbedding,
  createDbIfnotExists,
  embedEnDocs,
  performSearch,
} from "./heatwave_clt";
import cors from "cors";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

let PORT = process.env.PORT || 3003;

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });

app.post("/search", async (req: Request, res: Response) => {
  const { q } = req.body;

  if (!q) {
    return res.status(400).json({ error: "Query parameter q is required" });
  }

  const searchResults = await performSearch(q);

  // Send the search results as the response
  res.json({ results: searchResults });
});

app.get("/count", async (req: Request, res: Response) => {
  const embeddingCount = await countEmbedding();

  // Send the count as the response
  res.json({ count: embeddingCount });
});

app.get("/embedPdf", async (req: Request, res: Response) => {
  try {
    const embeddingCount = await embedEnDocs();
    // Send the count as the response
    res.json({ count: embeddingCount });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/createDb", async (req: Request, res: Response) => {
  try {
    const result = await createDbIfnotExists();

    res.json({ result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
