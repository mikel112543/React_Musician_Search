import Home from './home/Home'
import {Routes, Route} from "react-router-dom";
import ArtistProfile from "./profile/ArtistProfile";
import Layout from "./Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/home" element={<Home/>}>
                </Route>
                <Route path="/artist" element={<ArtistProfile/>}></Route>
            </Routes>
        </Layout>
    );
}

export default App;
