import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { CatProps } from "./Cat";

export const withAddToCart = (ChildComponent: React.ComponentType<CatProps>) => {
    // return class extends React.Component {}
    return (props) => { 
        const setState = useContext(appSetStateContext)
        const addToCart = (id, name1) => {
            if (setState) {
            // 思考: 同学们可以想一想如何化简这里的代码
            setState((state) => {
                return {
                ...state,
                shoppingCart: {
                    items: [...state.shoppingCart.items, { id, name1 }],
                },
                };
            });
            }
        }
        return <ChildComponent {...props} addToCart={addToCart} />
    };
}