import "./index.css";
import styles from "./style";
import { Hero } from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="bg-primary">
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;