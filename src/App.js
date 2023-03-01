
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Details from './component/Details';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Header/>
      <Container>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restaurant/:id' element={<Details/>}/>
     </Routes>
     </Container>

    </Router>
  );
}

export default App;
