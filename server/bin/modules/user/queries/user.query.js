const db = require('../../../../config/connection')

module.exports = {
    serviceAddUser: (data, callBack)=>{
        db.query(
            'INSERT INTO user SET ?',
            data,
            (err, result, fields)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }
            }
        )
    }
}