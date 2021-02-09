import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
function App() {
  return (
    <div className="App">
      {/*============start Header==========*/}
      <Header />
      {/*==================================*/}

      {/*============start Section1==========*/}
      <Section1 />
      {/*==================================*/}
    </div>
  );
}

export default App;
