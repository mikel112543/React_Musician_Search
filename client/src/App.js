import Home from './home/Home'
import { Routes, Route} from "react-router-dom";
import ArtistProfile from "./profile/ArtistProfile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/artist"  element={<ArtistProfile/>}></Route>
      </Routes>
  );
}

export default App;
