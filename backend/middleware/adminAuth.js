import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        if (token_decode.email !== process.env.ADMIN_EMAIL || token_decode.password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: error.message });
    }
}

export default adminAuth