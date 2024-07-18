import React, { useState } from "react";
//@ts-ignore
import { Form, Field } from "easy-react-form";

export default function Search() {
  const [searchResults, setSearchResults] = useState<any>();
  const [isSearching, setIsSearching] = useState(false);
  const handleSubmit = (values: any) => {
    console.log("Submitted", values);

    setIsSearching(true);
    fetch(`http://${window.location.hostname}:3003/search`, {
      //fetch("http://localhost:3003/search", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSearching(false);
        console.log(data);

        const results = JSON.parse(data.results);
        console.log(results);
        setSearchResults(results);
      });
  };
  return (
    <div style={{ alignItems: "center" }}>
      <div
        style={{
          margin: "auto",
          maxWidth: "900px",
        }}
      >
        <Form onSubmit={(values: any) => handleSubmit(values)}>
          <br></br>
          {/* <div style={{ fontSize: 40 }}>What is your Question?</div> */}
          <br></br>
          <Field
            style={{ width: "100%", fontSize: 30 }}
            // className="register-box-field"
            name="q"
            component="input"
            type="text"
            required
            placeholder="What is your Question?"
          />

          {!isSearching && (
            <button className="register-button"> Search </button>
          )}
          {isSearching && <div>Searching...</div>}
        </Form>
        {searchResults && (
          <div style={{ textAlign: "left" }}>
            <div style={{ fontStyle: "italic" }}> Search Results:</div>
            <div>{searchResults.text}</div>
            <br />
            <div>Citations:</div>
            {searchResults.citations.map((result: any, index: any) => (
              <div style={{ margin: 20 }}>
                <div>Segment: {result.segment}</div>
                <div>
                  Distance:
                  <br /> {result.distance}
                </div>
                <div>
                  Url:
                  <a
                    target="_blank"
                    style={{ textDecoration: "auto", color: "blue" }}
                    href={result.document_name}
                  >
                    {result.document_name
                      .split("http://")
                      .pop()
                      ?.split("/")
                      .pop()}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
