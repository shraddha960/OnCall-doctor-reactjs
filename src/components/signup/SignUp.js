import React, { Component } from "react";
import "./SignUp.css";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstname"] = "";
      fields["lastname"] = "";
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

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your firstname";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your lastname";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

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
          <div className="card1 login-box">
            <div class="card-header">
              <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

            </div>

            <div className="card-body">
              <form method="post" name="submituserRegistrationForm" onSubmit={this.submituserRegistrationForm}>

                <div className="input-group form-group5">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user icons-btn"></i></span>
                    {/* <a href="https://enterprise.github.com/login"></a> */}
                  </div>
                  <input type="text" className="form-control4" name="firstname" placeholder="First name" value={this.state.fields.firstname}
                    onChange={this.handleChange}></input>
                  <div className="errorMsg">{this.state.errors.firstname}</div>
                </div>

                <div className="input-group form-group5" style={{ marginTop: '15px' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user icons-btn"></i></span>
                    {/* <a href="https://enterprise.github.com/login"></a> */}
                  </div>
                  <input type="text" className="form-control4" name="lastname" placeholder="Last name" value={this.state.fields.lastname}
                    onChange={this.handleChange}></input>
                  <div className="errorMsg">{this.state.errors.lastname}</div>
                </div>

                <div className="input-group form-group5" style={{ marginTop: '15px' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-envelope-square icons-btn"></i></span>
                    {/* <a href="https://enterprise.github.com/login"></a> */}
                  </div>
                  <input type="text" className="form-control4" name="emailid" placeholder="Email Id" value={this.state.fields.emailid}
                    onChange={this.handleChange}></input>
                  <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>

                <div className="input-group form-group5" style={{ marginTop: '15px' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key icons-btn"></i></span>
                  </div>
                  <input type="password" className="form-control4" name="password" placeholder="password" value={this.state.fields.password}
                    onChange={this.handleChange}></input>
                  <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                &nbsp;
                <div className="form-group5">
                  <input type="submit" value="Register" className="btn float-right register_btn" />
                </div>

              </form>
            </div>
                &nbsp;
            <div class="card-footer" >
              <div class="d-flex justify-content-center links">
                Already registered? <a href="/login">Login</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
