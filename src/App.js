import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import Services from './pages/Services';
import Route from './components/Route';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Route path="/home">
          <Home/>
        </Route>
      </div>
  );
}

/* 
        <Route path="/services">
          <Services/>
        </Route> */
export default App;
