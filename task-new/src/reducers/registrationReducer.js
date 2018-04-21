import {REGISTRATION} from '../actions/registrationAction';

const initialState = {
	payload : {
		firstName   : '',
		lastName    : '',
		country     : '',
		city        : '',
        address     : '',
		address2    : '',
		legal       : '',
		package     : '',
		cardNumber  : '',
		cardName    : '',
		cardCvc     : '',
		cardExpDate : ''
	}
}

const registrationReducer = (state = initialState, action) => {

	if(action.type === REGISTRATION) {	
		state = Object.assign({}, state, { payload: action.payload}); 	
	}
	return state;
}

export default registrationReducer;