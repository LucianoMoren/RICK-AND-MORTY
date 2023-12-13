import React from "react";
import style from "./about.module.css";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiJavascript } from "react-icons/si";

function About() {
  return (
    <div className={style.parent}>
      <div className={style.divImage}></div>
      <div className={style.divParagraph}>
        <div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            dolore dolor! Quo nisi cupiditate laborum accusantium consequuntur
            inventore, ratione adipisci quidem dolorum excepturi earum dolore
            culpa temporibus quia. Repudiandae, repellendus!
          </p>
        </div>
        <div>
          <h3>Technologies used in the project</h3>
          <div className={style.tec}>
            <TbBrandVite />
            <FaHtml5 />
            <SiJavascript />
            <FaCss3 />
            <FaReact />
            <TbBrandRedux />
            <FaNodeJs />
            <SiExpress />
          </div>
        </div>
      </div>
      <footer className={style.footer}>
        <div className={style.contact}>Contact me</div>
        <div className={style.icons}>
          <a
            href="https://www.linkedin.com/in/lucianomoren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icon} />
          </a>
          <a
            href="https://github.com/LucianoMoren"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={style.icon} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default About;
