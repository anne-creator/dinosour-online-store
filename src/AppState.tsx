import React, { useState }from 'react';
// NOTE: Context

interface AppStateValue {
    username:string;
    shoppingCart: {items: {id: number, name1: string}[]}

}
const defaultContextValue:AppStateValue = {
  username: 'Alex',
  shoppingCart: {items:[]}
}
export const appContext = React.createContext(defaultContextValue)
// 因为appSetStateContext的初始化是一个函数，所以这个的defualtvalue用undefiend

export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);
// HOC 把所欲子组件包裹起来，全局角度提供数据支持
// return一个包裹child组件的provider
export const AppStateProvider: React.FC = (props) => {
    // state包括了很多全局数据：username,shoppingCart
    const [state,setState] = useState(defaultContextValue)
    console.log(state)
    return (
        <appContext.Provider value={state}>
            {/* 报错，因为 appSetStateContext的时候传入的是undefined，需要传入setState的类型，去setState鼠标那里看一下*/}
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}
