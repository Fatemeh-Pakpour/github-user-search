import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Header from './Header';
class ProfileUser extends Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.userAccount}`)
      .then(response => {
        this.setState({
          profile: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
  render() {
    console.log(this.state.profile);
    return (
      <div>
      <Header/>
      <Card className="user-card text-center profile">
        <Card.Img
          variant="top"
          className="image"
          src={this.state.profile.avatar_url}
          alt=""
        />
        <Card.Text>{this.state.profile.login}</Card.Text>
        <Card.Text>{this.state.profile.name}</Card.Text>
        <Card.Text>
          <a href={this.state.profile.html_url}>GitHub Profile</a>
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          {this.state.profile.location}
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faLink} /> {this.state.profile.blog}
        </Card.Text>
      </Card>
      <img src={`https://ghchart.rshah.org/${this.props.userAccount}`} alt=""/>
      </div>
    );
  }
}

export default ProfileUser;
