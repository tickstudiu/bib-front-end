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

export const fetchBibById = (id, callback) => async dispatch => {
    const res = await service.getApi(`${RootUrl}/bibs/${id}`);
    if (res.success) {
        await dispatch({
            type: 'fetch_bib_by_id',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'fetch_bib_by_id_error',
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

export const createBib = (data, callback) => async dispatch => {
    const res = await service.postApi(`${RootUrl}/bibs/add`, data);
    if (res.success) {
        await dispatch({
            type: 'create_bib',
            payload: res.data
        });
        await callback();
    } else {
        await dispatch({
            type: 'create_bib_error',
            payload: res.error,
        });
    }
};

