import './App.css';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/FixedRouter/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      
    </div>
  );
}

export default App;
