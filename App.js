import logo from './JCPT.JPG';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: "50px", marginLeft: "20%" }}>Sri Chinna Polamamba Ammavari Temple</h1>
        <marquee scrollamount="20" style={{ color: "olive", fontSize: "50px" }}>
        Om Chinna Polamamba Deviye Namah
        </marquee>
        <img src={logo} alt="Sri Chinna Polamamba" style={{ marginLeft: "60%" }} />
      </header>
    </div>
  );
}

export default App;
