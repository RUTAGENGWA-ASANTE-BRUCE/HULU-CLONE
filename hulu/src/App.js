import './App.css';
//@ts-ignore
import Header from './header/Header';
import NavBar from './navBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './navBar/components/Home';
import TopRated from './navBar/components/TopRated';
import Action from './navBar/components/Action';
import Comedy from './navBar/components/Comedy';
import Horror from './navBar/components/Horror';
import Trending from './navBar/components/Trending';
import Romance from './navBar/components/Romance';
import Mystery from './navBar/components/Mystery';
import SciFi from './navBar/components/SciFi';
import Western from './navBar/components/Western';
import Animation from './navBar/components/Animation';
import TVMovie from './navBar/components/TVMovie';
import Results from './navBar/results/Results';

function App ()
{
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Results />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Top Rated" element={<TopRated />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Comedy" element={<Comedy />} />
          <Route path="/Horror" element={<Horror />} />
          <Route path="/Romance" element={<Romance />} />
          <Route path="/Mystery" element={<Mystery />} />
          <Route path="/Sci-Fi" element={<SciFi />} />
          <Route path="/Western" element={<Western />} />
          <Route path="/Animation" element={<Animation />} />
          <Route path="/TV Movie" element={<TVMovie />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
