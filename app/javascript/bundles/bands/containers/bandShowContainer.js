import React from 'react';
import { PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';


class BandShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="background">
        <Row>
          <Col xs={12} className="text-center">
            <h1>{this.props.band.band_name}</h1>
            <img src={this.props.band.band_photo_url}/>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="text-center">
            <PanelGroup>
              <Panel collapsible header="Band details" eventKey="1" className="buffer">
                <h4>HOMETOWN</h4>  {this.props.band.hometown}<br /><br />
                <h4>BIO</h4>  {this.props.band.bio}<br /><br />
                <h4>RECORD LABEL</h4>  {this.props.band.record_label}<br /><br />
              </Panel>
              <Panel collapsible header="Links" eventKey="2" className="buffer">
                    <h4>FACEBOOK</h4>  <a href={this.props.band.facebook_url}><img src="https://image.freepik.com/free-icon/facebook-logo_318-49940.jpg" className="icon"/></a><br />
                    <h4>BANDCAMP</h4> <a href={this.props.band.bandcamp_url}><img src="http://musformation.com/wp-content/uploads/2013/01/bandcamp_logo4.png" className="icon"/></a><br />
                    <h4>CONTACT</h4>  <a href={this.props.band.band_email}><img src="http://images.clipartpanda.com/email-icon-vector-niEKXzMiA.jpeg" className="icon"/></a><br />
                    <h4>BOOKING</h4>  <a href={this.props.band.band_booking_agent}><img src="http://images.clipartpanda.com/email-icon-vector-niEKXzMiA.jpeg" className="icon"/></a><br />
              </Panel>
            </PanelGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default BandShowContainer;
