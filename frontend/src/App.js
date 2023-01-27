import './App.css';
import Header from './components/header/Header'
import LandingPage from './screens/LandingPage/LandingPage'
import MyNotes from './screens/MyNotes/MyNotes'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
        <Header />
      <Routes>
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path="/mynotes" exact element={<MyNotes/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
