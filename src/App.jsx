import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

// import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="App ALFO">
        <Navbar />

        <ItemListContainer nombre={"Ignacio"} apellido={'Calvanga'} />

        
        <Footer />
      </div>
    </>
  );
}

export default App;
