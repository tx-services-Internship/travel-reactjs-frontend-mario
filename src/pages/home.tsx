import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ButtonComponent/ButtonComponent";
import View from "../components/ViewComponent/ViewComponent";
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
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <Button variant="homeScreen" onClick={() => navigate("/Form")}>
          Form
        </Button>
        <Button variant="homeScreen" onClick={() => navigate("/FilledForms")}>
          Filled Forms
        </Button>
      </div>
    </View>
  );
};

export default Home;
