import React from "react";
import {useParams} from "react-router-dom";
import KeralaDetails from "./Kerala/KeralaDetails";

const Kerala = () => {

  const {packageName} = useParams();

  switch (packageName) {
    case "natures-lap":
      return <KeralaDetails packName={packageName}/>;
    case "friendly-kovalam":
      return <KeralaDetails packName={packageName}/>;
    case "natures-trail":
      return <KeralaDetails packName={packageName}/>;
    case "quick-kerala":
      return <KeralaDetails packName={packageName}/>;
    case "kerala-budget-expedition":
      return <KeralaDetails packName={packageName}/>;
    case "value-for-money":
      return <KeralaDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }
};

export default Kerala;