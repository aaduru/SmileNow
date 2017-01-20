import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.formTypeLink = this.formTypeLink.bind(this);
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

		this.props.processGuestUser({user}).then(()=>this.redirectIfLoggedIn());
	}


	navLink() {
		if (this.props.formType === "login") {
			return <div><p>don't have an account</p>
				<Link to="/signup">Sign Up!</Link>
				</div> ;
		} else {
			return <div><p>have an account already </p>
				<Link to="/login">Log In!</Link>
				</div>;
		}
	}

	formTypeLink() {
		if (this.props.formType === "login") {
			return <div>Log In!</div> ;
		} else {
			return <div>Sign Up!</div>;
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
					<h1 className="main_caption">Find the Perfect Dental care with SmileNow!</h1>
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<div className="login-form">
							<h1 className='h1-font'>Welcome to
								<span className="smile-font"> SmileNow
									<img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484179941/logo4_fjle77.png" className="logo-image"/>
								</span>
							</h1>
							<br/>
							<div className="nav-Link">
								{this.formTypeLink()}
							</div>

							<div className="login-errors">
								{this.renderErrors()}
							</div>
							<br/>
							<label className="login-label"> Username:
								<br/>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label className="login-label"> Password:
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
							<div className="nav-Link">
								{this.navLink()}
							</div>
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
