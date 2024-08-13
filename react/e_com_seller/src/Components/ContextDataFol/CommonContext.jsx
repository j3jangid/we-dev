import { useState } from "react";
import StartContext from "./StartContext";

const CommonContextProvider = (props) => {
    const [userAuth, setUserAuth] = useState([false, {}]);
    const [test, setTest] = useState("testing")
    return (
        <StartContext.Provider value={{ userAuth, setUserAuth }}>
            {props.children}
        </StartContext.Provider>
    );
}

export default CommonContextProvider;