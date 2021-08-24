import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);

  let limit = 5;
  let page = 1;

  const fetchPosts = async () => {
    setloading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts((posts) => [...posts, ...data]);
    setloading(false);
  };

  const loadMorePosts = () => {
    page++;
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    if (loading) return;
    setloading(true);
    setTimeout(() => {
      loadMorePosts();
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loader = (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );

  return (
    <div className="App">
      <h1>Infinite Scroll & Filter</h1>
      <div className="filter-container">
        <input type="text" placeholder="filter posts..." />
      </div>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <article key={post.id} className="post">
              <span className="post-number">{post.id}</span>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          );
        })}
      </div>
      {loading && loader}
    </div>
  );
}

export default App;
