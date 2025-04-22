import {matchUser , saveNewUser} from '../services/user.service.js'
import {createToken} from '../services/token.service.js';
import { configDotenv } from 'dotenv';
configDotenv();
//login
async function handleLoginRequest(req , res) {
    try{
        const email = req.body.email;
        const pass = req.body.password;

        const userId = await matchUser(email , pass);

        const token = createToken({id:userId});

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None',     
            secure: true,
            maxAge: 24 * 60 * 60 * 1000 
          });
        res.status(200).send(userId);
        
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
//register
async function handleRegisterRequest(req , res) {
    try {
        const newUser = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        const userId = await saveNewUser(newUser);


        const token = createToken({id:userId});
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None',     
            secure: true,
            maxAge: 24 * 60 * 60 * 1000 
        });
          
        res.status(201).send(userId);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export {handleLoginRequest , handleRegisterRequest}