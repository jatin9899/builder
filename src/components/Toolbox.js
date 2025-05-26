import React from "react";
import ToolboxItem from "./ToolboxItem";

const Toolbox = () => {
  const elements = ["Text", "Image", "Button"];

  return (
    <div className="p-2 space-y-2">
      {elements.map((type) => (
        <ToolboxItem key={type} type={type} />
      ))}
    </div>
  );
};

export default Toolbox;