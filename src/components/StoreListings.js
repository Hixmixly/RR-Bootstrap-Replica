import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListings() {
  return (
    <Container className="g-3">
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 5 }}>Smiths</Col>
        <Col xs={{ order: 0 }}>Albertsons</Col>
      </Row>
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 5 }}>Target</Col>
        <Col xs={{ order: 0 }}>Sprouts</Col>
      </Row>
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 5 }}>El Super</Col>
        <Col xs={{ order: 0 }}>Marianas</Col>
      </Row>
    </Container>
  );
}

export default StoreListings