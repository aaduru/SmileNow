import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session_react_modal/session_form_container';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.formTypeLink = this.formTypeLink.bind(this);
	}

	componentDidUpdate(nextprops) {
		this.redirectIfLoggedIn();
		// this.props.clearErrors();
	}

	// componentWillUpdate() {
	// 	 this.props.clearErrors();
	// }

	componentWillReceiveProps(nextProps) {
		if (nextProps.formType !== this.props.formType) {
			this.props.clearErrors();
		}
	}

	// shouldComponentUpdate() {
	// 	this.props.clearErrors();
	// }

	// componentWillMount() {
	// 	this.props.clearErrors();
	// }
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
					<h1 className="main_caption">Find the perfect dental care with SmileNow!</h1>
			
				</div>

		);
	}

}

export default withRouter(SessionForm);
