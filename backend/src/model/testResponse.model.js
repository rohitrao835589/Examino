import {model, Schema} from "mongoose"

const testResponseSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    test:{
        type:Schema.Types.ObjectId,
        ref:"Test"
    },
    ans:[String],
    submittedAt:{
        type : Date,
        default: Date.now
    }
})

const TestResponse = model("TestResponse" , testResponseSchema);

export default TestResponse;