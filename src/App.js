import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";
import More from "./More";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App fal">
      <BrowserRouter className="z-3">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={[
              <Home />,
              <Portfolio />,
              <More />,
              <Skills />,
              <About />,
              <Contact />,
            ]}
          />
          <Route path={"/detail/:id"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
