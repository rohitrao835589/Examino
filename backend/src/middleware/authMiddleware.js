import { verifyToken } from "../services/token.service.js";
function authMiddleware(req, res, next) {
    const token = req.cookies.token; // ✅ access the 'token' cookie
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - No token' });
    }

    try {
        const decoded = verifyToken(token);
        req.userID = decoded; 
        console.log(userID);
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
}

export default authMiddleware;
