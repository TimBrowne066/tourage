import React from 'react';
import BandCard from '../components/bandCard'
const BandCardsContainer = (props) => {
  let bands = props.bands.map(band => {
    return(
      <BandCard
        key={band.id}
        id={band.id}
        band={band}
      />
    )
  })
  return (
    <div className="BandCardsContainer">
     {bands}
    </div>
  )
}

export default BandCardsContainer;
