const jwt = require("jsonwebtoken");
export default async function handler (request, response){
  try{
    const token = request.header("x-access-token");
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    const decoded = jwt.verify(token, "amithadadsss");
    if (decoded){
      response.status(200).send("Verified successfuly.");
    }else{
      response.status(401).send("Invalid token.");
    }
  } catch (err) {
    return res.status(401).send(err);
  }
  }