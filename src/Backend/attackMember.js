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

exports.buyItem = (item) => {
    const {getCookie, getUserParam} = require('../Backend/getNickName');
    const axios = require('axios');
    const uid = getUserParam(getCookie, '_id');
    axios({
        method: 'POST',
        headers:{ 'Content-Type': 'application/json', 'Authorization': getCookie('token')},
        url: `https://powerful-anchorage-21815.herokuapp.com/shopping`,
        data: JSON.stringify({id: uid, item}),
    }).then(res=> {
        if(res.status === 200){
            console.log(res.data);
            // return window.location.href = `/`
        }
    })
}