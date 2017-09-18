import React from 'react';
import { Col, Panel, Button } from 'react-bootstrap';


const BandCard = (props) => {
  return (
    <Col md={3} className="text-center">
      <Panel header={props.band.band_name}>
        <img src={props.band.band_photo_url} alt={props.band.band_name} className="img-circle card-image"/>
        <br />
        <Button bsStyle="warning" href={"/bands/" + props.band.id}>View Band Page</Button>
      </Panel>
    </Col>
  )
}

export default BandCard;
