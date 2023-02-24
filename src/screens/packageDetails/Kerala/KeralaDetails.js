import React, {useState} from "react";
import kDb from "../packageDb/kerala.json";

const KeralaDetails = () => {
  const {kerala} = kDb;

  let packDetails = {};
  const [selDay, setSelDay] = useState("One");
  const [dayIdx, setDayIdx] = useState(0);

  kerala.map(b => {
    if (b.link === window.location.pathname) {
      console.log(b.link, window.location.pathname);
      packDetails = b;
    }
    return null;
  });

  return (<div className={"container"}>
    <h2 className="text-center fw-bold text-uppercase">{packDetails.name}</h2>
    <p className={"text-white text-center secondary-bg"}>{packDetails.code}</p>
    <hr/>
    <ul className="list-group">
      {packDetails.day_wise.map((d, idx) => {
        return (<li key={d.day} onClick={() => {
          setSelDay(d.day);
          setDayIdx(idx);
        }}
                    style={{cursor: "pointer"}}
                    className="text-center secondary-fg  fw-bold text-uppercase list-group-item">
          Day {d.day}
        </li>);
      })}
    </ul>
    <hr/>
    <div className="day-content mt-4">
      <div className="arrow"></div>
      <h3 className={"text-uppercase"}>Day {selDay}</h3>
      <ul>
        {packDetails.day_wise[dayIdx].desc}
      </ul>
    </div>
    <hr/>
  </div>);
};

export default KeralaDetails;