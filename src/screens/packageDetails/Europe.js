import React, {useEffect, useState} from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle, Col, Row,
  UncontrolledCarousel
} from "reactstrap";

import JSON from "./packageDb/europe.json";

import {DataStore} from "@aws-amplify/datastore";
import {
  DayWiseDataModel,
  InclusionInCountry,
  PackageDetailModel
} from "../../models";
import {Link} from "react-router-dom";
// import europeDest from "./EuropeDest";

const Europe = () => {
  const {europe} = JSON;

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const models = await DataStore.query(PackageDetailModel,
        (c) => c.countries.contains("Europe"));
    setData(models);
  };

  const createDayWise = (day) => {
    return new DayWiseDataModel({
      "day": day.day,
      "desc": day.desc
    });
  };

  const createInclusions = (k, v) => {
    return new InclusionInCountry({
      "Country": {"name": k, "included": v}
    });
  };

  const upload = async () => {
    await europe.forEach(pack => {
      let dayWise = [];
      let inclusionsCountry = [];
      for (let day of pack.day_wise) {
        dayWise.push(createDayWise(day));
      }

      for (let country in pack.inclusions) {
        inclusionsCountry.push(createInclusions(country,
            pack.inclusions[country]));
      }

      console.log("----");
      console.log(pack.countries);
      console.log(inclusionsCountry);
      console.log(dayWise);
      console.log("----");

      // DataStore.save(
      //     new PackageDetailModel({
      //       "code": pack.code,
      //       "name": pack.name,
      //       "link": pack.link,
      //       "countries": pack.countries,
      //       "day_wise": dayWise,
      //       "accommodation_hotel_wise": [],
      //       "accommodation": pack.accommodation,
      //       "exclusions": pack.exclusions,
      //       "inclusions_country_wise": inclusionsCountry,
      //       "inclusions_list": []
      //     })
      // );
    });
  };

  return (
      <div>
        <button onClick={upload}>UP</button>
        <UncontrolledCarousel
            slide={true}
            fade={true}
            items={[
              {
                key: 1,
                src: "/assets/img/places/Europe/1.png"
              },
              {
                key: 2,
                src: "/assets/img/places/Europe/2.png"
              },
              {
                key: 3,
                src: "/assets/img/places/Europe/3.png"
              },
              {
                key: 4,
                src: "/assets/img/places/Europe/4.png"
              },
              {
                key: 5,
                src: "/assets/img/places/Europe/5.png"
              }

            ]}
        />
        <div className="container">
          <Row>
            {data?.map(item => (
                <Col sm={12} md={6}>
                  <Card
                      body
                      className="my-2 w-100"
                  >
                    <CardTitle tag="h5">
                      ({item.code}) {item.title}
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional
                      content.
                    </CardText>
                    <Link to={item.link}>
                      <Button block color="primary">
                        Go!
                      </Button>
                    </Link>
                  </Card>
                </Col>
            ))}
          </Row>
        </div>
      </div>
  );
};

export default Europe;
