import React, { useState } from "react";

const Comment = ({ text, isNew }) => {
  const commentClassName = isNew ? "comment new-comment" : "comment";

  return (
    <div className={commentClassName}>
      <span style={{ color: isNew ? "red" : "inherit" }}>{text}</span>
    </div>
  );
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() !== "") {
      const comment = {
        text: newComment,
        isNew: true,
      };

      setComments((prevComments) => [comment, ...prevComments]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2>Комментарии </h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Введите комментарий..."
        ></textarea>
        <div>
          <button type="submit">Добавить комментарий</button>
        </div>
      </form>
      <div className="comments">
        {comments.map((comment, index) => (
          <Comment key={index} text={comment.text} isNew={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
