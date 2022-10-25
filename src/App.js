
import './App.css';
import Aries from './components/Cards/Aries';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {




  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={ <Home/>} />

          {/* <Route path='/Aries' element={<Aries/>}/> */}
        </Routes>

      </Router>
 

    </div>
  );
}

export default App;
