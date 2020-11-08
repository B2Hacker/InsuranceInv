import mongoose from 'mongoose';

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

    connection.isConnected = db.connections[0].readyState;

    console.log(connection.isConnected);
}

async function dbDisconnect() {
    mongoose.connection.close();
}

export {
    dbConnect,
    dbDisconnect
}; 