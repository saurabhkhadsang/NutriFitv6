
var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});



var User = require('./user')



module.exports = function(passport){
    console.log("pass",process.env.PASSPORT_KET);
    let params = {
        secretOrKey:'saurabh',
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    passport.use(
        new JWTStrategy(params,function(jwt_payload,next){
            
            let username= jwt_payload.username
            console.log(username);
            User.findOne({username:username},function(err,user){
                if(err){
                    return next(err,false);
                }
                if(user){
                    next(null,username)
                }
                else{
                    next(null,false)
                }
            });

        })
    )

}