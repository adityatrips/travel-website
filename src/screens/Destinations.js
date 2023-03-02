import React, {useState} from "react";
import bDb from "./packageDetails/packageDb/bali.json";
import dDb from "./packageDetails/packageDb/dubai.json";
import eDb from "./packageDetails/packageDb/europe.json";
import sDb from "./packageDetails/packageDb/singapore.json";
import tDb from "./packageDetails/packageDb/thailand.json";
import kDb from "./packageDetails/packageDb/kerala.json";
import iDb from "./packageDetails/packageDb/india.json";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";
import {Carousel} from "react-responsive-carousel";

const Destinations = () => {
  const {bali} = bDb;
  const {dubai} = dDb;
  const {europe} = eDb;
  const {singapore} = sDb;
  const {thailand} = tDb;
  const {kerala} = kDb;
  const {india} = iDb;

  const [subLocData, setSubLocData] = useState(bali);
  const [subLocDataStr, setSubLocDataStr] = useState("bali");

  const handleSubLoc = (value) => {
    switch (value) {
      case "bali":
        setSubLocData(bali);
        setSubLocDataStr("bali");
        break;
      case "dubai":
        setSubLocData(dubai);
        setSubLocDataStr("dubai");
        break;
      case "europe":
        setSubLocData(europe);
        setSubLocDataStr("europe");
        break;
      case "singapore":
        setSubLocData(singapore);
        setSubLocDataStr("singapore");
        break;
      case "thailand":
        setSubLocData(thailand);
        setSubLocDataStr("thailand");
        break;
      case "kerala":
        setSubLocData(kerala);
        setSubLocDataStr("kerala");
        break;
      case "india":
        setSubLocData(india);
        setSubLocDataStr("india");
        break;
      default:
        console.log("DEF");
        break;
    }
  };

  const baliPics = [
    "Bali/1.png",
    "Bali/2.png",
    "Bali/3.png",
    "Bali/4.png",
    "Bali/5.png"
  ];

  const dubaiPics = [
    "Dubai/1.png",
    "Dubai/2.png",
    "Dubai/3.png",
    "Dubai/4.png",
    "Dubai/5.png",
    "Dubai/6.png"
  ];

  const keralaPics = [
    "Kerala/1.png",
    "Kerala/2.png",
    "Kerala/3.png",
    "Kerala/4.png"
  ];

  const singaporePics = [
    "Singapore/1.png",
    "Singapore/2.png",
    "Singapore/3.png",
    "Singapore/4.png",
    "Singapore/5.png",
    "Singapore/6.png",
    "Singapore/7.png"
  ];

  const thailandPics = [
    "Thailand/1.png",
    "Thailand/2.png",
    "Thailand/3.png",
    "Thailand/4.png",
    "Thailand/5.png",
    "Thailand/6.png"
  ];

  return <>
    <div className={"container"}>
      {subLocDataStr === "bali" && (
          <Carousel axis={"horizontal"} autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true} interval={2000}>
            {baliPics.map(file => (
                <div>
                  <img src={`/assets/img/places/${file}`} alt="bali"/>
                </div>
            ))}
          </Carousel>
      )}
      {subLocDataStr === "dubai" && (
          <Carousel axis={"horizontal"} autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true} interval={2000}>
            {dubaiPics.map(file => (
                <div>
                  <img src={`/assets/img/places/${file}`} alt="bali"/>
                </div>
            ))}
          </Carousel>
      )}
      {subLocDataStr === "kerala" && (
          <Carousel axis={"horizontal"} autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true} interval={2000}>
            {keralaPics.map(file => (
                <div>
                  <img src={`/assets/img/places/${file}`} alt="bali"/>
                </div>
            ))}
          </Carousel>
      )}
      {subLocDataStr === "singapore" && (
          <Carousel axis={"horizontal"} autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true} interval={2000}>
            {singaporePics.map(file => (
                <div>
                  <img src={`/assets/img/places/${file}`} alt="bali"/>
                </div>
            ))}
          </Carousel>
      )}
      {subLocDataStr === "thailand" && (
          <Carousel axis={"horizontal"} autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true} interval={2000}>
            {thailandPics.map(file => (
                <div>
                  <img src={`/assets/img/places/${file}`} alt="bali"/>
                </div>
            ))}
          </Carousel>
      )}
      <div className="row">
        <div className="mb-2 col-12">
          <select defaultChecked={"bali"} onChange={e => {
            handleSubLoc(e.target.value);
          }} className={"form-select"}>
            <option className={"text-center fw-bold"} disabled>
              International Destinations
            </option>
            <option value="bali">Bali</option>
            <option value="dubai">Dubai</option>
            <option value="europe">Europe</option>
            <option value="singapore">Singapore</option>
            <option value="thailand">Thailand</option>
            <option className={"text-center fw-bold"} disabled>
              Domestic Destinations
            </option>
            <option value="kerala">Kerala</option>
            <option value="india">Pan-India</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-md-2 row-cols-1">
        {subLocData.map(pack => (
            <div key={pack.name} className="col-sm-12 col-md-6">
              <div className="card mb-1">
                <div className="card-body">
                  <h5 className=" text-center card-title">{pack.name}</h5>
                  <p className="text-center card-text">{pack.code}</p>
                  <Link to={pack.link} className="w-100 btn btn-primary">Check
                    out&nbsp;{pack.name}</Link>
                </div>
              </div>
            </div>))}
      </div>
    < /div>
  </>;
};


export default Destinations;