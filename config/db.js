import mongoose from "mongoose";

const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_LOCAL);
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Desconectando do MongoBD.");
});
mongoose.connection.on("connected", () => {
    console.log("Conectando do MongoBD.");
});
mongoose.connection.on("error", (error) => {
    console.log(`Erro no MongoDB:\n${error}`);
});

export default connectDatabase;