import React from "react";
import $ from "jquery";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

/* $("#signup").click(function () {
  $(this).css({ opacity: 0, display: "none" });
  $("#login").css({ opacity: 1, display: "list-item" });
  $(".message").css("transform", "translateX(100%)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("login");
  }
  $(".message").addClass("signup");
});

$("#login").click(function () {
  $(this).css({ opacity: 0, display: "none" });

  $("#signup").css({ opacity: 1, display: "list-item" });
  $(".message").css("transform", "translateX(0)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("signup");
  } 
  $(".message").addClass("login");
}); */
const Login = () => {
  return (
    <>
      <Navbar1 />
      <div className="containerL">
        <div className="message signup">
          <div className="btn-wrapper">
            <Link to={`/signUp`} className="button" id="login">
              Soy nuevo
            </Link >
            
          </div>
        </div>
        
        <div className="form form--login">
          <div className="form--heading">Hola de nuevo! </div>
          <form autocomplete="off">
            <input type="text" placeholder="Nombre" required />
            <input type="password" placeholder="Contraseña" required />
            <button className="button">Loguearse</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
