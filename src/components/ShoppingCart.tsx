import React from 'react';
import styles from "./ShoppingCart.module.css";

interface Props {

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
            <div className={styles.cartContainer}>
                <button
                className={styles.button}
                onClick={() => {
                    this.setState({ isOpen: !this.state.isOpen});
                }}
                >
                Collect Your Cart
                </button>
                <div
                className={styles.cartDropDown}
                style={{
                    display: this.state.isOpen ? "block" : "none",
                }}
                >
                <ul>
                    <li>Gabby</li>
                    <li>Ervin Howell</li>
                </ul>
                </div>
            </div>
        );
    }
}
export default ShopingCart;