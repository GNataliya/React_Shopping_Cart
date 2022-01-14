import style from './style.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as goodsActions from '../../actions/goods';
import { addToBasket } from '../../actions/basket';
import Loading from '../../components/Loading';

function Goods() {
    
    const dispatch = useDispatch();
    const products = useSelector(state =>  state.goods );
    
    useEffect (  () => {

        goodsActions.getGoods(dispatch);

    }, []);

    const loading = products.status !== 'ok';

    const handleAddItem = (item) => {
        dispatch(addToBasket(item))
    }
    
    const card = products.goods.map( item => 
        <div className={style.item} key={item.id} >
            <div className={style.goods_pic}> 
                <img src={item.image} alt='img' className={style.image} /> 
            </div>                
            <div className={style.info}> 
                <h5 >{item.title}</h5> 
                <span > {item.price} $ </span>  
            </div>
            <button type='button' className={style.btn} onClick={() => handleAddItem(item) } >add to cart</button>
        </div>            
    );
        

    
    return (
        <div className={style.content} >
            { loading ? (
                <div> 
                    <Loading /> 
                </div>
            ) : (
            <div className={style.itemContainer} > {card} </div>
            )} 
        </div>
    )
}

export default Goods;
