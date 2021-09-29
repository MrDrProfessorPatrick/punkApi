import React from "react";
import { PopUpForm } from "./PopUpForm";

export default function RegistrationForm(props) {
    return (
    <div className="form-popup" id="myForm">
      <form className="form-container">
        <h1>Login</h1>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        {!props.emailIsCorrect && props.emailFocusOut && (
          <PopUpForm message={props.messageIncorrectEmail} />
        )}
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={props.email}
          onChange={(e) => props.handleEmailChange(e)}
          onBlur={props.checkEmailCorrectness}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        {!props.passwordIsLong && props.passwordFocusOut && (
          <PopUpForm message={props.messageShortPassword} />
        )}
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={props.password}
          onChange={(e) => props.handlePasswordChanges(e)}
          onBlur={props.checkPasswordCorrectness}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
