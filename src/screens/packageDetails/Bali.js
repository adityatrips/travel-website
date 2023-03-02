import React from "react";
import {UncontrolledCarousel} from "reactstrap";

import JSON from "./packageDb/bali.json";

import {DataStore} from "@aws-amplify/datastore";
import {DayWise, Destination} from "../../models";

const Bali = () => {
  const {bali} = JSON;

  const upload = async () => {
    let dayWiseArr = [];
    
    for (let item of bali) {
      Array(bali.day_wise).map(d => {
        dayWiseArr.push(new DayWise({
          "day": d.day,
          "desc": d.desc
        }));
      });
    }

    for (let item of bali) {
      await DataStore.save(
          new Destination({
            "code": item.code,
            "title": item.name,
            "countries": [],
            "inclusions": [],
            "dayWise": dayWiseArr,
            "inclusionsPerCountry": [],
            "accommodation": [],
            "exclusions": [],
            "accommodationsPerHotel": [],
            "link": item.link
          })
      );
    }
  };

  return (
      <div>
        <UncontrolledCarousel
            slide={true}
            fade={true}
            items={[
              {
                key: 1,
                src: "/assets/img/places/Bali/1.png"
              },
              {
                key: 2,
                src: "/assets/img/places/Bali/2.png"
              },
              {
                key: 3,
                src: "/assets/img/places/Bali/3.png"
              },
              {
                key: 4,
                src: "/assets/img/places/Bali/4.png"
              },
              {
                key: 5,
                src: "/assets/img/places/Bali/5.png"
              }

            ]}
        />
        <div className="container">
          <button onClick={upload}>Up</button>
        </div>
      </div>
  );
};

export default Bali;
