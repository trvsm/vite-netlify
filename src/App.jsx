import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Travis Martin's Blog</h1>
      <p>
        Welcome to my blog, where technology meets efficiency! I'll dive into
        productivity with Python automation for daily tasks. Explore Odoo
        development, from custom modules to JavaScript web services, as I learn
        this open-source business suite. Finally, I'll touch on hosting large
        language models and stable diffusion images on your Intel Mac, balancing
        privacy, innovation, and budget. Welcome to this journey of empowerment
        through code and technology!
      </p>
      {/* <div>
        <p>A Change</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
