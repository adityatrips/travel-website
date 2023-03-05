import React, {useEffect, useState} from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle, Col, Row,
  UncontrolledCarousel
} from "reactstrap";

import JSON from "./packageDb/india.json";

import {DataStore} from "@aws-amplify/datastore";
import {
  AccommodationHotelDataModel,
  DayWiseDataModel,
  PackageDetailModel
} from "../../models";
import {Link} from "react-router-dom";

const Kerala = () => {
  const {india} = JSON;

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const models = await DataStore.query(PackageDetailModel,
        (c) => c.countries.contains("Kerala"));
    setData(models);
  };

  const createDayWise = (day) => {
    return new DayWiseDataModel({
      "day": day.day,
      "desc": day.desc
    });
  };

  const createAccommodation = (accommodation) => {
    return new AccommodationHotelDataModel({
      "standard": String(accommodation.standard),
      "name": accommodation.name
    });
  };


  const upload = async () => {
    await india.map(pack => {
      let dayWise = [];

      for (let day of pack.day_wise) {
        dayWise.push(createDayWise(day));
      }

      DataStore.save(
          new PackageDetailModel({
            "code": pack.code,
            "name": pack.name,
            "link": pack.link,
            "countries": ["Kerala"],
            "day_wise": dayWise,
            "accommodation_hotel_wise": [],
            "accommodation": [],
            "exclusions": [],
            "inclusions_country_wise": [],
            "inclusions_list": []
          })
      );

    });
  };

  return (
      <div>
        <UncontrolledCarousel
            slide={true}
            fade={true}
            items={[
              {
                key: 1,
                src: "/assets/img/places/Kerala/1.png"
              },
              {
                key: 2,
                src: "/assets/img/places/Kerala/2.png"
              },
              {
                key: 3,
                src: "/assets/img/places/Kerala/3.png"
              },
              {
                key: 4,
                src: "/assets/img/places/Kerala/4.png"
              },
              {
                key: 5,
                src: "/assets/img/places/Kerala/5.png"
              },
              {
                key: 6,
                src: "/assets/img/places/Kerala/6.png"
              }
            ]}
        />
        <div className="container">
          <Row>
            {data?.map(item => (
                <Col key={item.code} sm={12} md={6}>
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

export default Kerala;
