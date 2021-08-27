import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredArr1, setFilteredArr1] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setloading] = useState(false);

  let limit = 5;
  let page = 1;

  // Initial fetch of first posts
  const fetchPosts = async () => {
    setloading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts((posts) => [...posts, ...data]);
    setloading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts by input
  const handleChange = (e) => {
    setValue(e.target.value);
    filterPosts();
    var regex = /^\s+$/;
    console.log(value.match(regex));
  };

  const filterPosts = () => {
    // If no empty string in input then filter input text
    var regex = /^\s+$/;
    if (value.match(regex) === null) {
      let filteredArr = posts.filter(
        (post) =>
          post.title.indexOf(value) > -1 || post.body.indexOf(value) > -1
      );
      setFilteredArr1(filteredArr);
    }
  };

  // Pass fetched posts into filtered array
  useEffect(() => {
    setFilteredArr1(posts);
    if (value !== "") {
      filterPosts();
    }
  }, [posts, value]);

  // Fetch on scroll to bottom
  const loadMorePosts = () => {
    page++;
    fetchPosts();
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (loading) return;
    setloading(true);
    console.log("Fetch more list items!");
    if (loading) return;
    if (!loading) {
      setTimeout(() => {
        loadMorePosts();
      }, 1000);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBtn = (
    <button className="scrollBtn" onClick={scrollTop}>
      <IoIosArrowUp /> Back to Top
    </button>
  );

  // Loader
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
        <input
          type="text"
          placeholder="filter posts..."
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="posts-container">
        {filteredArr1.map((post) => {
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
      {scrollBtn}
    </div>
  );
}

export default App;
