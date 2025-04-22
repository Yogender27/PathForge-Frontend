
import './App.css';
import Header from './Header/Header';
import './index.css';

import { MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import FindJobs from './Pages/FindJobs';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';

function App() {
  return (
    
   <MantineProvider >
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='*' element ={<HomePage/>}/>
      <Route path='/find-job' element ={<FindJobs/>}/>
      <Route path='/find-talent' element ={<FindTalent/>}/>
      <Route path='/talent-profile' element ={<TalentProfile/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </MantineProvider>
  );
}

export default App;
