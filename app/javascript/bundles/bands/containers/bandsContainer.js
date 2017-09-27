import React from 'react';
import BandCardsContainer from './bandCardsContainer';
import PageTitle from '../components/pageTitle';
import NewBandFormContainer from './newBandFormContainer'
import { PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';


class BandsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: this.props.bands
    }
    this.handleNewBand = this.handleNewBand.bind(this);
  }

  handleNewBand(data) {
    let allBands = this.state.bands ? this.state.bands: []
    let updatedBands = allBands.concat([data])
    this.setState({bands: updatedBands})
  }

  render() {
    let subHeader = ""
    if (this.props.current_user === null){
      subHeader = "Log in to add your band!"
    }
    console.log(this.state)
      return (
        <Grid className="background">
          <Row>
            <Col xs={12} className="text-center">
              <PageTitle title={this.props.title} />
              <h3>{subHeader}</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
            <BandCardsContainer
              bands={this.state.bands}
              current_user={this.props.current_user}
            />
            </Col>

          </Row>
          <div>
            <PanelGroup>
              <Panel collapsible header="Add Your Band!" eventKey="1" className="text-center">
                <NewBandFormContainer
                  user_id={this.props.user_id}
                  newBand={this.handleNewBand}
                  user_id={this.props.current_user.id}
                />
              </Panel>
            </PanelGroup>
          </div>
        </Grid>
    );
  }
}

export default BandsContainer;
