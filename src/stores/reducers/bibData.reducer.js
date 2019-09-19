import { toast } from 'react-toastify';

const initialState = {
    bibsData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'fetch_bib_data':
            state.bibsData = action.payload;
            return state;
        case 'create_bib_data':
            toast.success(action.payload);
            return state;
        case 'fetch_bib_data_error':
            toast.error(action.payload);
            return state;
        case 'create_bib_data_error':
            toast.error(action.payload);
            return state;
        default:
            return state;
    }
}