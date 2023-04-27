import React from "react";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <h1 style={{ color: "#E0ECE4", fontSize: "100px" }}>Welcome</h1>

      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </div>
  );
};

export default Home;
