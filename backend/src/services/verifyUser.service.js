import User from "../model/user.model.js"

async function verifyUser(userID){
    try {
        const user = await User.findById(userID);
        if(!user)return false;
        return true;
    } catch (error) {
        return false;
    }
}

export {verifyUser};