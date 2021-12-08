import { HashRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import Home from "./pages/home";
import Footer from "./components/footer";
import AdminProducts from "./pages/products/admin-products";
import { Container } from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Header/>
      <div className="d-flex flex-column flex-fill">
        <br/>
        <br/>
          <Routes>
            <Route path="/login" element={ <div>Login</div> }/>
            <Route path="/admin" element={ <AdminProducts/> }/>
            <Route path="/" element={ <Home/>}/>
          </Routes>
        <br/>
        </div>
      <Footer/>
      </div>
     
    </HashRouter>
  );
}

export default App;
