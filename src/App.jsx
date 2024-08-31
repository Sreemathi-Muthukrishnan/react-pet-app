import ReactDOM from "react-dom";
import { Pet } from "./Pet";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Stuart" animal="Dog" breed="Golden Retriever" />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
