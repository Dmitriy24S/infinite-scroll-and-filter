const Post = ({ id, title, body, createMakrup }) => {
  return (
    <article key={id} className="post">
      <span className="post-number">{id}</span>
      <h3 dangerouslySetInnerHTML={createMakrup(title)}></h3>
      <p dangerouslySetInnerHTML={createMakrup(body)}></p>
    </article>
  );
};

export default Post;
