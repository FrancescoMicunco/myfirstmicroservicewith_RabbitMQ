import express from "express";
import { createFeedback } from "./index.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/", createFeedback);

export default feedbackRouter;