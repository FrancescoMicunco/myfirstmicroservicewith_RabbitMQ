import feedbackRouter from "./schema.js";

export const createFeedback = async(req, res, next) => {
    try {
        const feedback = new feedbackRouter(req.body);
        const { _id } = await feedback.save();

        res.send({ _id });
    } catch (error) {
        next(error);
    }
};