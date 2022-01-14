import update from 'immutability-helper';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/type';

const initialState = {
    items: [],         // [{ _id, title, price, description, category, image, rating }]
};


const reducer = (state = initialState, action) => {

    const findItemIndx = (id) => {
        return state.items.findIndex(item => item.id === id);
    }

    switch (action.type){        
        case 'ADD_TO_BASKET':
        {
            const index = findItemIndx(action.payload.id);
            
            if(index !== -1 ){
                return update(state, {items: { [index]: { 
                    count: { $set: state.items[index].count + 1 }, 
                    itemSumm: {$set: state.items[index].itemSumm + (state.items[index].items.price)*100}
                    }}})
            } else {
                return update(state, {items: { $push: [ action.payload ] }});
            }
        }
        case 'INCREASE_QUANTITY':
        { 
            const index = findItemIndx(action.payload.id);

            if(index !== -1 ){
                return update(state, {items: { [index]: { 
                    count: { $set: state.items[index].count + 1 }, 
                    itemSumm: {$set: state.items[index].itemSumm + (state.items[index].items.price)*100}
                }}}) ;    
            }
        }
        case 'DECREASE_QUANTITY':
        {
            const index = findItemIndx(action.payload.id);

            if(index !== -1 ){
                return update(state, {items: { [index]: { 
                    count: { $set: state.items[index].count - 1 }, 
                    itemSumm: {$set: state.items[index].itemSumm - (state.items[index].items.price)*100}
                }}}) ;    
            }
        }    
        case 'REMOVE_FROM_BASKET':
        {
            const index = findItemIndx(action.payload.id);
            if(index !== -1 ){
                return update(state, {items: {$splice: [[index, 1]] }}); 
            }
        }   
        

        default: 
            return state;   
    }
} 

export default reducer;
