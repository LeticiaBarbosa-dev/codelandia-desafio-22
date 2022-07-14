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
          Projetos da <br />
          comunidade Codelândia
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
          <br />
          ligula, accumsan nec cursus in, eleifend sit amet dui.
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
          imageUrl="https://user-images.githubusercontent.com/78429537/177160284-c3c0e9f0-0442-419a-8419-21c56a619b11.png"
          repositoryUrl="https://github.com/LeticiaBarbosa-dev/ignite-feed"
          projectName="Ignite Feed"
          demoUrl="https://ignite-feed-mu.vercel.app/"
          description="Esta aplicação foi criada durante a trilha de ReactJs do Ignite, pela plataforma da Rocketseat."
        />
        <Card
          imageUrl="https://user-images.githubusercontent.com/78429537/177160284-c3c0e9f0-0442-419a-8419-21c56a619b11.png"
          repositoryUrl="https://github.com/LeticiaBarbosa-dev/ignite-feed"
          projectName="Ignite Feed"
          demoUrl="https://ignite-feed-mu.vercel.app/"
          description="Esta aplicação foi criada durante a trilha de ReactJs do Ignite, pela plataforma da Rocketseat."
        />
        <Card
          imageUrl="https://user-images.githubusercontent.com/78429537/177160284-c3c0e9f0-0442-419a-8419-21c56a619b11.png"
          repositoryUrl="https://github.com/LeticiaBarbosa-dev/ignite-feed"
          projectName="Ignite Feed"
          demoUrl="https://ignite-feed-mu.vercel.app/"
          description="Esta aplicação foi criada durante a trilha de ReactJs do Ignite, pela plataforma da Rocketseat."
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
