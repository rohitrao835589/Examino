import {getTestById , saveTest} from '../services/test.service.js'

async function handleGetrequest(req , res){
    try{
        const id = req.params.id;
        const userId = req.userID;
        
        const data = await  getTestById(id , userId);
        res.send(data);
    }catch(error){
        res.status(404).json({ error: "test not found" });
    }
}


async function handlePostRequest(req , res){
    try {
        const questionData = req.body;
        const userId = req.userID;
        await  saveTest(questionData , userId);
        res.status(200).send("Test saved");
    } catch (error) {
        res.status(500).send("error");
    }
}

export {handleGetrequest , handlePostRequest};