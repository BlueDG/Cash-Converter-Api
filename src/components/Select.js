import React from "react";

export default function Select({ request, setRequest, rates }) {
  return (
    <div>
      <select
        className="select"
        onChange={e => setRequest({ ...request, to: e.target.value })}
      >
        {Object.keys(rates).map((rate, i) => {
          return (
            <option key={i} value={rate}>
              {rate}
            </option>
          );
        })}
      </select>
    </div>
  );
}
