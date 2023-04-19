import React, { useEffect, useState } from "react";
import { reState } from "@useState/index";
import MenuPC from "./MenuPC";
import MenuMobile from "./MenuMobile";

const Menu = () => {
  const { chromeWidth } = React.useContext(reState);
  const [widthWindow, setWidthWindow] = useState();
  useEffect(() => {
    setWidthWindow(chromeWidth);
  }, [chromeWidth]);

  return <>{widthWindow > 1050 ? <MenuPC /> : <MenuMobile />} </>;
};

export default Menu;
