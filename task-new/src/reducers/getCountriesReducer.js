import {GET_COUNTRIES} from '../actions/getCountriesAction';

const initialState = {
    countriesData: [],
}
const getCountriesReducer = (state=initialState, action) => {
    if(action.type === GET_COUNTRIES) {
        console.log("from registration reducer" + action.payload);
    }
    return state;
}

export default getCountriesReducer;