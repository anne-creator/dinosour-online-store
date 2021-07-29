import React from 'react';
// 像我们对css那样，React已经自动加入了对css文件的引入对象化的支持，所以我们加入svg的时候，不会报错。
import logo from './assets/images/logo.svg';
import './App.css';
import Cat from './components/Cat';
import ShoppingCart from './components/ShoppingCart'
import cats from './mockdata/cat.json'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1>The cat gallery</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {
          cats.map(r => (<Cat id={r.id} catName = {r.name} email = {r.email} />))
        }
      </div>
    </div>
  );
}

export default App;
