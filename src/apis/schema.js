import mongoose from "mongoose";
const { Schema, model } = mongoose;

const FeedBack = new Schema({
    idMesage: { type: String },
    value: { type: Number },
    date: { type: Date, default: Date.now },
}, { timestamp: true });

export default model("FeedBack", FeedBack);