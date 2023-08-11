
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // 導入 Link 元件
import WeekOne from "./pages/weekOne";
import WeekTwo from "./pages/weekTwo";
import WeekThree from "./pages/weekThree";
import WeekFour from "./pages/weekFour";

function App(){
  return (
  <div className="container">
    <BrowserRouter>
    <h2 className="text-center text-white fs-48 my-24">2023 React 入門攻略工作坊</h2>
    <nav>
      <ul className="d-flex justify-content-between text-info mb-24">
        <li className="">
          <Link to="" className="fs-24 text-info">Home</Link>
        </li>
        <li>
          <Link to="weekOne" className="fs-24 text-info">第一周</Link>
        </li>
        <li>
          <Link to="weekTwo" className="fs-24 text-info">第二周</Link>
        </li>
        <li>
          <Link to="weekThree" className="fs-24 text-info">第三周</Link>
        </li>
        <li>
          <Link to="weekFour" className="fs-24 text-info">第四周</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="weekOne" element={<WeekOne />} />
      <Route path="weekTwo" element={<WeekTwo />} />
      <Route path="weekThree" element={<WeekThree />} />
      <Route path="weekFour" element={<WeekFour />} />
    </Routes>
  </BrowserRouter>
  </div>
  )}
export default App;