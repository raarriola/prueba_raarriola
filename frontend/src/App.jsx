import { HashRouter, Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import Home from "./pages/home";
import Footer from "./components/footer";
import AdminProducts from "./pages/products/admin-products";
import { Container } from "react-bootstrap";
import Login from "./pages/login";
import {ProtectedRoute} from "./components/protectedroute";

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Header/>
      <div className="d-flex flex-column flex-fill">
        <br/>
        <br/>
          <Routes>
            <Route Route exact path="/login" element={ <Login/> }/>
            <Route Route exact path="/admin" element={ <ProtectedRoute><AdminProducts/></ProtectedRoute> }/>
            <Route  path="/" element={ <Home/>}/>
          </Routes>
        <br/>
        </div>
      <Footer/>
      </div>
     
    </HashRouter>
  );
}

export default App;
