import "./styles/App.css";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" id="App" style={{}}>
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
