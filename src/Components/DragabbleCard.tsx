import React from "react";
import { Draggable } from "react-beautiful-dnd";


interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string;
    index: number;
}

function DragabbleCard({toDoId, index, toDoText}:IDragabbleCardProps){
    return(
        <Draggable  draggableId={toDoId.toString()} index={index}>
        {(magic, snapshot) =>  (
           <li
           ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}
           className={`bg-white p-2 rounded-md mb-2 ${snapshot.isDragging ? "shadow-lg bg-blue-300": ""}`}
           >
          {toDoText}
          </li>
          )}
      </Draggable>
    );
}
export default React.memo(DragabbleCard);