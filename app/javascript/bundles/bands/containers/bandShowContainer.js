import React from 'react';
import { PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import ShowsContainer from './showsContainer';
import NewShowFormContainer from './newShowFormContainer';


class BandShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: this.props.shows
    }
    this.handleNewShow = this.handleNewShow.bind(this);
  }

  handleNewShow(data) {
    let allShows = this.state.shows ? this.state.shows: []
    let updatedShows = allShows.concat([data])
    this.setState({shows: updatedShows})
  }


  render() {

    return (
      <Grid className="Background">
        <Col xs={6} className="text-center">
          <Row>
            <Col xs={6} className="text-center">
              <h1>{this.props.band.band_name}</h1>
              <img className="band-image" src={this.props.band.band_photo_url}/>
            </Col>
          </Row>

          <Row>
            <Col xs={6} className="text-center">
              <PanelGroup>
                <Panel collapsible header="Band details" eventKey="1">
                  <h4>HOMETOWN</h4>  {this.props.band.hometown}<br /><br />
                  <h4>BIO</h4>  {this.props.band.bio}<br /><br />
                  <h4>RECORD LABEL</h4>  {this.props.band.record_label}<br /><br />
                </Panel>
                <Panel collapsible header="Links" eventKey="2">
                  <h4>FACEBOOK</h4>  <a href={this.props.band.facebook_url}><img src="http://pattiaustin.com/wp-content/uploads/2013/11/facebook-icon.gif" className="icon"/></a><br />
                  <h4>BANDCAMP</h4> <a href={this.props.band.bandcamp_url}><img src="http://musformation.com/wp-content/uploads/2013/01/bandcamp_logo4.png" className="icon"/></a><br />
                  <h4>CONTACT</h4>  <a href={this.props.band.band_email}><img src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-email-outline-stroke-512.png" className="icon"/></a><br />
                  <h4>BOOKING</h4>  <a href={this.props.band.band_booking_agent}><img src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-email-outline-stroke-512.png" className="icon"/></a><br />
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} className="text-center">
              <h2>TOUR DATES</h2>
              <PanelGroup>
                <Panel collapsible header ="Add Tour Dates!" eventKey="1" className="buffer">
                  <NewShowFormContainer
                    band_id={this.props.band.id}
                    newShow={this.handleNewShow}
                    user_id={this.props.current_user.id}
                  />
                </Panel>
              </PanelGroup>
              <ShowsContainer
                bandName={this.props.band.name}
                shows={this.props.shows}
              />
            </Col>
          </Row>
        </Col>

      </Grid>

    );
  }
}

export default BandShowContainer;
