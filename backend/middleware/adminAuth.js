import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Please log in again."
            });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (
            token_decode.email.trim() !== process.env.ADMIN_EMAIL.trim() ||
            token_decode.password.trim() !== process.env.ADMIN_PASSWORD.trim()
        ) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Please log in again."
            });
        }

        next();

    } catch (error) {
        console.log(error);

        return res.status(401).json({
            success: false,
            message: error.message
        });
    }
}

export default adminAuth
