import logo from './logo.svg';
import Exam from './components/Exam';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./theme.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Exam />
		</div>
	);
}

export default App;
