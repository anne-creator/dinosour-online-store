import React,{useContext} from 'react';
import styles from './Cat.module.css';
// import {appContext } from '../index'
import {appContext,appSetStateContext} from "../AppState"
import {withAddToCart} from "./addToCart"

export interface CatProps {
    id:number;
    name1:string; 
    email:string;
    addToCart:(id,name1)=> void;
}

const CatSpecial : React.FC<CatProps> = ({id,name1,email,addToCart}) => {
    const value = useContext(appContext);
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}?set=set4`} alt="random generate cat img" />
                <h2>special Cat</h2>
                <p>{email}</p>
                <p>author: {value.username}</p>
                <button onClick={() => addToCart(id,name1)}>Add to Cart</button>
            </div>
            )
}
export default withAddToCart(CatSpecial);