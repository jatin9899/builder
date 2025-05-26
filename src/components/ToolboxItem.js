import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  ELEMENT: "element",
};

const ToolboxItem = ({ type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="p-2 bg-gray-200 rounded cursor-pointer">
      {type}
    </div>
  );
};

export default ToolboxItem;