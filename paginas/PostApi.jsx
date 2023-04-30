import React, { useState } from "react";
import Perfil from "./Foro";
import { Link } from "react-router-dom";

export default function PostApi() {
  const [items, setItems] = useState(); /* 
  const { id } = useParams(); */
  let productos = /* [
    {
      usuario: "agsulu",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgilor   emduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgiloremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "BASTA DE JUGADORES BLANCO EN LA SELECCIÓN. NECESITAMOS GENTE QUE INTIMIDE, NEGROS AFRICANOS DE 2 METROS QUE TE PROVOQUEN MIED0, QUE LOS RIVALES NO QUIERAN ENFRENTARLOS, BASTA DE RUBIECITOS OJOS CLAROS BASTA DE FOYTH DE DOMINGUEZ DE TAGLIAFICO Y D TODOS ESos, sCALONI ESTUPIDO ANDÁ DE SAFARI A AFRICA Y TRAE A LOS JUGADORES MAS NEGROS QUJE EXISTAN, QUE SEAN CANIBALES TENGAN EL PELO MAL CORTADO Y MIDAN2 METROs, METELOS EN UNA JAULA, TRAELOS ACAY NACIONALIZALOS.",
      ],
      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/raqueta-babolat-pure-aero-rafa-11-f76905019f374da10316536730023986-640-0.jpg",
    },
    {
      usuario: "1",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/pure-drive-encordada-21-358f17888d656be79c16341391022033-640-0.png",
    },
    {
      usuario: "2",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/babolat-pure_strike_100-11-7434b6518bd529d73016357184390406-480-0.png",
    },
    {
      usuario: "3",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://cdn-mdb.head.com/CDN3/G/233602/1/400x400/speed-pro-2022.jpg",
    },
    {
      usuario: "4",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://cdn-mdb.head.com/CDN3/G/236101/1/400x400/prestige-pro-2021.jpg",
    },
    {
      usuario: "5",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://cdn-mdb.head.com/CDN3/G/234101/1/400x400/radical-pro.jpg",
    },
    {
      usuario: "6",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wr074510u_1_clash_108_v2_rd_bl-1200x1200_2_1.jpeg",
    },
    {
      usuario: "7",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wrt73181u_5.jpg",
    },
    {
      usuario: "8",
      mensaje: [
        "loremduifgisgfute7934",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",

        "loremduifgisgfute793eigw8f7twe4r7342t87rftgyasefg6874ftiw34gf8o7asrtgi",
      ],

      pic: "https://wilsonstore.com.ar/media/catalog/product/cache/70463b1ff005ad550922e9aee1aaa0df/w/r/wr079111u_1_blade_104_v8_iridescent-1200x1200_2.jpeg",
    },
    ,
  ]; */

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
    setTimeout(() => resolve(items), 2000);
  });
  getItem.then((resolve) => setItems(resolve));
  console.log(items);

  /* largo del div */

  /*  window.addEventListener('load', function() {
    // Obtener el div y el párrafo
    var div = document.getElementById('contenedor');
    var parrafo = document.getElementById('parrafo');
    
    // Obtener la altura del párrafo
    var alturaParrafo = parrafo.offsetHeight;
    
    // Asignar la altura del párrafo al div
    div.style.height = alturaParrafo + 'px';
  });
   */
  return (
    <>
      {productos /* [id - 1] */ ? (
        <div>
          {productos.map((item, index /* ,id */) => {
            <Perfil usuario={item.username} id={item.id} />;
            return (
              <Link to={`/foro/${item.idN}`} className="card-footer">
                <div key={index}>
                  <div className="perfilMessage">{/* 
                    <h3>{item.username}</h3> */}
                  </div>
                  {item.posts.map((type, index) => {
                    return (
                      <div
                        key={index}
                        id="contenedor"
                        className="postMessageContainer"
                      >
                        <div className="dataUser">
                          <div className="foto">
                            <img src=/* {item.pic} */"" alt="" />
                          </div>
                          <h3>{item /* [id - 1] */.username}</h3>{" "}
                          <h5 className="date">
                            <em>
                              <small>{type /* [id - 1] */.date}</small>{" "}
                            </em>
                          </h5>
                        </div>

                        <div className="pText">
                          <p key={index} id="parrafo">
                            {type /* [id - 1] */.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Link>
            );
          })}
          {/* 
            </div> 
          );
        })}*/}
        </div>
      ) : (
        <h2>Cargando....</h2>
      )}
    </>
  );
}
