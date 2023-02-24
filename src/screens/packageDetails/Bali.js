import React from "react";
import {useParams} from "react-router-dom";
import BaliDetails from "./Bali/BaliDetails";

const Bali = () => {

  const {packageName} = useParams();
  console.log(packageName);
  switch (packageName) {
    case "dazzling-bali-family-package":
      return <BaliDetails packName={packageName}/>;
    case "futuristic-bali-package":
      return <BaliDetails packName={packageName}/>;
    case "fully-loaded-family-package":
      return <BaliDetails packName={packageName}/>;
    case "glamorous-couple-package":
      return <BaliDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }
};

export default Bali;