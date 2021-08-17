import React, {useState,useEffect} from 'react';
// 像我们对css那样，React已经自动加入了对css文件的引入对象化的支持，所以我们加入svg的时候，不会报错。
import logo from './assets/images/logo.svg';
import './App.css';
import Cat from './components/Cat';
import ShoppingCart from './components/ShoppingCart'
// import cats from './mockdata/cat.json'
import styles from './App.module.css'
import CatSpecial from './components/CatSpecial';

interface Props{}
interface State {
  catGallery: any[]
}
const App:React.FC = () => {

    const [count,setCount] = useState<number>(0);
    // NOTE: 网络数据，所以类型为any
    const [robotGallery, setRobotGallery] = useState<any>([]);
    // loading 状态
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>();

    useEffect(() => {
      document.title = `clicked ${count} times`
    },[count])

    // NOTE:获取API数据,[]模拟componentDidMount 只在函数加载的时候载入一次。
    // NOTE:如果不加入【】，会死循环，无限发送API
     useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
          console.log(`loading`);
          const res = await fetch("https://jsonplaceholder.typicode.com/users")
          const data = await res.json()
          setRobotGallery(data)
        } catch(e){
          setError(e)
        }
      // .then(response => {response.json()
      // .then(data => setRobotGallery(data))})
      setLoading(false)
      }
      fetchData();
    },[])
    
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"/>
          <h1>The cat Gallery</h1>
        </div>
        <button className={styles.button} onClick={() => {setCount(count + 1)}}>Click</button>
        <span className={styles.clickNumber}>{count}</span>
        <ShoppingCart catGallery={robotGallery} />
        {!error || error!=="" && <div>Something wrong</div>}
        {!loading ?
          <div className={styles.robotList}>
            {
              robotGallery.map((r,index) => (
                index % 2 == 0 ?(
                <CatSpecial id={r.id} name1 = {r.name} email = {r.email} />)
                :(
                <Cat id={r.id} name1 = {r.name} email = {r.email} />
                )
              ))
            }
          </div>
        :(<span>pic is loading</span>)
        }
      </div>
    );
  }


export default App;
