import { useState } from "react";
import Box from "./Box";
import "./styles.css";

export default function App() {
  const [isOpen, setIsopen] = useState(3);
  const obj = [
    {
      id: "1",
      heading: "box 1",
      subheading: "Subheading of box 1"
    },
    {
      id: "2",
      heading: "box 2",
      subheading: "Subheading of box 2"
    },
    {
      id: "3",
      heading: "box 3",
      subheading: "Subheading of box 3"
    },
    {
      id: "4",
      heading: "box 4",
      subheading: "Subheading of box 4"
    },
    {
      id: "5",
      heading: "box 5",
      subheading: "Subheading of box 5"
    }
  ];
  return (
    <div className="App">
      <div className="container">
        {obj &&
          obj.map((value) => (
            <Box value={value} isOpen={isOpen} setIsopen={setIsopen} />
          ))}
      </div>
    </div>
  );
}
