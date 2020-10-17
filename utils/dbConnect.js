import mongoose from 'mongoose';
import { seedCondition } from '../seed'
import { seedCategory } from '../seed'
import { seedCompany } from '../seed'
import { seedContact } from '../seed'

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    //Databse Seeds
    seedCategory();
    seedCompany();
    seedCondition();
    seedContact();


    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;