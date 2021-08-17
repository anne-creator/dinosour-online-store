import React from 'react';
import styles from "./ShoppingCart.module.css";
import {FiShoppingCart} from 'react-icons/fi'
import {appContext} from  "../AppState"
interface Props {
    catGallery: any[]
}
interface state {
    isOpen:boolean;
}

class ShopingCart extends React.Component<Props,state> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    render() {
        return (
            <appContext.Consumer>
                {(value)=> {
                    return(
                    <div className={styles.cartContainer}>
                    <button
                    className={styles.button}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen});
                    }}
                    >
                        <FiShoppingCart className={styles.cartIcon}/>
                        <span> Cart has {value.shoppingCart.items.length}</span>
                    </button>
                    <div
                    className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none",
                    }}
                    >
                    <ul>
                        {value.shoppingCart.items.map((i) => (
                            <li>{i.name1}</li>
                        ))}
                        
                    </ul>
                    </div>
                </div>)
                }}
            </appContext.Consumer>
        );
    }
}
export default ShopingCart;
