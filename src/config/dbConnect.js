import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:123@alura.5xqxp.mongodb.net");

let db = mongoose.connection;

export default db;