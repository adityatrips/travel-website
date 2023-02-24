import React from "react";
import {useParams} from "react-router-dom";
import DubaiDetails from "./Dubai/DubaiDetails";

const Dubai = () => {

  const {packageName} = useParams();
  console.log(packageName);
  switch (packageName) {
    case "incredible-dubai":
      return <DubaiDetails packName={packageName}/>;
    case "dubai-adventure":
      return <DubaiDetails packName={packageName}/>;
    case "spectacular-dubai":
      return <DubaiDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }

};

export default Dubai;