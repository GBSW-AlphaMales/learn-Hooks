import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Main/Home/Home";
import UseStateCount from "./pages/useState/Count";
import Info from "./pages/useState/Info";
import Visible from "./pages/useState/Visible";
import ContextSample from "./pages/useContext/ContextSample";
import UseReducerCount from "./pages/useReducer/Count";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* useState */}
        <Route path={"/stateCount"} element={<UseStateCount />} />
        <Route path={"/info"} element={<Info />} />
        <Route path={"/visible"} element={<Visible />} />
        {/* useContext */}
        <Route path={"/contextsample"} element={<ContextSample />} />
        {/* useReducer */}
        <Route path={"/reducerCount"} element={<UseReducerCount />} />
      </Routes>
    </Router>
  );
}

export default App;
