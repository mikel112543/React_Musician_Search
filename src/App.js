import Home from './home/Home'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
      </Routes>
  );
}

export default App;
