import React, { useState } from "react";
import { useParams } from "react-router";

export default function PostApi() {
  const [items, setItems] = useState();
  const { idN } = useParams();
  let productos =
  [
    {
      username: "agsulu",
      passwordHash: "kahdfgfkagifhsb",
      posts: [
        {
          content: "este mensasje esta preparado",
          date: "2023-04-16T16:26:22.028Z",
          id: "643c21ae3674ed799932951a"
        },
        {
          content: "este mensasje esta preparado",
          date: "2023-04-16T19:32:00.406Z",
          id: "643c4d303674ed7999329521"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:32:39.280Z",
          id: "643c4d573674ed7999329527"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:34:58.153Z",
          id: "643c4de23674ed799932952d"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:37:17.836Z",
          id: "643c4e6d3674ed7999329532"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:38:16.207Z",
          id: "643c4ea83674ed7999329536"
        }
      ],
      id: "6434affec993b304168c7b27",
      idN:1
    },
    {
      username: "agsulu23413423",
      passwordHash: "kahdfgfkagifhsb",
      posts: [
        {
          content: "este mensasje esta preparado",
          date: "2023-04-16T16:26:22.028Z",
          id: "643c21ae3674ed799932951a"
        },
        {
          content: "este mensasje esta preparado",
          date: "2023-04-16T19:32:00.406Z",
          id: "643c4d303674ed7999329521"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:32:39.280Z",
          id: "643c4d573674ed7999329527"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:34:58.153Z",
          id: "643c4de23674ed799932952d"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:37:17.836Z",
          id: "643c4e6d3674ed7999329532"
        },
        {
          content: "este mensasje esta preparado 1",
          date: "2023-04-16T19:38:16.207Z",
          id: "643c4ea83674ed7999329536"
        }
      ],
      id: "6434affec993b304168c7b27",
      idN:2
    }
  ]
  

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 200);
  });
  getItem.then((resolve) => setItems(resolve));/* 
  console.log(getItem); */
  /* largo del div */


  window.addEventListener('load', function() {
    // Obtener el div y el párrafo
    var div = document.getElementById('contenedor');
    var parrafo = document.getElementById('parrafo');
    
    // Obtener la altura del párrafo
    var alturaParrafo = parrafo.offsetHeight;
    
    // Asignar la altura del párrafo al div
    div.style.height = alturaParrafo + 'px';
  });
  return (
    <>
      {productos[idN-1] ? (
        <div className="col-9 perfilPostsUser">
          <div className="perfilPosts ">
            <div className="perfilContainer">
              <div className="portada">
                <img src=/* {productos[idN-1 ].portada} */"" alt="" />
              </div>
              <div className="dataUser">
                <div className="foto">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg/1200px-Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg.png"
                    alt=""
                  />
                </div>
                <h3>{productos[idN-1].username}</h3>
              </div>
            </div>
          </div>

          {productos[idN-1].posts.map((type, index) => {
            return (
              <div
                key={index}
                className="postMessageContainer"
                id="contenedor"
              >
                <div className="dataUser">
                  <div className="foto">
                    <img src=/* {productos[idN-1].pic} */"" alt="" />
                  </div>
                  <h3>{productos[idN-1].username} &nbsp;{productos.id}</h3>
                </div>  

                <p key={index} id="parrafo">{type.content}</p>
                {/* 
                <FlushExample 
                  mensaje= {productos[id].mensaje}
                  modelo= {productos[id].modelo}/> */}
              </div>
            );
          })}
          {/* PASAR LAS RESPUESTAS A LOS POSTEOS POR PARAMETRO A FLUSHESXAMPLE  */}
        </div>
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
}
