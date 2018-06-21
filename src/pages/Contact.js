import React from "react";
import Header from "../components/Header";
import "./PageStyles.css";

const Contact = () => {
  return (
    <div className="Page">
      <Header />
      <h1>Contact the Team</h1>
      <form id="form" class="topBefore">
        <input id="name" type="text" placeholder="NAME" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <textarea id="message" type="text" placeholder="MESSAGE" />
        <input id="submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Contact;
