import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	
	componentWillMount() {
		firebase.initializeApp({
    		apiKey: "AIzaSyD5dGn9xy8gt_Ulldjm_NQ-pf-5zexMYcs",
    		authDomain: "reactnativeauth-e01be.firebaseapp.com",
    		databaseURL: "https://reactnativeauth-e01be.firebaseio.com",
    		projectId: "reactnativeauth-e01be",
    		storageBucket: "reactnativeauth-e01be.appspot.com",
    		messagingSenderId: "848912726446"
  		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;