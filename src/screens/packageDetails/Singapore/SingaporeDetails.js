import React, {useState} from "react";
import sDb from "../packageDb/singapore.json";

const SingaporeDetails = () => {
  const {singapore} = sDb;

  let packDetails = {};
  const [selDay, setSelDay] = useState("One");
  const [dayIdx, setDayIdx] = useState(0);

  singapore.map(b => {
    if (b.link === window.location.pathname) {
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
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree">
                Inclusions
              </button>
            </h2>
            <div id="flush-collapseThree"
                 className="accordion-collapse collapse"
                 aria-labelledby="flush-headingThree"
                 data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {
                  packDetails.inclusions.map((idx, i) => (
                      <li key={i}>{idx}</li>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false"
                      aria-controls="flush-collapseOne">
                Accommodation
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse"
                 aria-labelledby="flush-headingOne"
                 data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>{packDetails.accommodation.name}</p>
                {
                  [...Array(packDetails.accommodation.standard)].map(() => (
                      <img alt={"star"} src="/assets/img/star.png"
                           style={{height: 30, width: 30}}
                      />))
                }
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                Exclusions
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                 aria-labelledby="flush-headingTwo"
                 data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {packDetails.exclusions.map(i => (
                    <li key={i}>{i}</li>
                ))}
              </div>
            </div>
          </div>

        </div>
        <hr/>
      </div>
  );
};

export default SingaporeDetails;