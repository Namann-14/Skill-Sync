const { default: mongoose } = require("mongoose");


const tokenSchema = new mongoose.Schema({
userId:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:"User",
unique:true
},
token:{
type:String,
required:true
},
CreatedAt:{
type:Date,default:Date.now(),
},
expiresAt:{
type:Date,default:Date.now()+3600000
}});

const Token = mongoose.model("Token",tokenSchema);

module.exports = Token;