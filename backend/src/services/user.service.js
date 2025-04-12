import User from '../model/user.model';

async function saveNewUser(newUserData) {
    try {
        const userToSave = new User(newUserData);
        const savedUser = await userToSave.save(); 
        return savedUser; 
    } catch (error) {
        throw new Error(`Error saving user: ${error.message}`); 
    }
}

async function matchUser(email, passWord) {
    try {
        const currUser = await User.findOne({ email: email });
        
        if (!currUser) {
            throw new Error("No user found with the provided email.");
        }

        const isMatch = await currUser.comparePassword(passWord);
        if (!isMatch) {
            throw new Error("Incorrect password.");
        }

        return currUser._id;  
    } catch (error) {
        throw new Error(`Error during user matching: ${error.message}`); 
    }
}

export { saveNewUser, matchUser };
