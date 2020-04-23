const{
    serviceAddUser
} = require('../queries/user.query')

const {genSaltSync, hashSync, compareSync, compare} = require("bcryptjs");
const {sign} = require("jsonwebtoken")

module.exports = {
    addUser: (req, res)=>{
        let body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)

        const data_user = {
            email : body.email,
            password : body.password
        }

        serviceAddUser(data_user, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Not succes input new user"
                })
            }else{
                return res.status(200).json({
                    success:1, 
                    message: "Succes input new user"
                })
            }
        })
    }
}