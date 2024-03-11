import "./index.css";
import styles from "./style";
import { Hero } from "./components";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="bg-primary">
        <div>
          <Hero />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;