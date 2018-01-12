import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	state = { loggedIn: false};
	
	componentWillMount() {
		firebase.initializeApp({
    		apiKey: "AIzaSyD5dGn9xy8gt_Ulldjm_NQ-pf-5zexMYcs",
    		authDomain: "reactnativeauth-e01be.firebaseapp.com",
    		databaseURL: "https://reactnativeauth-e01be.firebaseio.com",
    		projectId: "reactnativeauth-e01be",
    		storageBucket: "reactnativeauth-e01be.appspot.com",
    		messagingSenderId: "848912726446"
  		});

  		firebase.auth().onAuthStateChanged((user)=> {
  			if(user) {
  				this.setState({loggedIn: true});
  			} else {
  				this.setState({loggedIn: false});
  			}
  		});
	}	

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Logout
							</Button>
						</CardSection>
					</Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {

		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}

}

export default App;