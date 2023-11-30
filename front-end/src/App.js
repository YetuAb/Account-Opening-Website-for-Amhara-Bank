import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import MultiStep from './components/MultiStep';
import './App.css';
import About from './components/About';
import Admin from './components/Admin';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/Form" element={isLoggedIn == "true" ? <Admin/> : <Form/>}/>
          <Route path="/MultiStep" exact Component={MultiStep}/>
          <Route path='/About' exact Component={About}/>
          <Route path="/Admin" exact Component={Admin}/>
      </Routes>
    </Router>
  );
}
export default App;