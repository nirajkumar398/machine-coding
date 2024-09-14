import React, { useState } from "react";
import Board from "./components/Board";
import { useBoard } from "./hook/useBoard";
const Trello = () => {
  const { activeBoard, addItem, reorderListItems, addList, addNewBoard } = useBoard();
  return (
    <Board
      boards={activeBoard}
      addItem={addItem}
      reorderListItems={reorderListItems}
      addList={addList}
      addNewBoard={addNewBoard}
    />
  );
};

export default Trello;
