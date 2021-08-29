const Post = ({ id, title, body }) => {
  return (
    <article key={id} className="post">
      <span className="post-number">{id}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

export default Post;
