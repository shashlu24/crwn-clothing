import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import { auth, SignInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              onClick={SignInWithGoogle}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
