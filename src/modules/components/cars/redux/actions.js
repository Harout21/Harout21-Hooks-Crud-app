import * as actions from './actionTypes'
import axios from 'axios'

export const getData = () => {
    return {
        type: actions.GET_DATA,
    }
};
export const getDataSuccess = (data) => {
    return {
        type: actions.GET_DATA_SUCCESS,
        payload: data
    }
};
export const getDataFail = (err) => {
    return {
        type: actions.GET_DATA_FAIL,
        payload: err
    }
};

export const editCarAction = (data) => {
    return {
        type: actions.EDIT_CAR,
        payload: data
    }
};

export const deleteCarAction = (carId) => {
    return {
        type: actions.REMOVE_CAR,
        payload: carId
    };
};

export const getDataAction = () => {
    return (dispatch) => {
        dispatch(getData());
        return axios.get('data.json')
            .then(async response => {
                await dispatch(getDataSuccess(response.data));
            })
            .catch(async error => {
                await dispatch(getDataFail(error.message));
                throw (error);
            });
    };
};