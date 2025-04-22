import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = '1d';

function createToken(payload){
    return jwt.sign(payload, JWT_SECRET , { expiresIn: JWT_EXPIRY });
}
function verifyToken(token){
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
}
export  {createToken , verifyToken};