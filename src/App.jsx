import "./assets/css/App.css";
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer/Footer";


// import FetchApi from "./clases/claseFetch/CatsContainer";


function App() {
  return (
    <>
        <Navbar />
      <div >

        {/* <FetchApi/> */}
        <div className="misItems">
          <ItemListContainer nombre={"Ignacio"} apellido={'Calvanga'} />
        </div>


        
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
