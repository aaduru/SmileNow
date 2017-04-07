import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: false,
			modalType: 'login'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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
		if (this.state.modalType === 'login') {
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
	}

	navLink() {
		if (this.state.modalType === "login") {
			return <div>Don't have an account
				<button onClick={this.openModal.bind(this, 'signup')} className="login-button-guest">Sign Up!</button>
			</div>;
		} else {
			return <div> Have an account already
				<button onClick={this.openModal.bind(this, 'login')} className="login-button-guest">Log In!</button>
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

	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
		this.props.clearErrors();
	}

	closeModal() {
		this.setState({modalOpen: false});
		this.props.clearErrors();
	}

	guestLogin(e){
		e.preventDefault();
		const user = { username: "guest", password: "123456"};

		this.props.processGuestUser({user}).then(()=>this.redirectIfLoggedIn());
	}

	render() {
		return (
			<div >
				<nav className="login-signup">
					<button onClick={this.openModal.bind(this, 'login')} className="log_out_button" >Log In!</button>
					&nbsp;or&nbsp;
					<button onClick={this.openModal.bind(this, 'signup')} className="log_out_button" >Sign Up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					<div className="login-form">
						<h1 className='h1-font'>Welcome to
							<span className="smile-font"> SmileNow
								<img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484179941/logo4_fjle77.png" className="logo-image"/>
							</span>
						</h1>
						<br/>
						<div className="modal_type_case">
							{this.state.modalType}
						</div>
					</div>
					<form onSubmit={this.handleSubmit}>
						<br/>
						<div className="login-errors">
							{this.renderErrors()}
						</div>
						<div className="login-form">
							<br/>
							<label>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input"
									placeholder="Username" />
							</label>
							<br/>
							<label>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder="Password"/>
							</label>
							<br/>
							<div>

								<input type="submit" value="Submit" className="login-button-submit" />

								<button className="login-button-guest"
									type="submit"
									onClick={this.guestLogin}>Guest Login</button>

							</div>
						</div>

					</form>
					<br/>
					<div className="login-form">
						{this.navLink()}
					</div>
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
