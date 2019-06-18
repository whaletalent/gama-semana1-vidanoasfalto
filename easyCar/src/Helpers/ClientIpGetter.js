// const publicIp = require('public-ip');
 
// const userIp = (async () => {
//     const ip = await publicIp.v4()    
//     return ip
// })

// export default userIp()

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

const getIP = JSON.parse(Get('https://api.ipify.org/?format=json&callback=getIP'));
export default getIP.ip