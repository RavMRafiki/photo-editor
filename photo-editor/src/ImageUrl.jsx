import React, { useState } from "react";

export default function ImageUrl() {
  const [url, setUrl] = useState("https://source.unsplash.com/EwKXn5CapA4");
  return (
    <div>
      <input className="url" type="text" value={url} onChange={""} />
    </div>
  );
}