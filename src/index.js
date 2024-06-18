import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="pp.jpeg" alt="avatar" style={{ width: "100%" }} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Besher AL ADDAM</h1>
      <p>Développeur Full Stack</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="👀" color="red" />
      <Skill skill="CSS" emoji="🌒" color="orange" />
      <Skill skill="JavaScript" emoji="🎹" color="yellow" />
      <Skill skill="React" emoji="🀄" color="cyan" />
      <Skill skill="Node" emoji="😎" color="green" />
      <Skill skill="Express" emoji="🎴" color="grey" />
      <Skill skill="MongoDB" emoji="🃏" color="#568f79" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
