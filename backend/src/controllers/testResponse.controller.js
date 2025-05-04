import {saveTestResponse} from "../services/testResponse.service.js"
async function handleTestResponsePost(req , res){
    try {
        const testId = req.params.id;
        const userId = req.userID;
        const ans = req.body;
        await saveTestResponse(userId , testId , ans);
        res.status(200).send("Response saved");
    } catch (error) {
        res.status(500).send("error");
    }
}
export {handleTestResponsePost};