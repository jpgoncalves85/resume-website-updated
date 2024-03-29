import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import "./styles.css";
import {BrowserRouter} from "react-router-dom";


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);