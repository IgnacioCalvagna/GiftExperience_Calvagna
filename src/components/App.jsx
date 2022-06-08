import "../assets/css/App.css";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <header className="App-header">
          <div>
            <strong>Hola mundo... Soy Coder-app</strong>
          </div>

          <div className="miCard">
            <Card />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
