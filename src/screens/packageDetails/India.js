import React from "react";
import {useParams} from "react-router-dom";
import IndiaDetails from "./India/IndiaDetails";

const India = () => {

  const {packageName} = useParams();

  switch (packageName) {
    case "family-budget-manali":
      return <IndiaDetails packName={packageName}/>;
    case "north-goa":
      return <IndiaDetails packName={packageName}/>;
    case "north-east":
      return <IndiaDetails packName={packageName}/>;
    case "himachal-pradesh":
      return <IndiaDetails packName={packageName}/>;
    case "north-east-i":
      return <IndiaDetails packName={packageName}/>;
    case "north-east-ii":
      return <IndiaDetails packName={packageName}/>;
    case "luxurious-escape-himachal":
      return <IndiaDetails packName={packageName}/>;
    case "north-goa-i":
      return <IndiaDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }
};

export default India;