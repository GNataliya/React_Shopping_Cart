import style from '../Main/style.module.css';
import { NavLink } from 'react-router-dom';

function Main() {
    return (

        <div className={style.main}>
            <h1 className={style.text}>Welcome to site. </h1>
            <h2 className={style.text} > Click 
                <NavLink to='/goods'> 
                   <span>here</span> 
                </NavLink> 
                for see the goods.
            </h2>
            
        </div>
        
    )
}


export default Main;