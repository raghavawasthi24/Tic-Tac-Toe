import './App.css';
import Home from "./Home";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
