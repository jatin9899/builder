import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Toolbox from "./Toolbox";
import Canvas from "./Canvas";
import PropertiesForm from "./PropertiesForm";

const Builder = () => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const updateElement = (updated) => {
    setElements((prev) => prev.map((el) => (el.id === updated.id ? updated : el)));
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <div className="w-1/6 border-r p-2">
          <Toolbox />
        </div>
        <Canvas elements={elements} setElements={setElements} setSelected={setSelectedId} />
        <div className="w-1/4 border-l p-2">
          <PropertiesForm selectedElement={selectedElement} updateElement={updateElement} />
        </div>
      </div>
    </DndProvider>
  );
};

export default Builder;