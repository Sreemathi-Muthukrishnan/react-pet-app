import ReactDOM from 'react-dom';
import { Pet } from './Pet';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Stuart" animal="Dog" breed="Golden Retriever" />
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)