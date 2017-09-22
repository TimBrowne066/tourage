import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col} from 'react-bootstrap';
import moment from 'moment';
import ReactOnRails from 'react-on-rails';
import DatePicker from'react-dropdowns-datepicker';


class NewShowFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      zip: "",
      address: "",
      venue: "",
      date: null,
      event_link: "",
      tickets_link: "",
      details: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  handleDateChange(date) {
    this.setState({
      date: date
    });
  }

  handleSubmit(e){
    e.preventDefault
    let formPayload = { show: {
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      address: this.state.address,
      venue: this.state.venue,
      date: this.state.date,
      event_link: this.state.event_link,
      tickets_link: this.state.tickets_link,
      details: this.state.details,
      band_id: this.props.band_id,
      user_id: this.props.user_id
    }};
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch(window.location.pathname+'/shows/', {
      method: 'POST',
      headers: header,
      credentials: 'same-origin.',
      body: JSON.stringify(formPayload)
    }).then(response => {
      let newShow = response.json()
      return newShow
    }).then(newShow => {
      this.props.newShow(newShow);
      this.clearForm()
    })
  }

  clearForm(){
    this.setState({
      city: "",
      state: "",
      zip: "",
      address: "",
      venue: "",
      date: "",
      event_link: "",
      tickets_link: "",
      details: "",
    })
  }



  render() {
    let DatePicker = require("react-bootstrap-date-picker");

    return (
      <Col sm={12} lg={12} className="form-background">
        <form className="form">
          <FormGroup>
            <ControlLabel>Date</ControlLabel>
            <DatePicker value={this.state.date} onChange={this.handleDateChange} />
          </FormGroup>

          <FormGroup controlId="venue">
            <ControlLabel>Venue</ControlLabel>
            <FormControl
              type="text"
              name="venue"
              value={this.state.venue}
              placeholder="Enter the venue..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="address">
            <ControlLabel>Address </ControlLabel>
            <FormControl
              type="text"
              name="address"
              value={this.state.address}
              placeholder="Enter the address..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="city">
            <ControlLabel>City </ControlLabel>
            <FormControl
              type="text"
              name="city"
              value={this.state.city}
              placeholder="Enter the city..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="state">
            <ControlLabel>State</ControlLabel>
            <FormControl
              type="text"
              name="state"
              value={this.state.state}
              placeholder="Enter the state..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="zip">
            <ControlLabel>Zip</ControlLabel>
            <FormControl
              type="text"
              name="zip"
              value={this.state.zip}
              placeholder="Enter the zip..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="details">
            <ControlLabel>Details</ControlLabel>
            <FormControl
              type="text"
              name="details"
              value={this.state.details}
              placeholder="Details about the show go here..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="event_link">
            <ControlLabel>Facebook Event URL</ControlLabel>
            <FormControl
              type="text"
              name="event_link"
              value={this.state.event_link}
              placeholder="Enter the facebook event url(if applicable)..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="tickets_link">
            <ControlLabel>Tickets Link URL</ControlLabel>
            <FormControl
              type="text"
              name="tickets_link"
              value={this.state.tickets_link}
              placeholder="Enter the tickets link URL(if applicable)..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type='submit' onClick={this.handleSubmit}>
            Submit
          </Button>
        </form>
      </Col>
    );
  }
}

export default NewShowFormContainer;
