import React from "react";
import styles from "./styles";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Fields from "./components/Fields";
import Grow from "./components/Grow";
import Resources from "./components/Resources";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Fade,Slide } from "react-awesome-reveal";

const App = () => (
  <>
    <div className="w-full overflow-hidden shadow-sm text-xl">
      <div>
        <Fade><Navbar /></Fade>
      </div>
    </div>

    <div className="w-full overflow-hidden text-xl">
      <div>
        <Fade><Intro /></Fade>
      </div>
      <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-2000.webp"></img>

      <div>
        <Fade><Stats /></Fade>
        <Fade><Tools /></Fade>
        <Fade><Fields /></Fade>
        <Fade><Grow /></Fade>
        <Fade><Resources /></Fade>
      </div>

      <div className="bg-[#202020]">
        <div>
        <Fade><Features /></Fade>
        </div>
      </div>

      <div className="bg-black">
        <div>
        <Fade><Footer /></Fade>
        </div>
      </div>
    </div>
  </>
);

export default App;
