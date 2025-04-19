
import './App.css';
import Header from './Header/Header';
import './index.css';

import { MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
   <MantineProvider>
    <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
   </MantineProvider>
  );
}

export default App;
