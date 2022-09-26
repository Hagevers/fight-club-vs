const signUpTemplate = require('../src/Backend/SignupModel')
const bcrypt = require('bcrypt')

export default async function handler (request, response){
    try{
        const saltPass = await bcrypt.genSalt(10);
        const {NickName,Email,password} = request.body;
        const securePass = await bcrypt.hash(password, saltPass);
        // const token = jwt.sign(
        //     { user_id: user._id, Email },
        //     process.env.TOKEN_KEY,
        //     {
        //     expiresIn: "2h",
        //     }
        // );
        const user = await signUpTemplate.create({
            NickName,
            Email,
            password:securePass}
        );
        user.token = 'somthing';
        response.status(200).json(user);
        // console.log({NickName});
        // console.log({Email});
        // console.log(securePass);
    }catch(e){
        console.log(e);
        console.log('somthing went off');
    }
}