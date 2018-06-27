import React from "react";
import "./PageStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";

const Home = function() {
  const wp2 = "./../assets/wallpaper2.jpg";
  const wp3 = "./../assets/wallpaper3.jpg";
  const wp4 = "./../assets/wallpaper4.jpg";

  return (
    <div className="Page">
      <Header />

      <Parallax bgImage={require("./../assets/wallpaper1.jpg")} strength={500}>
        <div className="parallax">Parallax</div>
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper2.jpg")}>
        <div className="parallax">Parallax</div>
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper3.jpg")}>
        {" "}
        <div className="parallax">Parallax</div>
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper4.jpg")}>
        {" "}
        <div className="parallax">Parallax</div>
      </Parallax>
      <Footer />
    </div>
  );
};

export default Home;
