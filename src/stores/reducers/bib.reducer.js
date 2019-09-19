import { toast } from 'react-toastify';

const initialState = {
    bibs: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_bib':
            state.bibs = action.payload;
            return state;
        case 'delete_bib':
            toast.success(action.payload);
            return state;
        case 'fetch_bib_error':
            toast.error(action.payload);
            return state;
        case 'delete_bib_error':
            toast.error(action.payload);
            return state;
        default:
            return state;
    }
}