import React from 'React';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene 
						key="login"
						component={LoginForm}
						title="Please Login"
						initial
						/>
				</Scene>
				<Scene key="main">
					<Scene
						rightTitle="Add"
						onRight={()=> {Actions.employeCreate()}}
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						/>
					<Scene
						key="employeCreate"
						component={EmployeeCreate}
						title="Create Employee"
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;