import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Pokemon from "./pages/Pokemon";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemon" element={<Pokemon />}></Route>
        <Route path="/skills" element={<Skills />}></Route>

      </Routes>
    </>
  );
}

export default App;
