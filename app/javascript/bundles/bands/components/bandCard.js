import React from 'react';
import { Col, Panel, Button } from 'react-bootstrap';


const BandCard = (props) => {
  return (
    <Col xs={12} className="text-center">
      <Panel header={props.band.band_name}>
        <img src={props.band.band_photo_url} alt={props.band.band_name} className="card-image"/>
        <br />
        <Button href={"/bands/" + props.band.id}>View Band Page</Button>
      </Panel>
    </Col>
  )
}

export default BandCard;
