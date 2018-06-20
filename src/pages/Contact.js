import React from "react";
import Header from "../components/Header";

const Contact = function() {
  return (
    <div className="Page">
      <Header />This is the Contact Page.
      <form id="form" class="topBefore">
        <input id="name" type="text" placeholder="NAME">
        <input id="email" type="text" placeholder="E-MAIL">
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="GO!">
      </form>
    </div>
  );
};

export default Contact;
