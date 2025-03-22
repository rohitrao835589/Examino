import {getTestById , saveTest} from '../services/test.service.js'

async function handleGetrequest(req , res){
    const id = req.params.id;
    const data = await  getTestById(id);
    res.send(data);
}
async function handlePostRequest(req , res){
    const id = req.params.id;
    // console.log(id , req.body);
    
    const data = await  saveTest(req.body);
    res.send(data);
}

export {handleGetrequest , handlePostRequest};