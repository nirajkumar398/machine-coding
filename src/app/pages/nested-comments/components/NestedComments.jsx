import React, { useState } from "react";
import Comment from "./Comment";

const NestedComments = ({ data = [] }) => {
  const [comments, setComments] = useState(data);

  const addComment = (parentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      const updatedComments = comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, newComment] }
          : comment
      );
      setComments(updatedComments);
    }
  };

  const editComment = (id, newContent) => {
    const updateComments = (commentsList) => {
      return commentsList.map((comment) =>
        comment.id === id
          ? { ...comment, content: newContent }
          : { ...comment, replies: updateComments(comment.replies) }
      );
    };
    setComments(updateComments(comments));
  };

  const voteComment = (id, increment) => {
    const updateComments = (commentsList) => {
      return commentsList.map((comment) =>
        comment.id === id
          ? { ...comment, votes: comment.votes + increment }
          : { ...comment, replies: updateComments(comment.replies) }
      );
    };
    setComments(updateComments(comments));
  };

  return (
    <div className="nested-container">
      <div className="nested-list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addComment={addComment}
            editComment={editComment}
            voteComment={voteComment}
          />
        ))}
        <div className="add-comment">
          <input
            type="text"
            placeholder="Add a new comment"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                addComment(null, e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NestedComments;
