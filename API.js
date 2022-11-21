const express = require("express");
const cors=require('cors')
const mongoose = require ("mongoose")
require("../dbconfig/dbconnect"); //establishes connection with db
const CardModel = require("../model/CardModel"); //establishes connection with productSchema
const { default: ArtistRegister } = require("../../frontend/src/Components/Artist/ArtistRegister");
// const { default: ArtistRegistration } = require("../../frontend/src/Components/Artist/ArtistRegistration");
const ex = express();

ex.use(express.json());
ex.use(cors())

// // Insert new product
// ex.post("/insertProduct", async (req, res) => {
//   const product = new ProductModel(req.body);
//   const result = await product.save();
//   res.send(result);
// });


// //

 ex.post("/createNewPost", async (req, res) => {
   const product = new CardModel(req.body);
   const result = await product.save();
   res.send(result);
 });



 ex.get("/showNewPost" ,async (req,resp)=>{
   const result=await CardModel.find().sort({_id:-1})
    //console.log(result); to get the result in terminal ie he console
   resp.send(result)
   // to get the result in browser ie  http://localhost:4000/getProduc
 })

 
///-----register------//////
// const RegisterModel=require('../model/RegisterModel')
// ex.post('/register',async(req,resp)=>{    
//     const Register=new RegisterModel(req.body);
//     const result=await Register.save();
//     resp.send(result)
//     console.log(result);
// })
// ex.get('/signIn',async(req,resp)=>{
//     const result=await RegisterModel.find()
//     console.log(result);
//     resp.send(result)
// })

// ex.get("/signIn", (req, res) => {
//     RegisterModel.find((err, foundEmployees) => {
//         if (!err) {
//             res.send(foundEmployees)
//         } else {
//             res.send(err);
//         }
//     })
// })

// const multer=require('multer')
// const CardsModel=require('../model/CardModel')
// const Storage=multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname);
//     },
// });
// const upload= multer({
//     storage:Storage
// }).single('testImage')
// ex.post('/insertCards',async(req,resp)=>{
//     upload(req,resp,(err)=>{
//         if(err){console.log(err);}
    
//     else{
//         const newImage=new CardsModel({
//             testName:req.body.testName,
//             testDescription:req.body.testDescription,
//             price:req.body.price,
//             image:{
//                 data:req.file.filename,
//                 contentType:'image/png'
//             }
//         })
//         newImage.save()
//         .then(()=>resp.send("Successfully uploaded"))
//         .catch(err=>console.log(err))
//     }}
//     )

// })


//registration artist

// //pehle ka code
ex.post("/insertArtistReg", (req, res) => {
  const { name, email, gender, password ,phoneNo,artForm} = req.body
  ArtistRegistration.findOne({ email: email }, (err, artist) => {
      if (artist) {
          res.send({ message: "artist already registered" })
      }
      else {
          const artist = new ArtistRegister({
              name: name,
              email: email,
              gender: gender,
              password: password,
              phoneNo:phoneNo,
              artForm:artForm
          })
          artist.save(err => {
              if (err) {
                  res.send(err)
              }
              else {
                  res.send({ message: "Artist Registered" })
              }
          })
      }
  })

}
)






ex.listen(4000);
