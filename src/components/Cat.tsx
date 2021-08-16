import React,{useContext} from 'react';
import styles from './Cat.module.css';
import {appContext } from '../index'

interface CatProps {
    id:number;
    catName:string;
    email:string;
}

const Cat : React.FC<CatProps> = ({id,catName,email}) => {
    const value = useContext(appContext);
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}?set=set4`} alt="random generate cat img" />
                <h2>{catName}</h2>
                <p>{email}</p>
                <p>author: {value.username}</p>
            </div>
            )
}
export default Cat;