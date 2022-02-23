import './App.css'
import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import DogContainer from "./DogContainer"
import PoopList from "./PoopList"

function App() {
  const [allPoops, setAllPoops] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <DogContainer allPoops={allPoops} setAllPoops={setAllPoops} />
        </header>
        <PoopList allPoops={allPoops} setAllPoops={setAllPoops} />
      </div>
    </BrowserRouter>
  );
}

export default App;
