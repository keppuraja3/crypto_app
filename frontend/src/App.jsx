import { Routes, Route } from "react-router-dom";

import "./assets/Css/App.css";
import Home from "./pages/Home";
import CoinsList from "./components/CoinsList";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="coins/list" element={<CoinsList />}></Route>
        {/* <Route path="coin/:id" element={<Home />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
