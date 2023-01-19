import React from "react";
import style from "./Footer.module.css";
import { AiFillHeart } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";

function Footer() {
  return (
    <footer>
      <p>
        <BiCodeAlt />
        &ensp;with&ensp;
        <AiFillHeart /> by{" "}
        <a href="https://github.com/lucasbara" target="_blank">
          Lucas Barallobre
        </a>{" "}
        using <DiReact />
      </p>
    </footer>
  );
}

export default Footer;
