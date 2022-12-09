exports.getCookie = (cname) =>{
    try{
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }catch{
        return "";
    }
}
exports.getUserParam = (getCookie,param) => {
    try{
    const nick = getCookie('token').split(' ')[1];
    const decode = JSON.parse(Buffer.from(nick.split('.')[1], 'base64'));
    switch (param){
        case 'NickName':
            return decode.NickName
        case 'Power':
            return decode.Power
        case '_id':
            return decode.user_id
        default:
            return decode.NickName
    }
    }catch{
        return ""
    }
}
