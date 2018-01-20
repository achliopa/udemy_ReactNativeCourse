import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_SAVE_SUCCESS,
	EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch(action.type) {
		case EMPLOYEE_CREATE:
		case EMPLOYEE_SAVE_SUCCESS:
		case EMPLOYEE_DELETE_SUCCESS:
		 return INITIAL_STATE;
		case EMPLOYEE_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value }
		default:
			return state;
	}
};