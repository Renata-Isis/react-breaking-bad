//Config React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages 
import Home from "./pages/HomePage/Home";
import Characters from "./pages/CharactersPage/Characters";
import NotFound from "./pages/NotFoundPage/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:char_id" element={<Characters />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

