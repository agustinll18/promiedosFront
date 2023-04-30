import React from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
const Post = () => {
  return (
    <>
      <Navbar1></Navbar1>
      <div className="formulario">
        <form class="row g-3">
          <textarea
            placeholder="Max. 720 caracteres"
            tabindex="5"
            maxlength="720"
            className="inputs "
            required
          ></textarea>{/* 
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label class="form-check-label" for="gridCheck">
                Valido estos datos
              </label>
            </div> 
          </div>*/}
          <div class="col-12 buttonS">
            <button type="submit" class="btn btn-success">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Post;