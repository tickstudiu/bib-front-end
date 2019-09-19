export * from './bib.action';
export * from './bibData.action';

export const actionTest = () => dispatch => {
    dispatch({
        type: 'action_test',
        payload: {text: 'action test'}
    });
};