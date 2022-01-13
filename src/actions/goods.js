import axios from 'axios';
import { GOODS_LOAD_IN_PROGRESS, GOODS_LOAD_FAIL, ADD_GOODS } from './type';

const loadingGoods = () => {
    const action = { type: GOODS_LOAD_IN_PROGRESS, payload: 'Loading' };
    return action;
};

const addGoodsAction = async () => {

    const url = 'https://fakestoreapi.com/products';
    const result = await axios.get(url);
    // console.log('result in action', result.data)
    
    if(result.status !== 200){
        const action = { type: GOODS_LOAD_FAIL, payload: 'load Fail' };
        return action;
    }

    const action = { type: ADD_GOODS, payload: result.data };

    return action;
}

const getGoods = async (dispatch) => {
    dispatch( loadingGoods());
    dispatch(await addGoodsAction());
}

export { getGoods };

