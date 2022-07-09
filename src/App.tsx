import { Header } from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bannerPrincipal">
        <span>comunidade dev</span>
        <h1>
          Projetos da <br />
          comunidade Codelândia
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis<br />
          ligula, accumsan nec cursus in, eleifend sit amet dui.
        </p>
      </div>
    </div>
  );
}

export default App;
