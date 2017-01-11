import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
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
		const user = { username: "guest", password: "123456"};
		// debugger;

		this.props.processGuestUser({user}).then(()=>this.redirectIfLoggedIn());
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
					<div className='login-form-title'>
						Welcome to SmileNow!
						<br/>
						{this.props.formType}!
						<br/>
						{this.renderErrors()}
					</div>
					<div className="login-form">
						<br/>
						<label> Username:
						<br/>
						<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<br/>
							<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<div className="submitButton">

							<input type="submit"
								value="Submit" className="login-button"/>
						</div>
							<br/>
							{this.navLink()}
							<br/>
						<div>
          		<button className="login-button"
            		type="submit"
            		onClick={this.guestLogin}>Guest Login</button>
        		</div>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
