import TestResponse from "../model/testResponse.model.js";
import Test from "../model/test.model.js";
async function saveTestResponse(userID , testID , ans){
    try {
        const test = await Test.findOne({Testid:testID});
        if (!test) {
            throw new Error("Test not found");
        }

        const newTestResponse = new TestResponse({
            user:userID,
            test:test._id,
            ans:ans
        });

        await newTestResponse.save();

        test.responses.push(newTestResponse._id);
        await test.save();
    } catch (error) {
        throw error;
    }

}

export {saveTestResponse};