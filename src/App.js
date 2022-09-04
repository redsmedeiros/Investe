import "./styles.css";
import Investimentos from "./Investimentos";
import Navbar from "./Navbar";
import Menu from "./Menu"

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
          <Menu></Menu>
        <Investimentos></Investimentos>
      </div>
    </div>
  );
}
