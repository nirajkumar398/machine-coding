import { useState } from "react";

const useCommentTree = (initialData) => {
  const [comments, setComments] = useState(initialData);
  const insertNode = (tree, commentId, newComment) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newComment],
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, newComment),
        };
      } else {
        return comment;
      }
    });
  };

  const insertComment = (commentId, content) => {
    console.log("content: is", content);
    const newComment = {
      id: Date.now(),
      content: content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  const updateNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content: content,
          timestamp: new Date().toISOString(),
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateNode(comment.replies, commentId, content),
        };
      } else {
        return comment;
      }
    });
  };
  const deleteNode = (tree, commentId) => {
    return tree
      .map((comment) => {
        if (comment.id === commentId) {
          return null;
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: deleteNode(comment.replies, commentId),
          };
        } else {
          return comment;
        }
      })
      .filter((comment) => comment);
  };
  const updateComment = (commentId, content) => {
    setComments((prevComments) => updateNode(prevComments, commentId, content));
  };
  const deleteComment = (commentId) => {
    setComments((prevComments) => deleteNode(prevComments, commentId));
  };
  return {
    comments,
    setComments,
    insertComment,
    updateComment,
    deleteComment,
  };
};

export default useCommentTree;
