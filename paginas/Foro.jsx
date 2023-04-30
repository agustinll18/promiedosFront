import React from "react";
import PostApi from "./PostApi";

const Foro = ({ usuario, id, pic, mensaje }) => {
  return (
    <div className="perfilPosts col-9">
      <div className="perfilContainer ">
        <div className="portada">
          <img src="https://www.naiz.eus/media/asset_publics/resources/000/959/261/article_main_landscape/Argentina.jpg" alt="" />
        </div>
        <div className="dataUser">
          <div className="foto">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg/1200px-Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg.png"
              alt=""
            />
          </div>
          <h2>
            <b>ARGENTINA CAMPEON DEL MUNDO {usuario}</b>{" "}
          </h2>
        </div>
      </div>
      <PostApi />
    </div>
  );
};

export default Foro;

