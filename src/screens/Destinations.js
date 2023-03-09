import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay, CardText, CardTitle, Col,
  Row
} from "reactstrap";
import {Link} from "react-router-dom";

const Destinations = () => {


  return <>
    <div className={"container"}>
      <Row>
        <Col className={"my-2"} sm={12}>
          <Card className={"w-100"} inverse>
            <CardImg
                alt="Card image cap"
                src="/assets/img/places/Bali/1.png"
                className={"w-100"}
            />
            <CardImgOverlay>
              <CardTitle className={"text-white"} tag="h5">
                Bali
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi,
                quibusdam..
              </CardText>
              <CardText>
                <Link to={"/destinations/bali"}>
                  <Button color={"primary"}>
                    Go!
                  </Button>
                </Link>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>

        <Col className={"my-2"} sm={12}>
          <Card className={"w-100"} inverse>
            <CardImg
                alt="Card image cap"
                src="/assets/img/places/Dubai/1.png"
                className={"w-100"}
            />
            <CardImgOverlay>
              <CardTitle className={"text-white"} tag="h5">
                Dubai
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi,
                quibusdam..
              </CardText>
              <CardText>
                <Link to={"/bali"}>
                  <Button color={"primary"}>
                    Go!
                  </Button>
                </Link>
              </CardText>
            </CardImgOverlay>
          </Card>

        </Col>

        <Col className={"my-2"} sm={12}>
          <Card className={"w-100"} inverse>
            <CardImg
                alt="Card image cap"
                src="/assets/img/places/Kerala/1.png"
                className={"w-100"}
            />
            <CardImgOverlay>
              <CardTitle className={"text-white"} tag="h5">
                Kerala
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi,
                quibusdam..
              </CardText>
              <CardText>
                <Link to={"/bali"}>
                  <Button color={"primary"}>
                    Go!
                  </Button>
                </Link>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>

        <Col className={"my-2"} sm={12}>
          <Card className={"w-100"} inverse>
            <CardImg
                alt="Card image cap"
                src="/assets/img/places/Singapore/1.png"
                className={"w-100"}
            />
            <CardImgOverlay>
              <CardTitle className={"text-white"} tag="h5">
                Singapore
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi,
                quibusdam..
              </CardText>
              <CardText>
                <Link to={"/bali"}>
                  <Button color={"primary"}>
                    Go!
                  </Button>
                </Link>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>

        <Col className={"my-2"} sm={12}>
          <Card className={"w-100"} inverse>
            <CardImg
                alt="Card image cap"
                src="/assets/img/places/Thailand/1.png"
                className={"w-100"}
            />
            <CardImgOverlay>
              <CardTitle className={"text-white"} tag="h5">
                Thailand
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi,
                quibusdam..
              </CardText>
              <CardText>
                <Link to={"/bali"}>
                  <Button color={"primary"}>
                    Go!
                  </Button>
                </Link>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    < /div>
  </>;
};


export default Destinations;