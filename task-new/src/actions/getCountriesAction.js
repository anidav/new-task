import Http from '../shared/Http';

export const GET_COUNTRIES = "GET_COUNTRIES";
 
const getCountriesAction = () => {
    // debugger;
    return  (dispatch) => {
        const url="../../public/countries.json";        
        Http.get(url)
        .then(response => {     
            console.log("response" + response.data)           
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
                
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}
export default getCountriesAction;