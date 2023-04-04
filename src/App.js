import Home from "./components/Home/Home";
import "./App.css";
const Data1 = require("./Data/db.json");

function App() {
  return (
    <div className="App">
<Home data={Data1}/>
    </div>
  );
}

export default App;