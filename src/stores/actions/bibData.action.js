import * as service from '../../services';

import { RootUrl } from '../../config';

export const fetchBibData = (callback) => async dispatch => {
    const res = await service.getApi(`${RootUrl}/bibsData`);
    if (res.success) {
        await dispatch({
            type: 'fetch_bib_data',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'fetch_bib_data_error',
            payload: res.error,
        });
    }
};

export const createBibData = (data, callback) => async dispatch => {
    const res = await service.postApi(`${RootUrl}/bibsData/add`, data);
    if (res.success) {
        await dispatch({
            type: 'create_bib_data',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'create_bib_data_error',
            payload: res.error,
        });
    }
};