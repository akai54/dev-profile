import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "MongoDB",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map((skill) => {
        return (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        );
      })}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" ? "👀" : level === "intermediate" ? "🌒" : "🎹"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
