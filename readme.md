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
