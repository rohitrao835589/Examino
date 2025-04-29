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

        if (test.createdBy.toString() !== userID.toString()) {
            throw new Error("Unauthorized access: You did not create this test");
        }

        return test;
    } catch (error) {
        throw new Error(error.message);
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
        throw new Error(error.message);
    }
}

export { getTestById, saveTest };
