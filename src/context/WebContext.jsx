import { createContext } from "react";

export const WebContext = createContext(null);

const WebContextProvider = (props) => {


    const logo = "Tech.ai";
    const contextValue = {
        logo
    }

    return (
        <WebContext.Provider value={contextValue}>
            {props.children}
        </WebContext.Provider>
    )
}

export default WebContextProvider;