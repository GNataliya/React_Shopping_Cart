import update from 'immutability-helper';
import { GOODS_LOAD_IN_PROGRESS, GOODS_LOAD_FAIL, ADD_GOODS } from '../actions/type';

const initialState = {
    status: '',
    goods: []  
};

const reducer = (state = initialState, action) => {
    // console.log('2 - action in Reducer', action)
    // console.log('3 - state in Reducer', state)

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
                // const items = (action.payload).map( el => {
                //     const status = { status: 'Success'}
                //     const item = Object.assign(el, status)
                //     return item
                // })
                // console.log('items', items)
                return update(state, {status: {$set: 'ok'},  goods: {$set: action.payload } });
                
            // return {...state, goods: action.payload }      
            }

        default: 
            return state;       
    }
} 

export default reducer;