const initialState = {
    word: '',
    phonetics: {
        audio: '',
        text: ''
    },
    meanings: []
}

const definitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default definitionsReducer;