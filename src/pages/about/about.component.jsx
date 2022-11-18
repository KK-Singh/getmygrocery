import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import store1 from "../../assets/img/stores/store1.jpg";
import store2 from "../../assets/img/stores/store2.jpg";
import store3 from "../../assets/img/stores/store3.jpg";
import store4 from "../../assets/img/stores/store4.jpg";
import store5 from "../../assets/img/stores/store5.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">Stores We Cover</h1>
        {/* <container>
          <div>
            <img className='walmartlogo' src ={walmart}></img>
            <img className='BombaySpice' src ={bombaySpice}></img>
            <img className='atlanticSuperStore' src ={atlanticSS}></img>
          </div>
            
         
        </container> */}
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={10} md={3}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end photo" alt="" src={store1} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={10} md={3}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end photo" alt="" src={store2} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={10} md={3}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end photo" alt="" src={store3} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={10} md={3}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end photo" alt="" src={store4} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={10} md={3}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end photo" alt="" src={store5} thumbnail fluid />
              </Row>
            </Col>
            
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
