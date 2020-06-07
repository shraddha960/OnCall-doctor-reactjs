import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm = this.submituserLoginForm.bind(this);
  }
  
  componentDidMount() {
    axios.get("http://localhost:4000/getData").then(res => {
      this.setState({
        data: res.fields
      });
    });
  }

  getDetails() {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
    }
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["emailid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
    <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card login-box">
            <div class="card-header">
				<h2>Sign In</h2>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>

            <div className="card-body">
                <form method="post" name="userLoginForm" onSubmit={this.submituserLoginForm}>
                    <div className="input-group form-group5">
                        <div className="input-group-prepend">
							<span className="input-group-text"><i className="fa fa-envelope-square icons-btn"></i></span>
                            {/* <a href="https://enterprise.github.com/login"></a> */}
					    </div>
                        <input type="text" className="form-control4" name="emailid" placeholder="Email Id" value={this.state.fields.emailid}
            onChange={this.handleChange}></input>
                        <div className="errorMsg" style={{height: '18px'}}>{this.state.errors.emailid}</div>
                    </div>
                    <div className="input-group form-group5" style={{marginTop: '15px'}}>
                        <div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key icons-btn"></i></span>
					    </div>
                        <input type="password" className="form-control4" name="password" placeholder="password" value={this.state.fields.password}
            onChange={this.handleChange}></input>
                        <div className="errorMsg" >{this.state.errors.password}</div>
                    </div>
                    
                    <div className="row align-items-center remember" style={{marginTop: '18px'}}>
                        <input type="checkbox"/>Remember Me
                    </div>
                    <div className="form-group5">
						<input type="submit" onClick={this.getDetails} value="Login" className="btn float-right login_btn"/>
					</div>
                    
                </form>
            </div>
                &nbsp;
            <div class="card-footer" style={{marginTop: '41%', color: '#ffc107'}}>
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="/signUp">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="/signUp">Forgot your password?</a>
				</div>
			</div>
            </div>
        </div>
    </div>

    );
  }
}
