import React from "react";
import { useDrop } from "react-dnd";

const ItemTypes = {
  ELEMENT: "element",
};

const Canvas = ({ elements, setElements, setSelected }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: (item) => {
      setElements([...elements, { id: Date.now(), type: item.type, properties: {} }]);
    },
  }));

  return (
    <div
      ref={drop}
      className="flex-1 min-h-screen bg-gray-50 p-4 grid grid-cols-2 gap-4"
    >
      {elements.map((el) => (
        <div
          key={el.id}
          onClick={() => setSelected(el.id)}
          className="border border-gray-300 p-2 bg-white rounded shadow-sm"
        >
          {el.type}
        </div>
      ))}
    </div>
  );
};

export default Canvas;