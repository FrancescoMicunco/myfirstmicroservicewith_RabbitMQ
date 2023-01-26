import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import feedbackRouter from "./apis/routes.js";
import { receiveMessage } from "./receive.js";

const server = express();
const port = 3003;

server.use(cors());
server.use(express.json());

server.use("/feedback", feedbackRouter);

const process =
    "mongodb+srv://Francescomicunco:8aP7DPMC2Bk9eU7X@cluster0.wlpz7.mongodb.net/algorabfeedback?retryWrites=true&w=majority";
mongoose.connect(process);
mongoose.connection.on("connected", () => {
    server.listen(port, () => {
        console.log("server connected on port ", port);
        console.table(listEndpoints(server));
        receiveMessage;
    });
});

mongoose.connection.on("error", () => {
    console.log("impossible connect DB");
});