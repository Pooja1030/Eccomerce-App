import jwt from "jsonwebtoken"

const authUser = async (req, res, next) => {
    
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id;
        next()
        

    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: "Token is invalid or expired." });
    }
}

export default authUser
