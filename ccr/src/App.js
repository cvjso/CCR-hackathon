import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/teste">
					<div>
						<text>Ola Usuario</text>
					</div>
					<Navbar />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
