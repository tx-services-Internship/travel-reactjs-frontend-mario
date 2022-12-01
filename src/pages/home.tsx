import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttonComponent/buttonComponent";
import View from "../components/viewComponent/viewComponent";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <View>
      <h1>TX Services Travel Guide</h1>
      <div className="logo">
        <a href="https://jobs.txservices.rs/">
          <img alt="logo" src="./logo.png" height={"30rem"} width={"60rem"} />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "20em",
          gap: "1em",
        }}
      >
        <Button variant="homeScreen" onClick={() => navigate("/form")}>
          Form
        </Button>
        <Button variant="homeScreen" onClick={() => navigate("/filledForms")}>
          Filled Forms
        </Button>
      </div>
    </View>
  );
};

export default Home;
