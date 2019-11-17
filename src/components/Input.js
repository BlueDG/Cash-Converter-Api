import React from "react";

export default function Input({ value, request, setRequest }) {
  return (
    <div>
      <input
        className="input"
        type="number"
        min="0"
        value={value}
        onChange={e => setRequest({ ...request, value: e.target.value })}
      />
    </div>
  );
}
