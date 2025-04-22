import mongoose from 'mongoose'


async function connectDb(){
    const uri = process.env.DB_URI;
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default connectDb;