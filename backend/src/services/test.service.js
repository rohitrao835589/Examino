import Test from "../model/test.model.js";
import User from "../model/user.model.js";

async function getTestById(id, userID) {
    try {
        const test = await Test.findOne(
            { Testid: id },
            { createdAt: false, __v: false }
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

export { getTestById, saveTest };
