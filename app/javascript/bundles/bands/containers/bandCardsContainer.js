import React from 'react';
import BandCard from '../components/bandCard'
import { PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';


const BandCardsContainer = (props) => {
  let bands = props.bands.map(band => {
    return(
      <Col xs={6} className="text-center">
        <BandCard
          key={band.id}
          id={band.id}
          band={band}
        />
      </Col>
    )
  })
  return (
    <div className="BandCardsContainer">
     {bands}
    </div>
  )
}

export default BandCardsContainer;
