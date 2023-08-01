import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);