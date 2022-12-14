exports.attackMember = (member) =>{
    const {getCookie, getUserParam} = require('../Backend/getNickName');
    const axios = require('axios');
    const attackerId = getUserParam(getCookie, '_id');

    axios({
        method: 'POST',
        headers:{ 'Content-Type': 'application/json', 'Authorization': getCookie('token')},
        url: `https://powerful-anchorage-21815.herokuapp.com/attack/${member}`,
        data: JSON.stringify({attacker: attackerId}),
    }).then(res=> {
        if(res.status === 200){
            console.log(res);
            return window.location.href = `/report/${res.data._id}`
        }
    })

    
}