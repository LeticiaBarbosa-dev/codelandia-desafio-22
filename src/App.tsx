import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bannerPrincipal">
        <span>comunidade dev</span>
        <h1>
          Projetos desenvolvidos com ReactJs
        </h1>
        <p>
          Estes projetos foram desenvolvidos durante eventos que participei e suas tecnologias. <br />A seguir destaquei dois dos que mais gostei de desenvolver. 
        </p>
      </div>
      <div className="cardContainer">
        <Card
          imageUrl="https://user-images.githubusercontent.com/78429537/177160284-c3c0e9f0-0442-419a-8419-21c56a619b11.png"
          repositoryUrl="https://github.com/LeticiaBarbosa-dev/ignite-feed"
          projectName="Ignite Feed"
          demoUrl="https://ignite-feed-mu.vercel.app/"
          description="Esta aplicação foi criada durante a trilha de ReactJs do Ignite, pela plataforma da Rocketseat."
        />
        <Card
          imageUrl="https://user-images.githubusercontent.com/78429537/176793597-f1a91255-9046-43fa-9c98-00edf0026c24.png"
          repositoryUrl="https://github.com/LeticiaBarbosa-dev/event-plataform"
          projectName="Event Plataform"
          demoUrl="https://event-plataform-sage.vercel.app/"
          description="Esta aplicação foi criada o Ignite Lab, evento que ocorreu 19 e 26 de junho de 2022, promovo pela Rocketseat."
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
