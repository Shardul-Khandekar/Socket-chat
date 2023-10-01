import mongoose from 'mongoose';

const mongoDBConnect = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('MongoDB Database connection successful');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default mongoDBConnect;