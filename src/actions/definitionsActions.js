import axios from 'axios';


const config = {
    headers: {
        'Content-Type': 'text/plain'
    }
}

export const fetchNewDefinition = (enteredWord) => {
    return async (dispatch) => {
        const api = process.env.REACT_APP_FREE_DICTIONARY_API;
        try {           
            const result = await axios.get(`${api}${enteredWord}`, config);
            


            dispatch(requestSuccess(result.data));
        } catch (err) {
            console.log('cos nie tak')
            console.log(err)
        }

    }
}


const requestSuccess = (payload) => {
    return {
        type: 'REQUEST_SUCCESS',
        payload
    }
}