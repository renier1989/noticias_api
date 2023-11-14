/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) =>{

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina , setPagina] = useState(1);
    const [totalPaginas ,setTotalPaginas] = useState(0);

    const handleChangeCategoria = e=> {
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e, val) =>{
        setPagina(val);
    }

    useEffect(()=>{
        const consultarAPI = async() =>{
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
            setPagina(1);
            setNoticias(data.articles);
            setTotalPaginas(data.totalResults)

        }
        consultarAPI()
    },[categoria]);

    useEffect(()=>{
        const consultarAPI = async() =>{
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const {data} = await axios(url);
            
            setNoticias(data.articles);
            setTotalPaginas(data.totalResults)

        }
        consultarAPI()
    },[pagina]);

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalPaginas,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider}

export default NoticiasContext