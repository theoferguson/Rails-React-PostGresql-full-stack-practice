import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Page Count: {count}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
