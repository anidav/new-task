// import Http from '../shared/Http';

export const REGISTRATION = 'REGISTRATION';

const registrationAction = (data) => {
	console.log(data);
	// debugger
	// return (dispatch) => {
	// 	const url='';
	// 	Http.post(url, data)
	// 	.then(response => {
	// 		dispatch({
	// 			type: REGISTRATION,
	// 			payload: response.data
	// 		})
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	})	
	// 	console.log(data);	
	// }
}
export default registrationAction;