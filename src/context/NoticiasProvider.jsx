/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) =>{

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const handleChangeCategoria = e=> {
        setCategoria(e.target.value);
    }

    useEffect(()=>{
        const consultarAPI = async() =>{
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);

            setNoticias(data.articles);
        }
        consultarAPI()
    },[categoria]);

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider}

export default NoticiasContext