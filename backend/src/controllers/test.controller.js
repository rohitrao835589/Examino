import {getTestById , saveTest} from '../services/test.service.js'

async function handleGetrequest(req , res){
    const id = req.params.id;
    const data = await  getTestById(id);
    console.log(id);
    
    res.send(data);
}
async function handlePostRequest(req , res){
    try {
        const questionData = req.body;
        await  saveTest(questionData);
        res.send("success");
    } catch (error) {
        console.log(error.message);
        res.send("error");
    }
}

export {handleGetrequest , handlePostRequest};