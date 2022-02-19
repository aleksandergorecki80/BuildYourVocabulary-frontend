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
            
            // const payload = {
            //     word: result.data.word,
            //     phonetics: {
            //         audio: result.data.phonetics[0].audio,
            //         text: result.data.phonetics[0].text
            //     },
            //     meanings: result.data.meanings
            // }
            console.log(result.data)
            // console.log(payload)

            // dispatch(requestSuccess(payload));
        } catch (err) {
            console.log('cos nie tak')
            // console.log(err)
        }

    }
}


// const requestSuccess = (payload) => {
//     return {
//         type: 'REQUEST_SUCCESS',
//         payload
//     }
// }