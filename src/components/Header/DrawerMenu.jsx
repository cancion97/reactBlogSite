import { useState } from "react";
import Menu from "./Menu";

export default function DrawerMenu() {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="drawemenu" onClick={classToggle}>
        <span className={active ? "span01open" : "span01"}></span>
        <span className={active ? "span02open" : "span02"}></span>
        <p className="menu">{active ? "CLOSE" : "MENU"}</p>
      </div>
      <Menu classname={active ? "menulisto" : "menulist"} />
    </>
  );
}
