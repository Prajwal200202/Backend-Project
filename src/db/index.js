import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectdb = async () => {
    try {
      const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);  
      console.log(`Connected to MongoDB: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("Mongo db Connection error: ", error);
        process.exit(1);
    }
}

export default connectdb