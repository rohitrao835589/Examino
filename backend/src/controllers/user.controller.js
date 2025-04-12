import {matchUser , saveNewUser} from '../services/user.service.js'
async function handleUserGetRequest(req , res) {
    try{
        const email = req.body.email;
        const pass = req.body.password;
        const userId = await matchUser(email , pass);

        res.status(200).send(userId);
        
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
async function handleUserPostRequest(req , res) {
    try {
        const newUser = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        const userId = await saveNewUser(newUser);
        res.status(201).send(userId);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export {handleUserGetRequest , handleUserPostRequest}