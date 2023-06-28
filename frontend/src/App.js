import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
			<Navbar/>
			<Home/>
        </div>
    );
}

export default App;
