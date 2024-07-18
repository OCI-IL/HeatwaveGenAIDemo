import { useState } from "react";

const BASE_BUCKET_URL = process.env.REACT_APP_PAR;

export interface UploadPdfProps {
  onPdfUploadEd: () => void;
}

export const UploadPdf: React.FC<UploadPdfProps> = ({ onPdfUploadEd }) => {
  const [isFilePicked, setIsFilePicked] = useState(false);
  const onPdfSelected = (e: any) => {
    onPdfUploadEd && onPdfUploadEd();
  };

  const uploadFile = async (file: any) => {
    const timeStamp = new Date().getTime();
    console.log(file);
    const posted_file = BASE_BUCKET_URL + `${file.name}_${timeStamp}.pdf`;
    fetch(posted_file, {
      method: "PUT",
      headers: {
        "Content-Type": "application/pdf",
      },
      body: file,
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        onPdfUploadEd();
      }
    });
  };

  const changeHandler = (event: any) => {
    // setSelectedFile(event.target.files[0]);

    setIsFilePicked(true);
    uploadFile(event.target.files[0]);
  };

  return (
    <div>
      {!isFilePicked && (
        <div>
          <h1 style={{ margin: 40 }}>Upload Public Domain English PDF file</h1>
          <input type="file" id="file" name="file" onChange={changeHandler} />
        </div>
      )}
    </div>
  );
};
