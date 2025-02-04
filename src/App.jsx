import { useState } from "react";
import "./App.css";
import data from "./assets/posts.json";
import Post from "./components/post/post";

// TODO: use netlify functions to setup a headless email server

function App() {
  const [blogPosts, setBlogPosts] = useState(data);
  return (
    <>
      <section className="header">
        <h1>Travis Martin's Blog</h1>
        <details>
          <summary>About</summary>
          Welcome to my blog, where technology meets efficiency! I'll dive into
          productivity with Python automation for daily tasks. Explore Odoo
          development, from custom modules to JavaScript web services, as I
          learn this open-source business suite. Finally, I'll touch on hosting
          large language models and stable diffusion images on your Intel Mac,
          balancing privacy, innovation, and budget. Welcome to this journey of
          empowerment through code and technology!
        </details>
      </section>
      {blogPosts.length ? (
        blogPosts.map((post, index) => {
          // ignore index 0; it's the template
          return index === 0 ? (
            ""
          ) : index === blogPosts.length - 1 ? (
            <Post
              open="true"
              key={post.title + index}
              title={post.title}
              date={post.date}
              body={post.body}
            />
          ) : (
            <Post
              open="false"
              key={post.title + index}
              title={post.title}
              date={post.date}
              body={post.body}
            />
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default App;
