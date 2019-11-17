import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Select from "./Select";

export default function Home() {
  const [request, setRequest] = useState({ value: 0, to: "CZK" });
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get("http://data.fixer.io/api/latest", {
        params: { access_key: process.env.REACT_APP_KEY }
      })
      .then(res => setResult(res.data))
      .catch(_ => null);
  }, [request, setResult]);

  return (
    <>
      <div className="home d-flex">
        {result && (
          <div className="entry">
            <Input
              value={request.value}
              request={request}
              setRequest={setRequest}
            />
            <Select
              request={request}
              setRequest={setRequest}
              rates={result.rates}
            />
          </div>
        )}
        <div className="result">
          <span>
            {request.value} EUR →{" "}
            {result && request.value * result.rates[request.to]} {request.to}
          </span>
        </div>
      </div>
    </>
  );
}
