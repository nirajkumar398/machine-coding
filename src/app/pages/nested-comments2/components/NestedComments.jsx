import React, { useState } from "react";
import Comment from "./Comment";
import "./style.css";

const NestedComments = ({ data = [] }) => {
  const [comments, setComments] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const addCommentHandler = (e) => {
    setComments((prevComments) => [
      ...prevComments,
      {
        id: new Date().toISOString(),
        content: inputValue,
        votes: 0,
        timestamp: new Date().toISOString(),
        replies: [],
      },
    ]);
    setInputValue("");
  };
  return (
    <div className="nested-container">
      <div className="nested-main">
        <textarea
          rows={3}
          placeholder="Add a new comment..."
          className="text-input"
          onChange={(e)=> setInputValue(e.target.value)}
          value={inputValue}
          maxLength={200}
        />
        <button className="add-comment-button" onClick={addCommentHandler}>Add Comments</button>
      </div>
      <Comment comments={comments} />
    </div>
  );
};

export default NestedComments;
