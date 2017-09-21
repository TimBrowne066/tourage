import React from 'react';
import { Row, Grid, Panel, ListGroup, List, p } from 'react-bootstrap';

class ShowsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: this.props.shows
    }
  }
  render() {
    let shows = this.state.shows.map(show => {
      let header = show.date+" - "+show.city
      return(
          <Panel collapsible className="text-left" header={header}>
              <h4>DETAILS:  </h4><p>{show.details}</p>
              <h4>VENUE:  </h4><p>{show.venue}</p>
              <h4>ADDRESS:  </h4><p>{show.address}</p>
              <h4>CITY:  </h4><p>{show.city}</p>
              <h4>STATE:  </h4><p>{show.state}</p>
              <h4>ZIP:  </h4><p>{show.zip}</p>
              <h4>EVENT LINK:  </h4><p>{show.event_link}</p>
              <h4>TICKETS:  </h4><p>{show.tickets_link}</p>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${show.city.split("+")}&zoom=14&size=400x400&key=AIzaSyDyQ6APuEAG4mFjNChs7wAkXVq1ZGebmiw`}/>

          </Panel>
      )
    })
    return (
      <div className="shows-background">
        {shows}
      </div>

    );
  }
}

export default ShowsContainer;
