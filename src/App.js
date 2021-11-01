import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Post from "./components/Post";
import SearchBar from "./components/SearchBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
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

  // Higlight searched input in posts
  const createMakrup = (html) => {
    return { __html: html };
  };

  // Filter posts by input
  const handleChange = (e) => {
    setValue(e.target.value);
    filterPosts();
    var regex = /^\s+$/;
    // console.log(value.match(regex));
  };

  const filterPosts = () => {
    // If no empty string in input then filter input text
    var regex = /^\s+$/;
    if (value.match(regex) === null) {
      let filteredPosts = posts
        .filter((post) => post.title.indexOf(value) > -1 || post.body.indexOf(value) > -1)
        .map((item) => {
          const regexp = new RegExp(value, "g");
          // console.log(item.title.indexOf(value) > -1);
          if (item.title.indexOf(value) > -1 || item.body.indexOf(value) > -1) {
            return {
              ...item,
              title: item.title.replace(regexp, `<mark>${value}</mark>`),
              body: item.body.replace(regexp, `<mark>${value}</mark>`),
            };
          }
          return item;
        });
      setFilteredArr(filteredPosts);
    }
  };

  // Pass fetched posts into filtered array
  useEffect(() => {
    setFilteredArr(posts);
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
      <SearchBar value={value} handleChange={handleChange} />
      <div className="posts-container">
        {filteredArr.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              createMakrup={createMakrup}
            />
          );
        })}
      </div>
      {loading && loader}
      {scrollBtn}
    </div>
  );
}

export default App;
