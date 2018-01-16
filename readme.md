# Section 1 - Introduction

## Lecture 1 - Introduction & Roadmap

* visit https://facebook.github.io/react-native/docs/getting-started.html
* for ios native apps we need a mac pc :(
* for android on linux we folow the official docs
* we will install dependencies and eslint for sublime
* course repo: https://github.com/StephenGrider/ReactNativeReduxCasts

# Section 2 - OSX Setup

## LEcture 4 - OSX Installation

* iOS App Dev dependencies:
** XCode: packages our code + the React native lib into an installable app and runs it on iOS simulator (latest version)
** HomeBrew: Used to Install node (www.brew.sh)
*** cp the script and run it in a terminal
*** update it with: brew update
** Node/NPM: node to run javascript on machine , npm for package installation
*** run: brew install node (minimum version 4.5)
*** run : node -v 
** watchman:  watches files on harddrive and waits for them to change
*** run: brew install watchman
** RN CLI: React Native Command Line Interface. Used to generate new ReactNative Projects
*** run: npm install -g react-native-cli
* we create our first project in our workspace
** we run: react-native init albums (albums is the name of the project)
* (in a mac to run our ios application) in our project root directory <>/albums we run: react-native run-ios
* simulator launches

# Section 3 - Windows Setup

## Lecture 7 -Win Installation

* we install java sdk from oracle to run android sdk (>8)
** Java SE Dev Kit for win x64
* we install node (>4.5)
* we install python 2 (not v3)
* we install android studio

## Lecture 8 - Android Studio and React Native CLI

* we install android sdk
* we run cmd
* we test installation. node -v 
* we install : npm install -g react-native-cli
* we go to our workspace and run : react-native init albums

## Lecture 9 - Emulation Creation and  System Variables

* we openup android studio
* we open an existing android project.
* we go to our newly created albums project
* when we open up we see an error message. we click the link install missing ...., click accept  and finish installation.
* again we get an error and click again to the link
* we need to create an android emulator: menubar tools->android-> avd manager
* create a virtual device
* we select a device (e.g. nexus 5) 
* the default apo level is 24 but we will downgrade to 23 because of react-native requirements (probably now after 2+ years is higher )
* we finish and click play to see the emulator
* we go to windows system settings (view advanced system settings)
* in advanced menu we add 2 environment variables
** JAVA_HOME : (newly install jdk folder)
** in Path: -> edit: -> new: C:\USers\<user>\AppData\Local\Android\sdk\platform-tools
* restart cmd
* go to project dir and run: react-native run-android
* react-native asks to enter dev menu (ctrl+m)
* when i close everything i need to start the emulator from android studio and the run react-native run-android

# Section 3.5 - Linux Setup

* we have node v8
* we install globally react-native-cli: npm install -g react-native-cli
* we install oracle java se jdk 
** GLOBAL INSTALL
*** sudo add-apt-repository ppa:webupd8team/java
*** sudo apt-get update
*** sudo apt-get install oracle-java8-installer
** LOCAL INSTALL
*** download tarball and untar in desired folder
** add JAVA_HOME="/usr/lib/jvm/java-8-oracle" in /etc/environment file for global install and to the local java folder for local install
* we install android sdk locally following the instructions from reactnative website
* install watchman

# checkout, compile & install
git clone https://github.com/facebook/watchman.git
cd watchman/
git checkout v4.9.0
sudo apt-get install -y autoconf automake build-essential python-dev libssl-dev libtool
./autogen.sh
./configure
make
sudo make install

# raise inotify limit
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches     && \
  echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events  && \
  echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && \
  watchman shutdown-server 
* in android studio setup android virtual device (AVD) emulator
with api 23 and launch it
* create a project react-native init albums
* in the project root folder run : react-native run-android

# Section 4 - ESLint

## Lecture 10 - ESLint Setup and Overview

* editor specific setup and project specific setup. editor plugin for lint. eslint is installed on the linter. One time setup
* project specific confirguration using a file. file tells eslint on the rules we want to use e.g semi rule. there are prebundled set of rules

## Lecture 12 - Install ESLint in Sublime 3

* install eslint globally with npm
* install package control in sublime
* install a config file to eslint in the project root folder: npm install --save-dev eslint-config-rallycoding
* to tell eslint to use this config we create anew file .eslint in our project root folder and write in json

{
	"extends": "rallycoding"
}

* in sublime i install sublimelinter package
* and SublimeLinter-eslint
* for future projects we just have to npm install the congig and import it in the json file .eslintrcrm 

# Section 5 - Onwards

## Lecture 14 - Troubleshoot React Native Installs

* eslint is causing problems. we commit and test later

## Lecture 15 - Project Walkthrough

* 2 folders. ios and android
* config files
* index.js is the root file of our app
* we want to create a component and render it on screen
** import a library to help create a component
** create a component 
** render it to the device

## Lecture 17 - React vs React native

* React: component behaviour, make components work together
* ReactNative: take a component and render it on mobile screen, provides core componets 
* our first component is functional stateless React component
* in react native we wrap text in <Text /> react component
* babel takes care of translating jsx to common javascript
* to render React components in Device we use: ReactnNative.AppRegistry.registerComponent('<appname>', () => RootAppComponent)
* we needt to destructure import to import Text

## IMPORTANT NOTE

* When we reboot our linuc dev machine and we try to npm start or run-android it crashes. We need to run the watchamn config sctipt again and it is ok. as eslint is not properly configured yet we use our emulator for debugging. (SWEET)
we rerun the app with typing 2 times r with the emulator on
* in ios development or in old version there where 2 different index.js files. index.ios.js and index.android.js. we will check if we need to create two root app files. NO. We change to index.android.js and it breaks
* SOLUTION:1. it appears that watchman at dev pc reboot loses its config. resun watchman config script if needed
* SOLUTION:2 new react-native uses YARN. dont use npm install for addon packages. USE YARN

## Lecture 21 - Application Outline

* we will have a static header and scrollable cards for music albums. each card will have a header an image and a button to buy, directing to the purchase page (amazon). components
** Header
** Card ->[CardSection]

## Lecture 22 - Header Component

* we create a src folder for all our project src files. in it a components folder for React Components and there Header.js for Header component
* we create it as a staless function component.
* we export it the standard react way.

# Section 6 - Make the App Looking Great

* ## Lecture 24 - Styling w/ React native

* unfortunately no css/html ready made like Bootstrap Of Materialize
* we do it the React way. we usss css styling but the systax is javascript obejt and the property names camelcase according to react spec. we create a styles object outside with nested obects that contain javascript style css. we destructure the master style object in our component using a nested object per reactnative element where we pass it as a prop by the name style
* to position our text on the phone we use another ReactNative primitive type called View that wraps Text. we style it like Text by destructuring and styles object and pass it to props. we change its backround color

## Lecture 26 - Intro to Flexbox

* a way of positioning an element in a box
* we use property justifyContent: 'flex-end' it positions content element in bottom left position, 'center' to left center 'start' to left top.
*we use alignItems: 'flex-start' to top left, 'center' for top center 'flex-end' for top right
* we combine both and we add shadow border in bottom with css

## Lecture 27 - Making Header Reusable

* wee use react component props to pass title

# Section 7 - HTTP Requests from React Native

## Sourcing Album Data

* we need to consume api for dynamic data. no hardcoding
* an api waitin gfor us for this app in: https://rallycoding.herokuapp.com/api/music_albums
* we ll use AlbumList comp to list all AlbumDetail components for each album
* app renders Header and AlbumList that will get the api data
* react requirement for single element return in jsx holds for native. but unlice react-dom here we dont use <div> but <View> element to wrap things up
* to handle async request to backend api we will transorf AlbumList to statefull class component and give him a state to rerender when list of data becomes available
* Refresher: 
** Functional Stateless Component: Used for presenting static data, cant hadle fetch data, easy to write (arrow function)
** class (stateful) component: used for dynamic sources of data, handles any data that might change, knows when it renders, can have state, has lifecycle methods available, it is an ES6 javascript class.

## Lecture 32 - Lifecycle Methods

* we need to decide when dynamic data will be fetched (before we render) . we use componentWillMount lifecycle method.
* we add a console.log to test. where is the console.log?????
* react native offers debugger functionality at 
http://localhost:8081/debugger-ui/
* our console log appears at at that page console (dev tools)
* at emulator we need to bress ctrl+m (dev menu) to enable remote JS debugging (and use the console)
* we can even use debugger; calls in our code to trigger debugger launch
* console shows tha will mount is called to times in reload..
*ALWAYS STOP REMOTE DEBUGGER BEFORE CLOSING EMULATOR

## Lecture 34 - Network Requests with Axios

* axios usually has problems with react native. in that case we use native lib fetch
npm install --save axios in our project (USE YARN)
* the flow is: react native boots up -> rn decides to render app on screen -> app decides to render itself , Header and AlbumList -> album realizes its about to render and call componentWillMount -> hook method makes HTTP req(async) -> App, album list and header render -> http returs json data
* we need to rerender. react component state solves it
* we could use ES6 class constructor to init state. probably the tutor uses ES7 experimental class attributes under the hood with babel and does it straight as a propery. we will go this way. we use empty string to avoid array.map crashes
* setstate causes rerender of the affected elemets (containing changing data)
* Component State Refresher:
** a plain javascript object used to record and respond to user triggered events
** when we need to update what a component shows, call this.setState
* only change state with setState no this.state =
* we defile AlbumDetail to host Album card.

## Lecture 39 - Fantastic Reusable Componenbts - The Card

* we will implement reusable react components complete with styling for presentational purposes. our aim is to make them reusable
* to render a React Component passed into nother React Component by wrapping it with tags we use the {props.children}

# Section 8 - Mastering Component layout

## Lecture 43 - Master Layout w/ Flexbox

* flexbox can layout multiple items in a container.
* flexbox if we dont direct it outherwise will place all items on top left corner one under the other 
* justify content ' and alignitem works the same for multiple like for one item.
* justify content 'space-between' equalizes space between the items with the first in topleft
and the last in bottom left corner
* justify content: 'space-around' does the same but added equalized space before and after the item group 

## Lecture 44 - Positioning of elements in Mobile

* we will wrap the 2 text elemets in a vew item. image also in a view item. both will be style with justify-content: flex start. to put them left. but justifyCOntent we saw that it posistions on the vertical axis. now we want to use it for the horizontal axis. this is achieved with flex direction. (flexDirection: 'row')
* what is left is to align text items vertical within a view. we introduce a Text Container (View) which syles its internal items with flexDirection: 'column' and justifyContent: 'space-around'
* we render images in react native with <Image /> tag. we need to add source property with a uri to the image file ant to add a a style property passing an object that defines a height and width in pixels
* A trick to style an image to fill a parent container on React native with Flexbox is: height: a large value, flex: 1, width: null
* we cannot scroll

## Lecture 48 - Making Content Scrollable

* we detect the jsx tags that are supposed to be scrollable (for us AlbumList  />, we import a React native Component <ScrollView /> and we wrap our componet with that
* in older reactnative release scroll bounced back to start. to fix this we add style={{ flex: 1}} as a parameter to the SCrollView parent component

## Lecture 49 - Handling User Input with Buttons

* we will make our reusable button
* in ReactNative Docs TouchableOpacity is a button, TouchableHighlight is also a button. Opacity and Hoghlight are visual effects on button wjen the user taps. we treat them as View tags
* TouchableOpacity componet supports onPress event handlers
* styling with flexbox. flex: 1 means take as much space as you can. alignSelf: 'strech' means stretch to fill as much space as you can
* we pass an anonymous callbacka s a prop to the Button to run at the onPress event

## Lecture 52 - Linking Between Mobile Apps

* Linking ReactNative API Library to link to other native apps.
* Linking library has openURL(url) method to open url witht the browser

# Section 9 - Authentication w/ Firebase

## Lecture 55 - Auth App Introduction

* in our workspace we run: react-native init auth
* we will implement a simple authentication form. signup login logout
* again we have Header Card/CardSection Button and new Componet LoginForm
* we will use firebase and try to integrate into React
* we kl use a spinner for loading and validation

## Lecture 56 - Common Root Component

* we launch android emulator
* in /auth we run react-native run-android
* we create a new folder /src for custom code
* we delete App.js (root component) and make a new one in /src
* App.js is a boilerpate class react component
* in index.js we fix the import and check the emulator
* we copy paste reusable components from last project  (Header,Card,CardSection, Button)
* in the common folder we add index.js file to createa common import
we export everything * from each file in the folder (our exports must be named and not default in the individual files so se remove default). we add Header to App

## Lecture 58 - What is Firebase?

* online database + auth (analytics and file storage) GOOGLE
* https://console.firebase.google.com/ ADD Project
* we name it and create it.
* we select add firebase to your webapp although we develop native. as react uses javascript
* we select auth at develop and select authentication method. we cannot use oauth as it has issues with react native so we go for setup signin method -> email/password and enable it

## Lecture 59 - Firebase Client Setup

* we need to install firebase in our project with yarn (yarn add firebase)
* we have a bunch of data waiting for us so we need to tell our app to connect to these data
* we need to connect before our App renders so we add a lifecycle method there (componentWillMount)
* in our firebase console top right we click web setup
* we are not using html so we copy the config object as a param at firebase.initializeApp()

## Lecture 60 - Login Form Scaffolding

* We will make another Component for form as it appears and disapears
* Loginform is a class components as we expect it to have state to handle text input.
* Text input will be build in the component and then refactored to a reusable component
* Reactnative offers a primitive TextInput to handle text input.
* TextInput by default does not have a set height and width like Image tag. we need to style them
* TextInput supports onChangeText event handlers. we use the handler to set the component state with the text inserted. we inject directly an anonymous arrow function
* we set the value with state.text to reset after submit
flow is: textInput -> user types text -> onChangeText event is called -> setState with new text ->comp rerenders (when we rerender textInput value is this.state.text). This flow is a reatime capture of any text input change in state. this
is done becdause textinput does not internaly keep state to know its value
* we remove style property as it creates issues.
* we create are usable component called Input and place it in common. this component is functional and used for presentation of an Input section (label+ input).
* we import this componet in LoginForm and place it in jsx.
*as this is presentational we dont want to insert in it any logic or state. but we have defined all these in LoginForm refering to the TextInput that now is in Input. we pass them 2 levels down the iheritance LoginForm-> Input-> TextInput using the props system. especialy Input just parses these props.
* we do extensive styling in Input using a styling object. we use flexbot. we use the flex: param giving different values. these are the flex representation of grid. these values are add up and each item gets its defined fraction of the sum e.g a) flex: 2 b) flex: 1 a gets 2/3 of grid and b 1/3 in the direction that flex was applied.
*secureTextEntry property hides password in textinput. autoCorrect property enables disabes mobile autocorrect functionality in textinput
* for boolean props defining them without assignment sets them true not defineing them at all sets them false on check. no need to someProp={true}

# Section 10 - Processing Authentication Credentials

## Lecture 69 - Logging User In

* we use onPress event handler on Button
* because our function to be called is a callback to be called in the future we bind it to this.
* firebase.auth().signInWithEmailAndPassword(email,password);
is the function we call to signup (firebase.auth().createUserWithEmailAndPassword(email,password)). this call returns a promise
* if the user signins and fails we take him to signup if it fails we sahow error. in success we take him to successpage
* we use the promise chain to implement the flow
* we test the flow and it works
* we will add a spinner while we wait for reply. we add a Spinner in common to reuse it. we use native element ActivityIndicator from react-native and we wrap it with a View tag to style it

## Lecture 75 - Handling Authentication Events

* firebase.auth() has an event handler onAuthStateChanged()
* we want to put it at app initialization so we put it in App.js after connection to firebase. this function we check the auth state and set component state. based on componnet state w eshow login form ior logout button which calls firebase.auth().signOut()

# Section 11 - Diggin Deeper in Redux

## Lecture 78 - App Mockup and Redux Approach

* We want animations. show, use Redux lists very fast
* Redux refresher:
** Action --> [Store: --> Reducer --> State]
** Turn 'asd' into an aray of characters -->[--> if action type is 'split'. take a string of characters and turn it to array --> ['a','b,'c,'d']]
** Action: An object that tells the reducer how to change its data, must contain type
** Store: An object that holds the applications data
** Reducer: A function that returns some datas
** State: Data for our app to use
** WE ALWAYS RETURN BRAND NEW OBJECTS FROM REDUCERS

## Lecture 82 - App Boilerplate

* we install redux and react-redux with yarn (yarn add redux react-redux)
* we copy common folder from previous project after making src and components folders
in root app file re import redux and react-redux libs and use Provider and createStore like a web app.
* Provider  contains the store and translates the data to react usable data
* we create a dummy reducer use combinereducers to make one that is passed in createStore.

# Section 12 - Back to React

## Lecture 84 - Rendering header

* Provider can have only one child
* we will set alist of catds with one cardsection visible. when user taps on it the other cardsections will become visible. we will ddo this with redux
*)
* Data in Redux come from Reducers and are in the State
* REFRESHER: How we decide on reducers
** what are the states of the app. ahat are the data in the app.
** We use Library Reducer (list of tech library objects) and Selection Reducer

## Lecture 86 - Library List of Data

* we put library reducer in a separate file and we import it in combineReducrs under alias libraries which is our redux state proppety in the store
* json imports is ES6 is simple : import data from './LibraryList.json' returns javascript with auto parsing.
* library Reducer has no states. it is static and returns the list of objects
* we create a ReactComponet to show the List of Libraries. It is a class component.
* we will bind it to Redux using react-redux connect forms the connection between the store and react. it wraps the component and talks to store through the provider.
* REFRESHER: mapStateToProps = state => {} takes state from reduxstore and maps it to react component props.
* we console log the state in map function

# Section 13 - Rendering Lists 

## Lecture 91 - Theory of ListView

* Rendering a very large list of items with array.map is laggy and slow. it is not efficient to create 1000 react components just to view 10 every time in our screen.
* React Native provides native ListView. it figures which items are visible and creates components and renders only these. List view uses 10 components whatever fit in screen and populates every time with new data. so it is incredible fast.

## Lecture 92 - ListView in practice.

* ListView is initialized at parent components lifecycle method componentWillMount. there we instantiate ListVew.DataSOurce passiing standard parameters witht he config object

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

* we create the dataSource to be used in our React code passign a list of data to the ListView as datasource/

this.dataSource = ds.cloneWithRows(this.props.libraries);

* listvew is called in our jsx passing a prop datasource and a renderRow prop function which renders the rows. this function gets as argument an element of the list to render.

			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>

				renderRow(library) {
		return <ListItem library={library} />
	}

* we implement our custom React Component to show a list item
* to enable scrolling our top component needs style={{ flex: 1 }}> as a prop 

## Lecture 95 - Selection Reducer

* reducers initializers cannot return undefined. null is accepted
* we need to connect state with ListItem to know if it is selceted . we know how to do it. also we need to be able to change the state variable based on user taping. this is an redux action. we will use action creator(generator)
* we bind the actions to the ListItem using connect wrapper passing as second argument the actions import containng our action creator.

## Lecture 98 - Touchable React Native Component

* TouchableWithoutFeedback will register touch events
* we add onPress event handler that calls the action creator.
* we wire state and action to the reducer and log the state to check that tapping changes selection
* reducer initializes its state param to null and switches on action.type

## Lecture 100 - Expanding a Row.

* we will use connect (mapStateToProps) to map state selectionID to ListItems PRop to conditionaly render a second CardSection with the details.
in mapstatetoprops function we can pass as a second parameter the ownProps to get the component props for condeitional logic like checking ListItem ID if it same as tapped id to expand component.

## Lecture 102 - Animations.

* we use LayoutAnimation React Native Component 
* we add a lifecycle method componentWillUpdate adding the function LayoutAnimation.spring()
* in Android it doesnt work. it needs NativeModules to be imported and the following snipped to be added after imports

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

* we need to call animation before update

# Section 14 - Not Done Yet

## Lecture 104 - Next App Overview

* we will explore navigation in a new app called mananger
* we will login to a dashboard showing employes. there will be a form to create or edit employee and msg hom and and a button to delete him
* we will use redux fro login. 
* header changes depending on the app state
* each use has private pool of employees
* show several screens . navigation
* full screen overlay to delete actiopn
* text msg from app

## Lecture 107 - App Setup

* we install reduc and react-redux with yarn
* add boilerplate Root react component with redux.
* we install firebase lib with yarn

# Section 15 - Handling Data in Reaqct vs Redux

## Lecture 108 - LoginForm in Redux

* the benefit is that we make our redux components simpler, moving logic to redux
* Login form with redux. it shows a form, and calls action creator when a user types or clicks a button.
* react captures user input. redux process login. React shows result.
* Login flow: User types sthing -> Calls action creator with new text -> action creator returns an action -> action sent to all reducers -> reducer calculates new app state -> state sent to all components -> components rerender

* we create an event handler for text change in email and call an action generator to serve the event through redux. otherwise it is standard redux code
