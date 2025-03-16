import mongoose from 'mongoose'


async function connectDb(){
    const uri = process.env.DB_URI;
    console.log(uri);
    try {
        await mongoose.connect(uri);
        console.log("DB connected Sussefuly");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default connectDb;