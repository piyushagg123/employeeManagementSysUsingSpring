import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <div >
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route exact path="/" Component={ListEmployeeComponent}/>
          <Route path="/employees" Component={ListEmployeeComponent}/>
          <Route path="/add-employee" Component={AddEmployee}/>
          <Route path="/edit-employee/:id" Component={AddEmployee}/>
        </Routes>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
