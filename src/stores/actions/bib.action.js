import * as service from '../../services';

import { RootUrl } from '../../config';

export const fetchBib = (callback) => async dispatch => {
    const res = await service.getApi(`${RootUrl}/bibs`);
    if (res.success) {
        await dispatch({
            type: 'fetch_bib',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'fetch_bib_error',
            payload: res.error,
        });
    }
};

export const deleteBib = (id, callback) => async dispatch => {
    const res = await service.deleteApi(`${RootUrl}/bibs/${id}`);
    if (res.success) {
        await dispatch({
            type: 'delete_bib',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'delete_bib_error',
            payload: res.error,
        });
    }
};

