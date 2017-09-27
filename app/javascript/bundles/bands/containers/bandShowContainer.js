import React from 'react';
import { PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import ShowsContainer from './showsContainer';
import NewShowFormContainer from './newShowFormContainer';
import EditBandContainer from './editBandContainer'
import EditShowContainer from './editShowContainer'

class BandShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: this.props.shows,
      band: this.props.band
    }
    this.handleNewShow = this.handleNewShow.bind(this);
    this.handleEditedBand = this.handleEditedBand.bind(this);
  }

  handleNewShow(data) {
    let allShows = this.state.shows
    let updatedShows = allShows.concat([data])
    this.setState({shows: updatedShows})
  }

  handleEditedBand(data) {
    console.log(data)
    this.setState({band: data})
    console.log('new state = ', this.state.band);
  }

  render() {
    console.log(`rendered_state: `, this.state.band);
    return (
      <Grid className="Background">
        <Col sm={12} lg={6} className="text-center padding-0">
          <Row>
            <Col sm={12} className="text-center">
              <h1 className="band-title">{this.state.band.band_name}</h1>
              <img className="band-image" src={this.state.band.band_photo_url}/>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="text-center padding-0">
              <PanelGroup>
                <Panel collapsible header="Band details" eventKey="1">
                  <h4>GENRE</h4>  {this.state.band.genre}<br /><br />
                  <h4>HOMETOWN</h4>  {this.state.band.hometown}<br /><br />
                  <h4>YEAR FORMED</h4>  {this.state.band.year_formed}<br /><br />
                  <h4>BIO</h4>  {this.state.band.bio}<br /><br />
                  <h4>RECORD LABEL</h4>  {this.state.band.record_label}<br /><br />
                  <Panel collapsible header="Edit Profile" eventKey="3">
                    <EditBandContainer
                      band={this.state.band}
                      update={this.handleEditedBand}
                    />
                  </Panel>
                </Panel>
                <Panel collapsible header="Links" eventKey="2">
                  <h4>FACEBOOK</h4>  <a href={this.state.band.facebook_url}><img src="http://pattiaustin.com/wp-content/uploads/2013/11/facebook-icon.gif" className="icon"/></a><br />
                  <h4>BANDCAMP</h4> <a href={this.state.band.bandcamp_url}><img src="http://musformation.com/wp-content/uploads/2013/01/bandcamp_logo4.png" className="icon"/></a><br />
                  <h4>CONTACT</h4>  <a href={this.state.band.band_email}><img src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-email-outline-stroke-512.png" className="icon"/></a><br />
                  <h4>BOOKING</h4>  <a href={this.state.band.band_booking_agent}><img src="https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-email-outline-stroke-512.png" className="icon"/></a><br />

                </Panel>
              </PanelGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <Row>
            <Col sm={12} className="text-center padding-0 shows-panel">
              <h2>TOUR DATES</h2>
              <PanelGroup className="shows-panel">
                <Panel collapsible header ="Add Tour Dates!" eventKey="1" className="buffer">
                  <NewShowFormContainer
                    band_id={this.props.band.id}
                    newShow={this.handleNewShow}
                    user_id={this.props.current_user.id}sfdgjhkhljkdjsdhfgs
                  />
                </Panel>
              </PanelGroup>
              <ShowsContainer
                bandName={this.props.band.name}
                shows={this.state.shows}
              />
            </Col>
          </Row>
        </Col>

      </Grid>
    );
  }
}

export default BandShowContainer;
