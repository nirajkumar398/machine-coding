import React, { useState } from "react";
import "./style.css";
import data from "./data/comments.json";
import Comment from "./components/Comment";
import useCommentTree from "./hooks/use-comment-tree";

const NestedComments = () => {
  const { insertComment, comments, updateComment, deleteComment } = useCommentTree(data);
  const [inputValue, setInputValue] = useState("");
  const addCommentHandler = (contentId, content) => {
    insertComment(contentId, content);
    setInputValue("");
  };

  const handleReply = (commentId, content) => {
    console.log("nirah is : ", content);
    insertComment(commentId, content);
  };

  const handleEdit = (commentId, content) => {
    updateComment(commentId, content);
  };
  const handleDelete = (commentId) => {
    deleteComment(commentId);
  };
  return (
    <div className="nested-container">
      <h1>Nested Comments</h1>
      <div className="nested-comment">
        <textarea
          rows={3}
          placeholder="Add a new comment..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => addCommentHandler(null, inputValue)}>
          Add Comment
        </button>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onSubmitComment={handleReply}
          onEditComment={handleEdit}
          onDeleteComment={handleDelete}
        />
      ))}
    </div>
  );
};

export default NestedComments;
