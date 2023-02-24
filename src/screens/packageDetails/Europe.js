import React from "react";
import {useParams} from "react-router-dom";
import EuropeDetails from "./Europe/EuropeDetails";

const Europe = () => {
  const {packageName} = useParams();
  console.log(packageName);

  switch (packageName) {
    case "exclusive-europe":
      return <EuropeDetails packName={packageName}/>;
    case "exclusive-europe-1":
      return <EuropeDetails packName={packageName}/>;
    case "fascinating-paris-and-swiss":
      return <EuropeDetails packName={packageName}/>;
    case "best-of-europe":
      return <EuropeDetails packName={packageName}/>;
    case "grand-wonders-of-europe":
      return <EuropeDetails packName={packageName}/>;
    case "grand-train-tour":
      return <EuropeDetails packName={packageName}/>;
    case "greece-holiday-package":
      return <EuropeDetails packName={packageName}/>;
    case "swiss-premium-tour":
      return <EuropeDetails packName={packageName}/>;
    case "magical-tour-of-europe":
      return <EuropeDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }
};

export default Europe;