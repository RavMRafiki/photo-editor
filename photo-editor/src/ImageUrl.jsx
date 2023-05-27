import React, { useState } from "react";

export default function ImageUrl(props) {
  const [url, setUrl] = useState("https://source.unsplash.com/EwKXn5CapA4");

  function handleChange(e) {
    setUrl(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div>
      <input className="url" type="text" value={url} onChange={handleChange} />
    </div>
  );
}
