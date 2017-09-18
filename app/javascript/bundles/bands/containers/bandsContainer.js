import React from 'react';
import BandCardsContainer from './bandCardsContainer';
import PageTitle from '../components/PageTitle';
import { Grid, Row, Col, Button, Well } from 'react-bootstrap';


class BandsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  debugger;
  render() {

    return (
      <div className="BandsContainer">
        <Grid className="background">
          <Row>
            <Col xs={12} className="text-center">
              <PageTitle title={this.props.title} />
            </Col>
          </Row>
          <Row>
            <BandCardsContainer bands={this.props.bands} />
          </Row>
          <Row className="row-padding">
            <Col xs={12} className="text-center">
              <Button className="button" bsSize="large" href="/bands/new">Add Your Band</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BandsContainer;