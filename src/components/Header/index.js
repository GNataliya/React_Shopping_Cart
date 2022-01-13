import style from './style.module.css';
import { NavLink } from 'react-router-dom'; 
import card from './shopping_bag.png';
// import pic from './logo.png';
import { useSelector } from 'react-redux';

function Header() {

    const { items } = useSelector(state => state.basket); 

    const totalCount = items.reduce( (acc, item) => {
        return  acc += item.count
      }, 0)


    return (

        <div className={style.container}>

            <div className={style.img}>
                <NavLink to='/Main' >Logo</NavLink>
                {/* <img src={pic} alt='logopic' className={style.img} /> */}
            </div>

            <ul className={style.headernav}>
                <li className={style.li}>
                    <NavLink to='/Login' >Login</NavLink>
                </li>
                <li className={style.li}>
                    <NavLink to='/Signin' >Sign In</NavLink>
                </li>
                <li>
                    <NavLink to='/Basket' > 
                        <img src={card} alt='card' className={style.card} />
                        <div className={style.itemCount}>
                            <div className={style.totalCount}>{totalCount}</div>
                        </div>
                    </NavLink>
                </li>
            </ul>
            
        </div>
        
    )
}

export default Header;