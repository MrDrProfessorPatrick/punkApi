import React from "react";
import RegistrationForm from "./RegistrationForm.js";

export default class RegistartionFormLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      email: "",
      password: "",
      emailIsCorrect: true,
      passwordIsLong: true,
      emailFocusOut: false,
      passwordFocusOut: false,
      messageIncorrectEmail: "Incorrect Email",
      messageShortPassword: "Password must be longer then 6 symbols",
    };

    this.openCloseForm = this.openCloseForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
    this.checkEmailCorrectness = this.checkEmailCorrectness.bind(this);
    this.checkPasswordCorrectness = this.checkPasswordCorrectness.bind(this);
  }

  openCloseForm() {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  }

  handleEmailChange(event) {
    console.log("event", event);
    this.setState({ email: event.target.value });
  }
  handlePasswordChanges(event) {
    this.setState({ password: event.target.value });
  }

  checkEmailCorrectness() {
    if (this.state.email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) !== null) {
      this.setState((state) => ({
        emailIsCorrect: (state.emailIsCorrect = true),
        emailFocusOut: (state.emailFocusOut = true),
      }));
    } else {
      this.setState((state) => ({
        emailIsCorrect: (state.emailIsCorrect = false),
        emailFocusOut: (state.emailFocusOut = true),
      }));
    }
    console.log("email corectness function");
  }

  checkPasswordCorrectness() {
    console.log("Password Length", this.state.password.length);
    if (this.state.password.length < 6) {
      this.setState({
        passwordIsLong: false,
        passwordFocusOut: true,
      });
    } else {
      this.setState({
        passwordIsLong: true,
        passwordFocusOut: true,
      });
    }
  }

  render() {
      return (
      <React.Fragment>
        <button className="open-button" onClick={this.openCloseForm}>
          {!this.state.isOpened ? "Open Form" : "Close Form"}
        </button>
        {this.state.isOpened && (
          <RegistrationForm
            email={this.state.email}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChanges={this.handlePasswordChanges}
            messageForEmail={this.state.messageForEmail}
            emailIsCorrect={this.state.emailIsCorrect}
            passwordIsLong={this.state.passwordIsLong}
            emailFocusOut={this.state.emailFocusOut}
            passwordFocusOut={this.state.passwordFocusOut}
            checkEmailCorrectness={this.checkEmailCorrectness}
            checkPasswordCorrectness={this.checkPasswordCorrectness}
            messageIncorrectEmail={this.state.messageIncorrectEmail}
            messageShortPassword={this.state.messageShortPassword}
          />
        )}
      </React.Fragment>
    );
  }
}
