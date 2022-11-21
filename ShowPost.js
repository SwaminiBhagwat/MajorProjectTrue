// import React ,{useEffect} from 'react'
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';
// import Button from '@mui/material/Button';
//  import { Grid } from '@mui/material';
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// export default function () {
//     const[data,setData]=useState(null)
//   useEffect(()=>{

//     fetch("http://localhost:4000/showNewPost",
//     {
//         method:'GET'
//     }).then((response)=>response.json()).then((actualData)=>
//     {
//         console.log(actualData);
//         setData (actualData)
//     })
//     .catch((err)=>console.log(err))
// },[])
//     return (
//         <div>
//              <Grid container spacing={0.5}>
//                 <Grid item xs={0}  >
//                     <Grid container justifyContent="center" >

//                         {data && data.map((value) => (
//                             <Grid key={value.testName} item>
//                                 <Card sx={{ maxWidth: 900, flexDirection: "column", justifyContent: 'space-between' }}>
//                                     <CardContent>
//                                         <Typography variant="h5" component="div">
//                                             {value.testName}
//                                         </Typography>
//                                         <Typography variant="body2">
//                                            {value.testDescription}
//                                         </Typography>
//                                         <Typography variant="h6" component="div">
//                                              Price:{value.price}
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button size="small">Book Now</Button>
//                                     </CardActions>
//                                 </Card>
//                              </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Grid } from "@mui/material";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function () {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/showNewPost", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Grid container spacing={0.5}sx={{backgroundImage:`url('https://c.stocksy.com/a/kvS800/z9/2017836.jpg')`,
  
    height:'100%',
    overflow:'auto',
 
 }}>
        <Grid item xs={4} sx={{ marginLeft: "500px" }}>
          <Grid container justifyContent="center">
            {data &&
              data.map((value) => (
                <Grid key={value.testName} item>
                  <Card
                    sx={{
                      minWidth: "500px",
                      height:"350px",
                      margin: "50px",
                      padding: "10px",
                      flex: 8,
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor: "#FFEFD6",
                      color:"#393E46",
                    }}
                  >
                    <CardContent> 
                    <Typography  variant="h5" component="div">
                    <AccountCircleIcon/>   {value.Name} 
                      </Typography><hr/><br/>
                      <Typography variant="h5">{value.artForm}</Typography>
                      <Typography variant="h5" component="div">
                    {value.ArtDetails}
                      </Typography><br/>
                    </CardContent>
                    <CardActions><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
                     <IconButton >
                        <ThumbUpTwoToneIcon />
                        </IconButton>
                        <IconButton >
                      <ThumbDownTwoToneIcon/>
                      </IconButton>
 
                    
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
