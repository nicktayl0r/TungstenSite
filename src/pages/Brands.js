import React from "react";
import "./PageStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Brands = function() {
  return (
    <div className="Page">
      <Header />
      <Parallax bgImage={require("./../assets/wallpaper1.jpg")} strength={500}>
        <div className="parallax p1" />
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper2.jpg")}>
        <div className="parallax p2">
          <div>Lorem ipsum dolor</div>
        </div>
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper3.jpg")}>
        <div className="parallax p3">
          <div>Lorem ipsum dolor</div>
          <div>sit amet, consectetur adipiscing elit</div>
        </div>
      </Parallax>
      <Parallax bgImage={require("./../assets/wallpaper4.jpg")}>
        <div className="parallax p4">
          <div>Lorem ipsum dolor</div>
          <div>sit amet, consectetur adipiscing elit</div>
        </div>
      </Parallax>
      <div className="contactDiv">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        <div>
          <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
