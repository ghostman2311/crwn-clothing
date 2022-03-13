import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./sign-in.scss";
import { auth } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            onChange={this.onChangeHandler}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={this.signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
