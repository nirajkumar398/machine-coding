import React, { useState } from "react";
import "./Board.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const AddItem = ({ addItem }) => {
  const [input, setInput] = useState("");
  const addItemHandler = () => {
    addItem({
      id: Date.now().toString(),
      title: input,
    });
    setInput("");
  };
  return (
    <div className="add-item">
      <input
        placeholder="Enter an Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItemHandler}> Add Item</button>
    </div>
  );
};

const Item = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <li
          index={index}
          className="item"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={{ ...provided.draggableProps.style }}
        >
          {item.title}
        </li>
      )}
    </Draggable>
  );
};

const List = ({ list, addItem }) => {
  return (
    <Droppable droppableId={list.id}>
      {(provided) => (
        <div
          className="list-item"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{list.title}</h2>
          {list.items.map((item, index) => (
            <Item key={item.id} item={item} index={index} />
          ))}
          <AddItem addItem={addItem} />
        </div>
      )}
    </Droppable>
  );
};

const AddList = ({ boardsId, addList }) => {
  const addListHandler = () => {
    const newList = {
      id: Date.now().toString(),
      title: "New Projects",
      items: [],
    };
    addList(boardsId, newList);
  };
  return (
    <div>
      <input />
      <button onClick={addListHandler}>Add Projects</button>
    </div>
  );
};

const Board = ({ addItem, boards, reorderListItems, addList, addNewBoard }) => {
  const addItemToList = (listId, newItem) => {
    addItem(boards.id, listId, newItem);
  };

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;

    if (!source || !destination) return;

    reorderListItems(
      boards.id,
      source.droppableId,
      source.index,
      destination.droppableId,
      destination.index
    );
  };

  return (
    <div>
      <button onClick={addNewBoard}>Add a new Board</button>
      <h1>{boards.title}</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="list-container">
          {boards.lists.map((list) => (
            <List
              list={list}
              key={list.id}
              addItem={(item) => addItemToList(list.id, item)}
            />
          ))}
          <AddList addList={addList} boardsId={boards.id} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
