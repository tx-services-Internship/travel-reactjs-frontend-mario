import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttonComponent/ButtonComponent";
import View from "../components/viewComponent/ViewComponent";
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
        <Button variant="homeScreen" onClick={() => navigate("/Form")}>
          Form
        </Button>
      </div>
    </View>
  );
};

export default Home;
