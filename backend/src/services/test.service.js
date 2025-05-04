import Test from "../model/test.model.js";
import User from "../model/user.model.js";

async function getTestById(id) {
    try {
        const test = await Test.findOne(
            { Testid: id },
            { createdAt: false, __v: false , responses:false}
        );

        if (!test) {
            throw new Error("Test not found");
        }
        return test;
    } catch (error) {
        throw error;
    }
}
async function saveTest(testData, userID) {
    try {

        const newTest = new Test({ ...testData, createdBy: userID });
        await newTest.save();

        const user = await User.findById(userID);
        if (!user) {
            throw new Error("User not found");
        }

        user.testCreated.push(newTest._id);
        await user.save();
    } catch (error) {
        throw error;
    }
}
async function getTestResponses(testId){
    try {
        const test = await Test.findOne(
            { Testid: testId },
            { responses:1 ,  _id: 0}
        );
        if(!test){
            throw new Error("Test not Found");
        }
        return test.responses;
    } catch (error) {
        throw error;
    }
}

export { getTestById, saveTest  , getTestResponses};
