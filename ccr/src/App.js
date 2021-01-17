import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Panel from './components/Panel';
import Courses from './components/Courses';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/teste">
					<Courses />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
