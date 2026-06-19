import Home from "./component/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./component/navbar";
import GetApp from "./component/getApp";
import About from "./component/about";
import Careers from "./component/careers";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-app" element={<GetApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
