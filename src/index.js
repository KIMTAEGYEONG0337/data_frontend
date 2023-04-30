import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import "./index.css";

import App from './App';

ReactModal.setAppElement('#root');

const rootElement = document.getElementById('root');
ReactDOM.render(
    // <StrictMode>
            <App />,
    // </StrictMode>,
    rootElement,
);
