

import React from "react";

const PropertiesForm = ({ selectedElement, updateElement }) => {
  if (!selectedElement) return <div className="p-4">Select an element</div>;

  const handleChange = (e) => {
    updateElement({
      ...selectedElement,
      properties: {
        ...selectedElement.properties,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="p-4 space-y-2">
      <input
        name="label"
        value={selectedElement.properties.label || ""}
        onChange={handleChange}
        placeholder="Element Label"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default PropertiesForm;
