import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Panel from './components/Panel';
import Courses from './components/Courses';

import Acess from './components/Acess';
import Login from './components/Login';
import LoginAuth from './components/LoginAuth';
import { Certificatepage } from './components/Certificatepage';
import Search from './components/Search';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home">
					<Courses />
				</Route>
				<Route path="/acess">
					<Acess />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/loginauth">
					<LoginAuth />
				</Route>
				<Route path="/certificatepage">
					<Certificatepage />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
