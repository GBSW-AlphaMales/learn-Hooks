import "./App.css";
import Home from "./pages/Home/Home";
import Count from "./pages/useState/Count";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./pages/useState/Info";
import Visible from "./pages/useState/Visible";
import ContextSample from "./pages/useContext/ContextSample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* useState */}
        <Route path={"/count"} element={<Count />} />
        <Route path={"/info"} element={<Info />} />
        <Route path={"/visible"} element={<Visible />} />
        {/* useContext */}
        <Route path={"/contextsample"} element={<ContextSample />} />
      </Routes>
    </Router>
  );
}

export default App;
