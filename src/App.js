import { Route, Routes} from "react-router-dom";
import "./styles.css";
import UserPage from "./containers/UserPage";
import { Home } from "./components/Home/Home";


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/:userName" element={<UserPage />} ></Route>
      </Routes>


    </div>
  );
}
