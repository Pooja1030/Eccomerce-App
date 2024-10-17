import jwt from 'jsonwebtoken'

const authUser = async (req,res,next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: 'Not Authorized, Login Again' });
  }
  const token = authHeader.split(' ')[1]; // Extract the token after 'Bearer'
  

    // if(!token){
    //   return res.json({success: false, message: 'Not Authorized Login Again'})
    // }

    try {
      const token_decode = jwt.verify(token, process.env.JWT_SECRET);
      
      // If the token is valid, attach user info and move on
      req.body.userId = token_decode.id;
      
      // Optional: You can refresh the token if it's about to expire
      const timeLeft = token_decode.exp - Date.now() / 1000; // time in seconds
    
      if (timeLeft < 3600) { // Less than 1 hour remaining
        const newToken = jwt.sign({ id: token_decode.id }, process.env.JWT_SECRET, { expiresIn: '500d' });
        res.setHeader('x-new-token', newToken); // Send new token in response header
      }
      
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.json({ success: false, message: 'Session expired, please login again' });
      }
      console.log(error);
      res.json({ success: false, message: 'Not authorized' });
    }
  }    

export default authUser