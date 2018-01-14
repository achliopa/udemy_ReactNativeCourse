import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';


class App extends Component {
	componentWillMount() {
		const config = {
		    apiKey: "AIzaSyA63GqE8PN31lmxCIWoHB8WiYSx-G4Lvq8",
		    authDomain: "reactnative-manager-633d1.firebaseapp.com",
		    databaseURL: "https://reactnative-manager-633d1.firebaseio.com",
		    projectId: "reactnative-manager-633d1",
		    storageBucket: "reactnative-manager-633d1.appspot.com",
		    messagingSenderId: "410288509172"
		};
		firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello World!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;