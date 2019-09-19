const initialState = {
    text: '',
    textFromInit: 'text from initial state'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'action_test':
            state.text = action.payload.text;
            return state;
        default:
            return state;
    }
}