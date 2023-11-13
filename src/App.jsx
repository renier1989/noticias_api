import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";
import { ListadoNoticias } from "./components/ListadoNoticias";

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" component="h1" variant="h3" marginY={5}>
            Buscardor de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias/>
      </Container>
    </NoticiasProvider>
  );
}

export default App;
