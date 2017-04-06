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
			return <div><p>don't have an account</p>
				<button onClick={this.openModal.bind(this, 'signup')} className="login-button">Sign Up!</button>
			</div>;
		} else {
			return <div><p>have an account already </p>
				<button onClick={this.openModal.bind(this, 'login')} className="login-button">Log In!</button>
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
					<button onClick={this.openModal.bind(this, 'login')}>Log In!</button>
					&nbsp;or&nbsp;
					<button onClick={this.openModal.bind(this, 'signup')}>Sign Up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					<h1 className='h1-font'>Welcome to
						<span className="smile-font"> SmileNow
							<img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484179941/logo4_fjle77.png" className="logo-image"/>
						</span>
					</h1>
					<br/>
					Please {this.state.modalType} or {this.navLink()}
					<form onSubmit={this.handleSubmit}>
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" className="login-button" />
							<br/>
								<div>
									<button className="login-button"
										type="submit"
										onClick={this.guestLogin}>Guest Login</button>
								</div>
						</div>

					</form>
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
