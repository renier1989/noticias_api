/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) =>{

    const [categoria, setCategoria] = useState('general');
    const handleChangeCategoria = e=> {
        setCategoria(e.target.value);
    }

    useEffect(()=>{

    },[categoria]);

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider}

export default NoticiasContext