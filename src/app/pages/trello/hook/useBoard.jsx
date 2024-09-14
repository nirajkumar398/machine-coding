import { useState } from "react";

const initialData = {
  activeId: "1",
  boards: [
    {
      id: "1",
      title: "My Trello",
      lists: [
        {
          id: "1.1",
          title: "To Do",
          items: [
            {
              id: "1.1.1",
              title: "p1",
            },
            {
              id: "1.1.2",
              title: "p2",
            },
          ],
        },
        {
          id: "1.2",
          title: "In Progress",
          items: [
            {
              id: "1.2.1",
              title: "p2",
            },
            {
              id: "1.2.2",
              title: "p3",
            },
          ],
        },
        {
          id: "1.3",
          title: "Done",
          items: [
            {
              id: "1.3.1",
              title: "p2",
            },
            {
              id: "1.3.2",
              title: "p3",
            },
          ],
        },
      ],
    },
  ],
};

export const useBoard = () => {
  const [boardData, setBoardData] = useState(initialData);
  const activeBoard = boardData.boards.find(
    (board) => board.id == boardData.activeId
  );

  console.log(activeBoard);
  const addItem = (boardId, listId, newItem) => {
    const updatedBords = boardData.boards.map((board) => {
      if (board.id === boardId) {
        const updatedList = board.lists.map((list) => {
          if (list.id === listId) {
            return {
              ...list,
              items: [...list.items, newItem],
            };
          }
          return list;
        });
        return {
          ...board,
          lists: updatedList,
        };
      }
      return board;
    });

    setBoardData((prev) => ({
      ...prev,
      boards: updatedBords,
    }));
  };

  const reorderListItems = (
    boardId,
    sourceId,
    sourceIndex,
    destinationId,
    destinationIndex
  ) => {
    const updatedBoards = boardData.boards.map((board) => {
      if (board.id == boardId) {
        const sourceList = board.lists.find((list) => list.id == sourceId);
        const destinationList = board.lists.find(
          (list) => list.id == destinationId
        );
        if (!sourceList || !destinationList) return board;

        const [movedItem] = sourceList.items.splice(sourceIndex, 1);
        destinationList.items.splice(destinationIndex, 0, movedItem);

        const updatedLists = board.lists.map((list) => {
          if (list.id == sourceId || list.id == destinationId) {
            return {
              ...list,
              items:
                list.id == sourceId ? sourceList.items : destinationList.items,
            };
          }
          return list;
        });
        return {
          ...board,
          lists: updatedLists,
        };
      }
      return board;
    });
    setBoardData((prev) => ({
      ...prev,
      boards: updatedBoards,
    }));
  };

  const addList = (boardsId, newList) => {
    const updatedBoard = boardData.boards.map((board) => {
      if (board.id == boardsId) {
        return {
          ...board,
          lists: [...board.lists, newList],
        };
      }
      return board;
    });
    setBoardData((prev) => ({
      ...prev,
      boards: updatedBoard,
    }));
  };

  const addNewBoard = () => {
    const newBoard = {
      id: "11",
      title: "My Trello",
      lists: []
    };

    setBoardData((prev) => ({
      ...prev,
      activeId: newBoard.id,
      boards: [...prev.boards, newBoard],
    }));
  };

  return {
    activeBoard,
    addItem,
    reorderListItems,
    addList,
    addNewBoard,
  };
};
