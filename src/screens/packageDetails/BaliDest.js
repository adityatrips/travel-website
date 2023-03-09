import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PackageDetailModel} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
// import Bali from "./Bali";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  UncontrolledAccordion,
  UncontrolledCarousel
} from "reactstrap";

const BaliDest = () => {
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

  const items = [
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
            {data.map(d => {
              console.log(d);
              return <UncontrolledAccordion
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
              </UncontrolledAccordion>;
            })}

            <Button className={"mb-2"} color={"primary w-100"}>
              Get a quote!
            </Button>
          </div>
        </>
    );
  }
};

export default BaliDest;
