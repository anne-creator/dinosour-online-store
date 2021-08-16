import {Component} from 'react';
// 像我们对css那样，React已经自动加入了对css文件的引入对象化的支持，所以我们加入svg的时候，不会报错。
import logo from './assets/images/logo.svg';
import './App.css';
import Cat from './components/Cat';
import ShoppingCart from './components/ShoppingCart'
// import cats from './mockdata/cat.json'
import styles from './App.module.css'

interface Props{}
interface State {
  catGallery: any[]
}
// NOTE:为什么class App extends Component<State,Props> 因为这个泛型函数是Component里面自带的class模板，必须按顺序写。
class App extends Component<Props,State> {
  constructor(props:any){
    super(props);
    this.state = {
      catGallery:[],
    }
  }
  componentDidMount(){ 
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({catGallery:data}))
  } 
  

  render(){
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"/>
          <h1>The cat Gallery</h1>
        </div>
        <ShoppingCart catGallery={this.state.catGallery} />
        <div className={styles.robotList}>
          {
            this.state.catGallery.map(r => (<Cat id={r.id} catName = {r.name} email = {r.email} />))
          }
        </div>
      </div>
    );
  }
}

export default App;
