import React, {useState} from "react";
import bDb from "./packageDetails/packageDb/bali.json";
import dDb from "./packageDetails/packageDb/dubai.json";
import eDb from "./packageDetails/packageDb/europe.json";
import sDb from "./packageDetails/packageDb/singapore.json";
import tDb from "./packageDetails/packageDb/thailand.json";
import kDb from "./packageDetails/packageDb/kerala.json";
import iDb from "./packageDetails/packageDb/india.json";
import {Link} from "react-router-dom";

const Destinations = () => {
  const {bali} = bDb;
  const {dubai} = dDb;
  const {europe} = eDb;
  const {singapore} = sDb;
  const {thailand} = tDb;
  const {kerala} = kDb;
  const {india} = iDb;

  const [subLocData, setSubLocData] = useState(bali);

  const handleSubLoc = (value) => {
    switch (value) {
      case "bali":
        setSubLocData(bali);
        break;
      case "dubai":
        setSubLocData(dubai);
        break;
      case "europe":
        setSubLocData(europe);
        break;
      case "singapore":
        setSubLocData(singapore);
        break;
      case "thailand":
        setSubLocData(thailand);
        break;
      case "kerala":
        setSubLocData(kerala);
        break;
      case "india":
        setSubLocData(india);
        break;
      default:
        console.log("DEF");
        break;
    }
  };

  return <div className={"container"}>
    <div className="row">
      <div className="mb-2 col-12">
        <select defaultChecked={"bali"} onChange={e => {
          handleSubLoc(e.target.value);
        }} className={"form-select"}>
          <option className={"text-center fw-bold"} disabled value="intl">
            International Destinations
          </option>
          <option value="bali">Bali</option>
          <option value="dubai">Dubai</option>
          <option value="europe">Europe</option>
          <option value="singapore">Singapore</option>
          <option value="thailand">Thailand</option>
          <option className={"text-center fw-bold"} disabled value="dome">
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
              <img src="/" className="card-img-top" alt={pack.name}/>
              <div className="card-body">
                <h5 className="card-title">{pack.name}</h5>
                <p className="secondary-fg card-text">{pack.code}</p>
                <Link to={pack.link} className="w-100 btn buttons">Check
                  out{pack.name}</Link>
              </div>
            </div>
          </div>))}
    </div>
  < /div>;
};


export default Destinations;