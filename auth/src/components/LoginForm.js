import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: ''};

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
				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;