const jwt = require("jsonwebtoken");
export default function handler (request, res, next){
  try{
    const tokenHeader = request.header["authorization"];
    const token = tokenHeader && tokenHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_KEY, (err,user) => {
      if(err) return response.status(401).send('Not auth')
      request.user = user
      next()
    })
  } catch (err) {
    return res.status(401).send(err);
  }
}