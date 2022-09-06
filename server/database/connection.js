const mongoose = require('mongoose');

//connect to my MongoDB Atlas using mongoose
const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected!')
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}



module.exports = connectDB