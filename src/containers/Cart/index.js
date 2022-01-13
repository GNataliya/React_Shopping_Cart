import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';


function Cart () {

    const { items } = useSelector(state => state.basket); 

    const totalAmount = items.reduce( (acc, item) => {
        return  acc += item.itemSumm
      }, 0)


    return(
       <div className={style.cart}> 
           <div>
                <h3> Order: </h3>
                <Card />
                <div className={style.amount}> Total amount: {(totalAmount/100).toFixed(2)} $ </div>
                <div className={style.btn}>
                <NavLink to='/goods'>
                    <button className={style.btnReturn}><span>Return to shopping</span></button>
                </NavLink>
                </div>
           </div>
       </div>
    )
}

export default Cart;