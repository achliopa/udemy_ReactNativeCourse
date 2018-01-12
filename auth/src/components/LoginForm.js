import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false};

	renderButton() {
		if(this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}

	onButtonPress(){
		const { email, password } = this.state;

		this.setState({ error: '', loading: true});

    	firebase.auth().signInWithEmailAndPassword(email, password)
      		.then(this.onLoginSuccess.bind(this))
      		.catch(() => {
        	firebase.auth().createUserWithEmailAndPassword(email, password)
          		.then(this.onLoginSuccess.bind(this))
          		.catch(this.onLoginFail.bind(this));
      		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						onChangeText={email => this.setState({ email })} 
						value={this.state.email}
						label="Email"
						placeholder="user@gmal.com"
					/>
				</CardSection>
				<CardSection>
					<Input
						onChangeText={password => this.setState({ password })} 
						value={this.state.password}
						label="Password"
						placeholder="password"
						secureTextEntry

					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles= {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;