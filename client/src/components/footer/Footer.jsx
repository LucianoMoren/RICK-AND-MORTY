import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.parent}>
        <div className={style.div1}></div>
        <div className={style.div2}></div>
      </div>
    </footer>
  );
}

export default Footer;
