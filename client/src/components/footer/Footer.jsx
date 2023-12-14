import React from "react";
import style from "./footer.module.css";
import { TbBrandVite } from "react-icons/tb";
import {
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiRedux,
  SiSequelize,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className={style.footer}>
      <h3>Technologies used in the project</h3>
      <div className={style.tec}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TbBrandVite className={style.icoVite} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaHtml5 className={style.icoHtml} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaCss3 className={style.icoCss} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <SiJavascript className={style.icoJs} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaReact className={style.icoReact} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <SiRedux className={style.icoRedux} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaNodeJs className={style.icoNode} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <SiExpress className={style.icoExpress} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          <SiSequelize className={style.icoSequelize} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <SiPostgresql className={style.icoPostgresql} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
