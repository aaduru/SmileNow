import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestLogin(e){
		e.preventDefault();

	}


	navLink() {
		if (this.props.formType === "login") {
			return <div><p>If you don't have an account</p>
				<Link to="/signup">Sign Up!</Link>
				</div> ;
		} else {
			return <div><p>If you have an account already </p>
				<Link to="/login">Log In!</Link>
				</div>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to SmileNow!!
					{this.props.formType}
					<br/>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
						<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<div className="submitButton">

							<input type="submit" value="Submit" className="login-button"/>
						</div>
						<br/>
						{this.navLink()}
						<div>
          <button
            type="submit"
            onClick={this.guestLogin.bind(this)}>Guest Login</button>
        </div>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
