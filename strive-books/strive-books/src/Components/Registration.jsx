import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    showComplete: false,
  };

  formIsValidated = () => {
    let isValidated = false;
    if (
      this.state.registration.name.length >= 2 &&
      this.state.registration.surname.length >= 3 &&
      this.state.registration.password.length >= 8 &&
      this.state.registration.password.match()
    )
      handleRegistration = (e) => {
        this.setState({
          showComplete: true,
        });
      };
  };

  render(){
      return()
  }
}

export default Registration;
