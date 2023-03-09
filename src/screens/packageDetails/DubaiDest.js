import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PackageDetailModel} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  UncontrolledAccordion,
  UncontrolledCarousel
} from "reactstrap";

const DubaiDest = () => {
  const {dest} = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    getData();
  }, []);

  const getData = async () => {
    const models = await DataStore.query(PackageDetailModel);

    let BaliPack = [];

    for (let model of models) {
      if (model.link.includes(dest)) {
        BaliPack.push(model);
      }
    }
    setData(BaliPack);
    setLoading(false);
  };

  console.log(data);

  const items = [
    {
      key: 1,
      src: "/assets/img/places/Dubai/1.png"
    },
    {
      key: 2,
      src: "/assets/img/places/Dubai/2.png"
    },
    {
      key: 3,
      src: "/assets/img/places/Dubai/3.png"
    },
    {
      key: 4,
      src: "/assets/img/places/Dubai/4.png"
    },
    {
      key: 5,
      src: "/assets/img/places/Dubai/5.png"
    },
    {
      key: 6,
      src: "/assets/img/places/Dubai/6.png"
    }
  ];

  if (!loading) {
    return (
        <>
          <UncontrolledCarousel
              dark={true}
              className={"mb-2"}
              items={items}
          />

          <div className={"container"}>
            {data.map(d => (
                <UncontrolledAccordion
                    className={"mb-2"} defaultOpen={"One"}>
                  {d.day_wise.map(dw => (
                      <AccordionItem key={dw.day}>
                        <AccordionHeader targetId={dw.day}>
                          Day {dw.day}
                        </AccordionHeader>
                        <AccordionBody accordionId={dw.day}>
                          {dw.desc}
                        </AccordionBody>
                      </AccordionItem>
                  ))}
                </UncontrolledAccordion>
            ))}

            <br/>
            <h2>Accommodations.</h2>
            {data.map(d => {
              return d.accommodation_hotel_wise?.map(i => (
                  <div>
                    <b>{i.name}</b>
                    <p>{i.standard} star rating</p>
                  </div>
              ));
            })}

            <br/>
            <h2>Inclusions.</h2>
            {data.map(d => {
              return d.inclusions_list.map(i => (
                  <p>{i}</p>
              ));
            })}

            <br/>
            <h2>Exclusions.</h2>
            {data.map(d => {
              return d.exclusions.map(i => (
                  <p>{i}</p>
              ));
            })}

            <Button className={"mb-2"} color={"primary w-100"}>
              Get a quote!
            </Button>
          </div>
        </>
    );
  }
};

export default DubaiDest;
