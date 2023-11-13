import { Grid, Typography } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import { Noticia } from "./Noticia";

export const ListadoNoticias = () => {
    const {noticias} = useNoticias();
  return <>
    <Typography 
    textAlign={'center'}
    marginY={5}
    variant="h3"
    component={'h2'}
    >
        Últimas Noticias
    </Typography>

    <Grid>
        {noticias.map(noticia => (
            <Noticia key={noticia.url} noticia={noticia}/>
        ))}
    </Grid>
  </>;
};
