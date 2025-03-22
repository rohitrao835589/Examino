import mongoose, { Schema } from "mongoose";

const testSchema = new Schema({
    Testid:{
        type : String,
        required : [true , "id is required"],
        unique : [true , "Test alredy Exist"]
    },
    questions:{
        type : Array,
        required:[true , "Question Array is required for test"],
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Test = mongoose.model("test" , testSchema);

export default Test;