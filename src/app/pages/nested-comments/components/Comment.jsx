import React, { useRef, useState } from "react";
import "./style.css";

const Comment = ({
  comment = {},
  onSubmitComment,
  onEditComment,
  onDeleteComment,
}) => {
  console.log("comments: ", comment);

  const [expand, setExpand] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const addDislike = () => {};
  const editReply = () => {
    setEditMode(true);
  };

  const toggleReply = () => {
    setExpand(!expand);
  };
  const handleReplySubmit = () => {
    if (inputValue) {
      onSubmitComment(comment.id, inputValue);
      setInputValue("");
    }
  };
  const handleEditReply = () => {
    if (isEditMode) {
      onEditComment(comment.id, editContent);
      setEditMode(false);
    }
  };
  const handleDeleteReply = () => {
    onDeleteComment(comment.id);
  };

  return (
    <div className="comment-container">
      <div className="comment-item">
        {isEditMode ? (
          <div className="nested-comment">
            <textarea
              autoFocus
              rows={3}
              placeholder="Add a new comment..."
              onChange={(e) => setEditContent(e.target.value)}
              value={editContent}
            />
            <button onClick={handleEditReply}>Save Edit</button>
            <button
              onClick={() => {
                setEditMode(false);
                setEditContent(comment.content);
              }}
            >
              Cancel Edit
            </button>
          </div>
        ) : (
          <span onDoubleClick={editReply}>{comment.content}</span>
        )}

        <span>{`Votes: ${comment.votes}`}</span>
        <span>{new Date(comment.timestamp).toLocaleString()}</span>
        <div className="button-container">
          <button onClick={(e) => addLike(e, comment.id)}>👍</button>
          <button onClick={addDislike}>👎</button>
          <button onClick={toggleReply}>
            {expand ? "Hide Reply" : "Reply"}
          </button>
          <button onClick={editReply}>Edit</button>
          <button onClick={handleDeleteReply}>Delete</button>
        </div>
        {expand && (
          <div className="nested-comment">
            <textarea
              autoFocus
              rows={3}
              placeholder="Add a new comment..."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button onClick={handleReplySubmit}>Add Comment</button>
          </div>
        )}

        {comment?.replies?.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            onSubmitComment={onSubmitComment}
            onEditComment={onEditComment}
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
