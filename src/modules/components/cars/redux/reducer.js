import * as actions from './actionTypes';

const initialState = {
    cars: []
};

export const cars = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return {
                ...state,
                loading: true
            };
        case actions.GET_DATA_SUCCESS:
            return {
                cars: action.payload,
                error: '',
                loading: false
            };
        case actions.GET_DATA_FAIL:
            return {
                cars: [],
                error: action.payload,
                loading: false
            };
        case actions.REMOVE_CAR:
            const cars = state.cars.filter(item => item.id !== action.payload);
            return {
                ...state,
                cars
            };
        case actions.EDIT_CAR:
            const newCar = state.cars.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            });
            return {
                ...state,
                cars: newCar
            };
        default:
            return state
    }
};


