import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromCart, plusCartItem, minusCartItem } from '../../actions/basket';
import removeIcon from './trash.png';

function Card () {
    
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.basket);
   

    const handleRemoveClick = (id) => {
        dispatch(RemoveFromCart(id));
      };
        
    const handlePlusItem = (id) => {
        dispatch(plusCartItem(id));
    };
    
    const handleMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };


    const cardInBasket = items.map( item => 
        // console.log('id cart', item.id),
        <div className={style.itemBox} key={item.id} id={item.id} >

            <div className={style.image}> <img src={item.items.image} alt='img' className={style.pic}/> </div>                
            <div className={style.info}> <h5>{item.items.title}</h5> </div>
            <div className={style.price}> {item.items.price} $ </div>  

            <div className={style.buttonsBox}>
               <button type='button' onClick={() => handlePlusItem(item)} > + </button>
               <div className={style.count}> {item.count} </div>
               <button type='button' onClick={() => handleMinusItem(item)} > - </button>
            </div>

            <div className={style.summ}> {(item.itemSumm/100).toFixed(2)} $ </div>

            <button className={style.trash} type='button' onClick={() => handleRemoveClick(item)} > 
                <img className={style.trash_pic} src={removeIcon} alt='trash' />
            </button>
        </div>            
    );


    return(
       <div>
            <div> 
                {cardInBasket}
            </div>
        </div>
    )
}

export default Card;