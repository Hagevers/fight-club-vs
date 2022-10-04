const jwt = require('jsonwebtoken');

const verifyJwt = (req,res,next) => {
    console.log('entered middle');
    let name = 'token=';
    const header = req.headers['cookie'];
    const token = header && header.split('=')[1];
    // let ca = header.split(';');
    // for(let i = 0; i <ca.length; i++) {
    //   let c = ca[i];
    //   while (c.charAt(0) == ' ') {
    //     c = c.substring(1);
    //   }
    //   if (c.indexOf(name) == 0) {
    //     c = c.substring(name.length, c.length);
    //   }
    // }
    // const token = c;
    if (!token) return res.status(401).send({msg: "Login first please!"})
    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
      if(err) return res.status(403).send({msg:"Not authoraized"})
      next();
    });
}

module.exports = verifyJwt