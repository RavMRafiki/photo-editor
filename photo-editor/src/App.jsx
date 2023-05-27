import { useState } from "react";
import "./App.css";
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";
import ImageUrl from "./ImageUrl";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: { min: 0, max: 200 },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: { min: 0, max: 100 },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: { min: 0, max: 100 },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: { min: 0, max: 360 },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: { min: 0, max: 20 },
    unit: "px",
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: { min: 0, max: 1 },
    unit: "00%",
  },
];

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];
  const [url, setUrl] = useState(
    "https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?cs=srgb&dl=pexels-r-fera-2286895.jpg&fm=jpg"
  );

  function handleSlideChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return {
      filter: filters.join(" "),
      backgroundImage: "url(" + url + ")",
    };
  }
  function getURL(data) {
    setUrl(data);
  }

  return (
    <div className="container">
      <div className="image-url">
        <ImageUrl onChange={getURL} />
      </div>
      <div className="main-image" style={getImageStyle()}></div>
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSlideChange}
      />
    </div>
  );
}

export default App;
