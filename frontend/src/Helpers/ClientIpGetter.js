const publicIp = require('public-ip');
 
const userIp = (async () => {
    const ip = await publicIp.v4()    
    return ip
})

export default userIp()
