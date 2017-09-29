import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col} from 'react-bootstrap';


class NewBandFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: "",
      hometown: "",
      genre: "",
      yearFormed: "",
      bio: "",
      recordLabel:"",
      bandcampUrl: "",
      facebookUrl: "",
      bandEmail: "",
      bandBookingAgent: "",
      bandPhotoUrl: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault();
    let formPayload = { band: {
      band_name: this.state.bandName,
      hometown: this.state.hometown,
      genre: this.state.genre,
      year_formed: this.state.yearFormed,
      bio: this.state.bio,
      record_label: this.state.recordLabel,
      bandcamp_url: this.state.bandcampUrl,
      facebook_url: this.state.facebookUrl,
      band_email: this.state.bandEmail,
      band_booking_agent: this.state.bandBookingAgent,
      band_photo_url: this.state.bandPhotoUrl,
      user_id: this.props.user_id
    }};
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch(window.location.pathname+'/', {
      method: 'POST',
      headers: header,
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    }).then(response => {
      let newBand = response.json()
      return newBand
    }).then(newBand => {
      this.props.newBand(newBand);
      this.clearForm()
    })
  }

  clearForm(){
    this.setState({
      bandName: "",
      hometown: "",
      genre: "",
      yearFormed: "",
      bio: "",
      recordLabel:"",
      bandcampUrl: "",
      facebookUrl: "",
      bandEmail: "",
      bandBookingAgent: "",
      bandPhotoUrl: "",
      userLogError: false
    })
  }


  render() {

    return (
      <Col xs={12} lg={6} lgOffset={3} className="form-background">
        <form className="form">

          <FormGroup
            controlId="formBandName"
          >
            <ControlLabel>Band Name </ControlLabel>
            <FormControl
              type="text"
              name="bandName"
              value={this.state.bandName}
              placeholder="Enter your band name..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBandHometown"
          >
            <ControlLabel>Hometown </ControlLabel>
            <FormControl
              type="text"
              name="hometown"
              value={this.state.hometown}
              placeholder="Enter your hometown..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBandHometown"
          >
            <ControlLabel>Genre </ControlLabel>
            <FormControl
              type="text"
              name="genre"
              value={this.state.genre}
              placeholder="Enter your genre..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formYearFormed"
          >
            <ControlLabel>Year Formed </ControlLabel>
            <FormControl
              type="text"
              name="yearFormed"
              value={this.state.yearFormed}
              placeholder="Enter the year your band formed..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBio"
          >
            <ControlLabel>Bio </ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              name="bio"
              value={this.state.bio}
              placeholder="Enter a short bio..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formRecordLabel"
          >
            <ControlLabel>Record Label </ControlLabel>
            <FormControl
              type="text"
              name="recordLabel"
              value={this.state.recordLabel}
              placeholder="Enter your record label..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId="formBandcampUrl"
          >
            <ControlLabel>Bandcamp URL </ControlLabel>
            <FormControl
              type="text"
              name="bandcampUrl"
              value={this.state.bandcampUrl}
              placeholder="Enter your bandcamp url..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formFacebookUrl"
          >
            <ControlLabel>Facebook URL </ControlLabel>
            <FormControl
              type="text"
              name="facebookUrl"
              value={this.state.facebookUrl}
              placeholder="Enter your facebook url..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBandEmail"
          >
            <ControlLabel>Band Email </ControlLabel>
            <FormControl
              type="text"
              name="bandEmail"
              value={this.state.bandEmail}
              placeholder="Enter your band's email..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBookingAgent"
          >
            <ControlLabel>Booking Agent Email </ControlLabel>
            <FormControl
              type="text"
              name="bandBookingAgent"
              value={this.state.bandBookingAgent}
              placeholder="Enter your booking agent's email..."
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="formBandPhotoURL"
          >
            <ControlLabel>Band Photo URL </ControlLabel>
            <FormControl
              type="text"
              name="bandPhotoUrl"
              value={this.state.bandPhotoUrl}
              placeholder="Enter your band photo url..."
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

export default NewBandFormContainer;
