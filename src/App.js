import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import Minimart from '../src/projects/Minimart'
import Admin from '../src/projects/Admin'
import Teacher from '../src/projects/Teacher'
import Parent from '../src/projects/Parent'
import Attendance from '../src/projects/Attendance'
import Skill from './page/Skill';
import Project from './page/Project';
import Contacts from './page/Contacts'

function App() {
  

  return (
      <>
        <BrowserRouter basename='portfolio_1'>
          <Routes>
            <Route path='/' element={ <Hero />}></Route>
            <Route path='/skills' element={ <Skill /> }></Route>
            <Route path='/projects' element={ <Project /> }></Route>
            <Route path='/contact' element={ <Contacts /> }></Route>

            <Route path='/minimart' element={ <Minimart />}></Route>
            <Route path='/admin' element={ <Admin />}></Route>
            <Route path='/teacher' element={ <Teacher />}></Route>
            <Route path='/parent' element={ <Parent />}></Route>
            <Route path='/attendance' element={ <Attendance />}></Route>
          </Routes>
        </BrowserRouter>
      </>
      
  );
}

export default App;
