import React, { useState } from 'react';

const Comment = ({ comment, addComment, editComment, voteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(comment.content);
  const [replyContent, setReplyContent] = useState('');

  const handleEdit = () => {
    editComment(comment.id, newContent);
    setIsEditing(false);
  };

  return (
    <div className="comment">
      <div className="comment-main">
        {isEditing ? (
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          />
        ) : (
          <span className="comment-content" onDoubleClick={() => setIsEditing(true)}>
            {comment.content}
          </span>
        )}
        <div className="comment-info">
          <span className="comment-votes">({comment.votes} votes)</span>
          <span className="comment-timestamp">{new Date(comment.timestamp).toLocaleString()}</span>
          <button onClick={() => voteComment(comment.id, 1)}>Upvote</button>
          <button onClick={() => voteComment(comment.id, -1)}>Downvote</button>
        </div>
      </div>
      <div className="replies">
        {comment.replies.map(reply => (
          <Comment
            key={reply.id}
            comment={reply}
            addComment={addComment}
            editComment={editComment}
            voteComment={voteComment}
          />
        ))}
        <div className="add-reply">
          <input
            type="text"
            placeholder="Reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && replyContent.trim()) {
                addComment(comment.id, replyContent);
                setReplyContent('');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
