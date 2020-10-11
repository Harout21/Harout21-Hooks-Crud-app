import * as actions from './actionTypes';

const initialState = {
    cars:[]
};

export const cars = ( state = initialState , action ) => {
    switch(action.type) {
        case actions.GET_DATA:
            return {
                ...state,
                cars:action.payload
            };
        case actions.REMOVE_CAR:
            const cars = state.cars.filter(item=>item.id !== action.payload);
        return {
            ...state,
            cars
        };
        case actions.EDIT_CAR:
            const newCar = state.cars.map(item=>{
                if(item.id === action.payload.id){
                   return action.payload
                }
                return item
            });
            return {
                ...state,
                cars :newCar
            };
        default:
            return state
    }
};


