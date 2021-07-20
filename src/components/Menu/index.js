import { useState } from "react";

import "./menu.scss";
import Btn from "../Btn";

export default function Menu() {
  const [stateActive, setStateActive] = useState(false);

  const itemsMenu = ["HOME", "ABOUT", "WORK", "CONTACT", "GAME"];
  const listItems = itemsMenu.map((item) => (
    <li className="menu__item" key={item}>
      <a href="/">{item}</a>
    </li>
  ));

  const active = () => {
    const body = document.querySelector("body");
    body.classList.toggle("locked");

    setStateActive(!stateActive);
  };

  return (
    <nav className={`menu ${stateActive ? "active" : "hidden"}`}>
      <Btn
        onClick={active}
        icon={`icon__menu ${stateActive ? "close" : ""}`}
        className={`btn__menu ${stateActive ? "active" : ""}`}
      />
      <ul className="menu__list">{listItems}</ul>
    </nav>
  );
}
