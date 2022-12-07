import React, { useState, useEffect } from "react";

export default function Box({ value, isOpen, setIsopen }) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log(isOpen, value.id);
    if (isOpen == value.id) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [isOpen]);

  const displaySubModule = () => {
    return (
      <div>
        <h3>{value.subheading}</h3>
        <h3>Second Line</h3>
      </div>
    );
  };
  return (
    <div className="box" onMouseOver={() => setIsopen(value.id)}>
      {value.heading}
      {flag && displaySubModule()}
    </div>
  );
}
