import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from './type';

// const item = [];
    // result.data.forEach((i) => {
    //     const cart = {
    //         status: 'check',
    //         id: i.id,
    //         title: i.title,
    //         price: i.price
    //     }
    //     item.push(cart)
    // })

export const addToBasket = (payload) => {

    const item = {
        id: payload.id ,
        items: payload,
        count: 1,
        itemSumm: (payload.price * 100),
    }

    const action = { type: ADD_TO_BASKET, payload: item };

    return action;
}
    
export const RemoveFromCart = (payload) => ({ type: REMOVE_FROM_BASKET, payload });

export const  plusCartItem = (payload) => ({ type: INCREASE_QUANTITY, payload });

export const  minusCartItem = (payload) => {

    if(payload.count > 1){
       return  ({ type: DECREASE_QUANTITY, payload });
    } else {
      return  ({ type: REMOVE_FROM_BASKET, payload });
    }

}



