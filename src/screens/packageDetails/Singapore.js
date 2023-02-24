import React from "react";
import {useParams} from "react-router-dom";
import SingaporeDetails from "./Singapore/SingaporeDetails";

const Singapore = () => {
  const {packageName} = useParams();

  switch (packageName) {
    case "fascinating-singapore":
      return <SingaporeDetails packName={packageName}/>;
    case "charming-singapore-with-malaysia":
      return <SingaporeDetails packName={packageName}/>;
    case "simply-singapore":
      return <SingaporeDetails packName={packageName}/>;
    case "singapore-fully-loaded":
      return <SingaporeDetails packName={packageName}/>;
    case "singapore-special":
      return <SingaporeDetails packName={packageName}/>;
    case "singapore-with-bali":
      return <SingaporeDetails packName={packageName}/>;
    default:
      return <p className={"text-center"}>404</p>;
  }

};

export default Singapore;