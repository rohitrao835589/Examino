import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema({
    id: String,
    text: String
}, { _id: false }); 

const questionsSchema = new Schema({
    id: {
        type: String,
        required: [true, "Question must have an id"]
    },
    title: {
        type: String,
        required: [true, "Question must have a title"]
    },
    optionType: {
        type: String,
        enum: ["choice", "textBox"],
        required: true
    },
    options: {
        type: [optionSchema],
        default: [] 
    }
}, { _id: false }); 

const testSchema = new Schema({
    Testid: {
        type: String,
        required: [true, "Testid is required"],
        unique: true 
    },
    questions: {
        type: [questionsSchema],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Test = mongoose.model("Test", testSchema);

export default Test;

