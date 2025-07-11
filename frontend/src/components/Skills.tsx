import SkillCard from "./SkillCard";
import HTMLLogo from "../assets/HTML5.png";
import CSSLogo from "../assets/CSS3.png";
import JavascriptLogo from "../assets/JavascriptES6.png";
import TailwindLogo from "../assets/TailwindCSS.png";
import ReactLogo from "../assets/React.png";
import ExpressLogo from "../assets/ExpressJS.png";
import NodeJSLogo from "../assets/NodeJS.png";
import PostgreeSQL from "../assets/PostgreSQL.png";
import GithubGit from "../assets/Github_Git.png";
import { useState, useEffect } from "react";
import axios from "axios";

type SkillsSchema = {
  name: string;
  level: string;
};

const Skills = () => {
  const [skills, setSkills] = useState<SkillsSchema[]>([]);
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "/api/skills"
      : "http://localhost:3000/api/skills";

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(API_URL);
        setSkills(response.data); // Update state dengan data dari API
      } catch (error) {
        console.error("Gagal mengambil data skill:", error);
      }
    };

    fetchSkills();
  }, []); // Efek ini hanya akan dijalankan sekali setelah komponen pertama kali dimount

  return (
    <>
      <div>
        <h1
          id="skills"
          className="mt-40 flex justify-center text-5xl font-bold gap-2 tracking-wider"
        >
          My{" "}
          <span className="bg-jati-1 px-2 py-1 rounded-[5px] text-white">
            Skills
          </span>
        </h1>

        <div className="mt-16 grid grid-cols-3 gap-16">
          <SkillCard src={HTMLLogo} title="HTML">
            A robust structured to start building website.
          </SkillCard>
          <SkillCard src={CSSLogo} title="CSS">
            Simple style to start decorating the website.
          </SkillCard>
          <SkillCard src={JavascriptLogo} title="CSS">
            A genius way to make the website more interactive.
          </SkillCard>
          <SkillCard src={TailwindLogo} title="Tailwind">
            Make style of the website more light with utility class.
          </SkillCard>
          <SkillCard src={ReactLogo} title="React">
            Library for javascript using components model.
          </SkillCard>
          <SkillCard src={ExpressLogo} title="Express JS">
            Framework for Node JS that runs everything seamlessly.
          </SkillCard>
          <SkillCard src={NodeJSLogo} title="Node JS">
            A runtime environment for javascript.
          </SkillCard>
          <SkillCard src={PostgreeSQL} title="PostgreSQL">
            Open-source database that really famous on community.
          </SkillCard>
          <SkillCard src={GithubGit} title="Github & Git">
            Online storage and version control to track the project.
          </SkillCard>

          {/* components */}
          {skills.map((item, index) => {
            return (
              <SkillCard key={index} src={HTMLLogo} title={item.name}>
                {item.level}
              </SkillCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
