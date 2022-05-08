require('dotenv').config();
const mongoClient  =  require('momgodb').mongoClient;

const connectDB = async () => {
    try{
        await mongoClient.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,

        });
        console.log("Mongo db connection success")

    }
    catch(error){
        console.error("Mongo db connection Fail");
        process.exit(1);
    }
};
module.exports = connectDB;
