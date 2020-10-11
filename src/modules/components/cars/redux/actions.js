import * as actions from './actionTypes'
import axios from 'axios'

export const getData = (data) => {
    return {
        type: actions.GET_DATA,
        payload: data
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
        return axios.get('data.json')
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(getData(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};