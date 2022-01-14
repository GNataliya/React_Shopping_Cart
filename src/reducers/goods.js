import update from 'immutability-helper';
import { GOODS_LOAD_IN_PROGRESS, GOODS_LOAD_FAIL, ADD_GOODS } from '../actions/type';

const initialState = {
    status: '',
    goods: []  
};

const reducer = (state = initialState, action) => {

    switch (action.type){

        case 'GOODS_LOAD_IN_PROGRESS':
            {
                return update(state, {status: {$set: action.payload }});
            }
        case 'GOODS_LOAD_FAIL':
            {
                return update(state, {status: {$set: action.payload }});
            }
        case 'ADD_GOODS':
            {
                return update(state, {status: {$set: 'ok'},  goods: {$set: action.payload } });     
            }

        default: 
            return state;       
    }
} 

export default reducer;
