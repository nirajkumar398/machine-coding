const Comment = ({ comments = [] }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div className="comment-item">
          <span>{comment.content}</span>
          <span>{`Votes: ${comment.votes}`}</span>
          <span>{new Date(comment.timestamp).toLocaleString()}</span>
          <div className="comment-button">
            <button>👍</button>
            <button>👎</button>
            <button>Reply</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          {comment.replies.length > 0 && <Comment comments={comment.replies} />}
        </div>
      ))}
    </div>
  );
};

export default Comment;
