import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import albertsonsLogo from '../images/albersonsLogo.jpg';
import smithsLogo from '../images/smithsLogo.jpg'; 
import targetLogo from '../images/targetLogo.png'; 

function StoreListings() {
  return (
    <Container>
      <Row className="mb-3 align-items-center">
        <Col xs>
          <img src={albertsonsLogo} alt="albertsons" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 5 }}>
          <img src={smithsLogo} alt="smiths" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 0 }}>
          <img src={targetLogo} alt="target" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
      </Row>
      <Row className="mb-3 align-items-center">
        <Col xs>
          <img src={albertsonsLogo} alt="albertsons" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 5 }}>
          <img src={smithsLogo} alt="smiths" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 0 }}>
          <img src={targetLogo} alt="target" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
      </Row>
      <Row className="mb-3 align-items-center">
        <Col xs>
          <img src={albertsonsLogo} alt="albertsons" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 5 }}>
          <img src={smithsLogo} alt="smiths" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
        <Col xs={{ order: 0 }}>
          <img src={targetLogo} alt="target" style={{ height: '30px', marginRight: '10px' }} />
          Delivery - Pickup
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListings;
