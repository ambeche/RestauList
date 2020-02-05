import React from 'react';
import './App.css';
import { RestauProvider } from './contexts/RestauContext';
import RestauList from './components/RestauList';
import Header from './components/Header';

const App = () => {
  return (
    <RestauProvider>
      <div className="App">
        <Header/>
        <RestauList />
      </div>
    </RestauProvider>
  );
};

export default App;
