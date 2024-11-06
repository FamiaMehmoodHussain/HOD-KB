import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Hobbies} from'./components/Hobbies';
import {Tour} from './components/Tour';
import { Footer } from './components/Footer';
import Achievements from './components/Achievements';


function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Hobbies/>
			
			<Tour/>
			<Achievements/>
			<Footer />
		</div>
	);
}

export default App;
