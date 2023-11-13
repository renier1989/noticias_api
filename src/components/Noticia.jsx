import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  console.log(title);

  if (title !== "[Removed]") {
    return (
      <Grid item md={6} lg={4}>
        <Card>
          {urlToImage && (
            <CardMedia
              component={"img"}
              alt={`Imagen de la noticia ${title}`}
              image={urlToImage}
              height={250}
            />
          )}

          <CardContent>
            <Typography variant="body1" color="error">
              {source?.name}
            </Typography>
            <Typography variant="h5" component={"div"}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions textAlign={"center"}>
            <Button
              href={url}
              target="_blank"
              variant="contained"
              width={"100%"}
              textAlign={"center"}
            >
              Leer Noticia
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
};
