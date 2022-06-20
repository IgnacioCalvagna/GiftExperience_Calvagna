import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

// import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
        <Navbar />
      <div >

        <div className="misItems">
          <ItemListContainer nombre={"Ignacio"} apellido={'Calvanga'} />
        </div>


        
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
