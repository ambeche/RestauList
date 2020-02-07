import React from "react";
import "./App.css";
import { RestauProvider } from "./contexts/RestauContext";
import RestauList from "./components/RestauList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <RestauProvider>
        <Header />
        <RestauList />
        <Footer/>
      </RestauProvider>
    </div>
  );
};

export default App;
