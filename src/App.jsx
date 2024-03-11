import "./index.css";
import { Hero } from "./components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Helmet>
        <title>Apaztron | Official Website</title>
        <meta
          name="description"
          content="Official Website Of DJ and Producer Apaztron."
        />
        <meta name="keywords" content="Apaztron, Music, Hardstyle, DJ"></meta>
      </Helmet>
      <div className="bg-primary">
        <div>
          <Hero />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;