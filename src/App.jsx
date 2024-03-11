import "./index.css";
import styles from "./style";
import { Hero } from "./components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
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