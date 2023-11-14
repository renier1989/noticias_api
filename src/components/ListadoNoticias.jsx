import { Grid, Pagination, Stack, Typography } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import { Noticia } from "./Noticia";

export const ListadoNoticias = () => {
  const {pagina, noticias, totalPaginas, handleChangePagina } = useNoticias();
  const totalPages = Math.ceil(totalPaginas / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Últimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};
