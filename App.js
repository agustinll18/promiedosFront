import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; /* 
import Home from "./paginas/Home"; */
import Navbar1 from "./components/Navbar1";
import Footer from "./components/footer/Footer";
import Login from "./paginas/Login";
import "./styles/css/styles.css";
import Bienvenida from "./components/Bienvenida";
import PostApi from "./paginas/PostApiPerfil";
import ScrollToTop from "./FixScroll";
import Foro from "./paginas/Foro";
import SignUp from "./paginas/SignUp";
import Post from "./paginas/Post";

function App() {
  return (
    <div className="app">
      {/* 
      <div className="containerTotal"> */}
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Navbar1 />
              <Bienvenida />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/foro/:idN">
              <Navbar1 />
              <div className="contenedorPerfil">
                <PostApi />
              </div>

              <Footer />
            </Route>
            <Route path="/foro">
              <Navbar1 />
              <Foro />
              <Footer />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
      {/* 
      </div> */}
    </div>
  );
}

export default App;
/* const Layout = () => {
  return (
    <>
      
      <Navbar1 />
      

      <Outlet />
      
      <Footer />
    </>
  );
}; */
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Bienvenida/> ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      ,
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/solo",
        element: <Solo />,
      },
      {
        path: "/Perfil/:id",
        element: <PostApi />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  ,
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/Perfil/:id",
    element: <PostApi />,
  },
  {
    path: "/solo",
    element: <Solo />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
]); */
