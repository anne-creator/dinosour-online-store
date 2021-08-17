import React,{useContext} from 'react';
import styles from './Cat.module.css';
// import {appContext } from '../index'
import {appContext,appSetStateContext} from "../AppState"

interface CatProps {
    id:number;
    name1:string; 
    email:string;
}

const Cat : React.FC<CatProps> = ({id,name1,email}) => {
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart =() => {
        if(setState){
            setState(state => {
                return {...state,
                    shoppingCart: {
                    items:[...state.shoppingCart.items, {id,name1}]
                }}
            })
        }
    }
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}?set=set4`} alt="random generate cat img" />
                <h2>{name1}</h2>
                <p>{email}</p>
                <p>author: {value.username}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
            )
}
export default Cat;