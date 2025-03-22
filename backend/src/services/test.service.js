import Test from "../model/test.model.js";

async function getTestById(id){

    const data = await Test.findOne({id:id});
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