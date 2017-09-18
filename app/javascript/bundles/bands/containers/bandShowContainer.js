import React from 'react';
import { Grid } from 'react-bootstrap';

class BandShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="BandShowContainer">
        <h1>{this.props.band.band_name}</h1>
        <img src={this.props.band.band_photo_url}/>
        <h3>{this.props.band.hometown}</h3>
        <p>{this.props.band.bio}</p>
        <p>{this.props.band.record_label}</p>
        <a href={this.props.band.bandcamp_url}>
          BANDCAMP <img src="http://musformation.com/wp-content/uploads/2013/01/bandcamp_logo4.png" className="icon"/>
        </a>
        <a href={this.props.band.facebook_url}>
          FACEBOOK <img src="https://image.freepik.com/free-icon/facebook-logo_318-49940.jpg" className="icon"/>
        </a>
        <a href={this.props.band.band_email}>
          CONTACT <img src="http://images.clipartpanda.com/email-icon-vector-niEKXzMiA.jpeg" className="icon"/>
        </a>
        <a href={this.props.band.band_booking_agent}>
          BOOKING <img src="http://images.clipartpanda.com/email-icon-vector-niEKXzMiA.jpeg" className="icon"/>
        </a>
      </div>
    );
  }
}

export default BandShowContainer;
