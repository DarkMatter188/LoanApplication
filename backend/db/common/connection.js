const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/loanApp',()=>{

console.log("successfully connected to the databse...");
});

module.exports=mongoose;