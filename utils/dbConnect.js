import mongoose from 'mongoose';
// import { seedCondition } from '../seed'
// import { seedCategory } from '../seed'
// import { seedCompany } from '../seed'
// import { seedContact } from '../seed'
// import { seedContract } from '../seed'
// import { seedLocation } from '../seed'
// import { seedRoom } from '../seed'
// import { seedSubCategory } from '../seed'

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb+srv://B2Original:xjACWmTGS4jYVnWV@defaultcluster.z4skv.mongodb.net/InsInvDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    //Databse Seeds
    // seedCategory();
    // seedCompany();
    // seedCondition();
    // seedContact();
    // seedContract();
    // seedLocation();
    // seedRoom();
    // seedSubCategory();


    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;