import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Acess from './components/Acess';
import Login from './components/Login';
import LoginAuth from './components/LoginAuth';
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
				<Route path="/acess">
					<Acess />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/loginauth">
					<LoginAuth />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
