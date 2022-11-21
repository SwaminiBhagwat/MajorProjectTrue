const mongoose=require('mongoose')
const CardsSchema=mongoose.Schema({
    "Name":{
     type:String,
     require:true
    },
     "artForm":{
     type:String,
     require:true
    },
    "ArtDetails":{
     type:String,
     require:true
    }
    // "image":{
    // Data:Buffer,
    // contentType:String
    // }
 })
 module.exports=mongoose.model("Cards",CardsSchema)
 