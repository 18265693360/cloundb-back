const jwt = require('jsonwebtoken');

function verifyToken (){
    //async await就有Promise  因为在回调函数中拿不到数据 所以要封装到Promise
    return new Promise((resolve, reject) =>{
        jwt.verify(token, 'dyyao', (err, data) =>{
            if (err){
                reject(err)
                return
            }
            resolve(data.data)
        })
    })
}

async function auth(req, res, next) {
    try {
        //请求头
        const {token} = req.headers || req.body || req.query;
        const userData = await verifyToken(token);
        req.user = userData;
        next()

    }catch (err) {
        next(err)
    }
}

module.exports = {
    auth,
};