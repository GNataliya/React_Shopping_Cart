import style from './style.module.css';
import { Routes, Route } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../containers/Main';
import Goods from '../containers/Goods';
import Basket from '../containers/Cart';

function App() {


  return (
    <div className={style.app}>
      <Header />
      
        <Routes>
          <Route path='*' element={<Main />} />
          <Route exact path='/goods' element={<Goods />} />
          <Route exact path='/basket' element={<Basket />} />
        </Routes>

      <Footer className={style.footer}/>
    </div>
  );
}

export default App;
