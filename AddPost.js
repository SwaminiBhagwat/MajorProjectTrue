import React, { useState } from "react";
import {
  CardContent,
  Grid,
  TextField,
  Typography,
  Card,
  Button,

} from "@mui/material";
import { letterSpacing } from "@mui/system";
export default function CardsForm() {
  const [Name, setName] = useState("");
  const [artForm, setArtForm] = useState("");
  const [ArtDetails, setDescription] = useState("");

  const getTestDetails = async (event) => {
    event.preventDefault();
    console.log("in Methode");
    const result = await fetch("http://localhost:4000/createNewPost", {
      method: "POST",
      body: JSON.stringify({ Name, artForm, ArtDetails }),
      headers: { "Content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <Card
        className="Card"
        sx={{
          backgroundImage: `url('https://c.stocksy.com/a/kvS800/z9/2017836.jpg')`,
          height: "100%",
          overflow: "auto",
          color:"#393E46",
          textAlign:"center",
          
          
         
        
        }}
        // style={{opacity: 0.2}} 

      >
        <CardContent><br/><br/><br/><br/>
          <Typography gutterBottom variant="h3">
           <b> ADD NEW POST</b>
          </Typography>
          <form
            onSubmit={(e) => {
              getTestDetails(e);
            }}
          ><br/><br/>
            <Grid container spacing={1} >
              <Grid sm={12} item  >
                <TextField
                  sx={{ backgroundColor: "#FFEFD6",
                  color:"#393E46", width:"700px"}}
                  label="  Name"
                  placeholder="Enter  Name Here"
                  variant="outlined"
                  required
                  onChange={(e) => setName(e.target.value)}
                  //  fullWidth
                />
              </Grid><br/><br/><br/><br/><br/>
              <Grid sm={12} item>
                <TextField
                 sx={{ backgroundColor: "#FFEFD6",
                 color:"#393E46",width:"700px"}}
                  label=" ArtForm"
                  placeholder="Enter  Art Form Here"
                  variant="outlined"
                  required
                  onChange={(e) => setArtForm(e.target.value)}
                  // fullWidth
                />
              </Grid><br/><br/><br/><br/><br/>
              <Grid sm={12} item>
                <TextField
                 sx={{ backgroundColor: "#FFEFD6",
                 color:"#393E46",width:"700px"}}
                  label="  ArtDetails"
                  placeholder="Enter  Art Details Here"
                  variant="outlined"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  // fullWidth
                />
              </Grid><br/><br/><br/><br/>
              <Grid sm={12} item>
                <Button sx={{width:"700px"}}
                  type="submit"
                  varient="contained,outlined"
                  color="success"
                  // fullWidth
                ><h2>
                  Submit</h2>
                </Button><br/><br/><br/><br/>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
