import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1668" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  
}));


export default function RowAndColumnSpacing() {
  return (
    <div class="content">
      <Box sx={{ width: "100%" }}>
        <Grid sx={{backgroundColor:"blanchedAlmond"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          
          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"} }>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/literature.jfif')}
                  alt="123"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    LITERTURE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Indian literature refers to the literature produced on the
                    Indian subcontinent until 1947 and in the Republic of India
                    thereafter.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"}}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/architecture.jpg')}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ARCHITECTURE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Indian architecture is rooted in its history, culture
                    and religion. Among a number of architectural styles and
                    traditions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"}}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/sculpture.jpg')}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    SCULPTURE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Indian sculpture, the sculptural traditions, forms, and
                    styles of the civilizations of the Indian subcontinent and
                    South Asian arts.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"}}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/theatre.jpg')}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    THEATRE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Theatre of India is one of the most ancient forms of theatre
                    and it features a detailed textual, sculptural, and dramatic
                    effects{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>

          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"}}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/music.jfif')}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    POETRY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Indian poetry and Indian literature in general, has a long
                    history dating back to Vedic times. They were written in
                    various Indian languages{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} sm={4} >
            <Item sx={{backgroundColor:"#CDB699"}}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={require('E:/Major-Project/frontend/src/Components/Images/img6.jpg')}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ART AND CRAFT
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    India is known for its customs. As far as art and culture
                    are concerned, India features amongst the topmost rated
                    culturally rich countries in the world.{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
     
      </Box>
    </div>
  );
}
