
import mongoose from "mongoose";
import { DB_NAME } from '../constants'

const connectToDB = async () => {
    try {
        const connectionInstantce = await mongoose.connect(
            `${process.env.MONGO_DB_URL}/${DB_NAME}`
        );
        console.log(
            `MongoDB Connected DB Host : ${connectionInstantce.connection.host}`
        );
    } catch (err) {
        console.log("db error", err);
    }
};
module.exports = connectToDB;

