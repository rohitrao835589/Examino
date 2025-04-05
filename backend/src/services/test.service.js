import Test from "../model/test.model.js";

async function getTestById(id){

    const data = await Test.findOne({Testid:id} , {_id:false , createdAt:false , __v: false});
    return data;
}

async function saveTest(testData) {
    try {
        const data = new Test(testData);
        data.save();
    } catch (error) {
        throw new Error(error.message);
    }
}

export {getTestById , saveTest};