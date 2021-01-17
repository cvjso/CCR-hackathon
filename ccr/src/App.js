import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar"

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/sofia">
					<Home />
				</Route>
				<Route path="/">
					<div>
						<text>Ola Usuario</text>
					</div>
					<Navbar/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
