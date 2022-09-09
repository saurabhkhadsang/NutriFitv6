const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const request = require('request');

// sk new
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var passport = require('passport');
const User = require('./user')
const Nutri = require('./nutrition')
const otp = require("./otp");
const nodemailer = require("nodemailer");
var sgTransport = require('nodemailer-sendgrid-transport');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// sknew
app.use(passport.initialize());
require('./passport')(passport)


let port = process.env.PORT;
if (port == null || port == "") {
    port = 9002;
}

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {

    console.log("DBeee connected");
});





// app.get("/", (req, res) => {
//     res.send("Home");
// });

// , passport.authenticate('jwt', { session: false })

app.get("/list", passport.authenticate('jwt', { session: false }), (req, res) => {

    // let options = {
    //     method: 'GET',
    //     url: 'http://localhost:9002/list',
    //     headers: {
    //         'authorization': bearerToken
    //     }

    // }

    User.find({ username: req.user }, (err, usernew) => {
        // console.log(usernew)
        res.send({ message: 'usernew[0]' });
    });

});


app.post("/login", (req, res) => {
    // const { username, password } = req.body;

    username = req.body.body.username;
    password = req.body.body.password;

    // console.log(req.body);

    User.findOne({ username: username }, async (err, user) => {
        if (user) {

            console.log(user.isVerified)

            if (!user.isVerified) {
                res.send({ message: "User is Not verified" });
            }

            var match = await bcrypt.compare(password, user.password);

            if (match) {

                let params = {
                    username: username,
                    // email:req.body.email
                }
                var tokenvalue = jwt.sign(params, 'saurabh', { expiresIn: '300000s' });
                user.tokens = user.tokens.concat({ token: tokenvalue })
                user.save();

                res.send({ message: "login Successfull", user: user, token: tokenvalue });
            } else {
                res.send({ message: "password didn't match" });
            }
        } else {
            res.send("User not registered");
        }
    });
});

var JWTStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

function passport(passport) {
    let params = {
        secretOrKey: 'saurabh',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    passport.use(
        new JWTStrategy(params, function (jwt_payload, next) {
            let emialid = jwt_payload.email

            Usernew.findOne({ email: emialid }, function (err, user) {
                if (err) {
                    return next(err, false);
                }
                if (user) {
                    next(null, user)
                }
                else {
                    next(null, false)
                }
            });

        })
    )

};




app.post("/register", (req, res) => {
    const { fName, lName, username, email, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        if (user) {
            res.send({ message: "User already Registerd" });
        } else {

            let params = {
                username: username,
                email: email
            }
            var tokenvalue = jwt.sign(params, 'saurabh', { expiresIn: '300000s' });
            let tokens = [];
            tokens = tokens.concat({ token: tokenvalue })
            // token end

            // hashing start/
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            // hashing en


            const user = new User({
                isVerified: false,
                fName,
                lName,
                username,
                email,
                password: hash,
                calories: 0,
                serving_size_g: 0,
                fat_total_g: 0,
                fat_saturated_g: 0,
                protein_g: 0,
                sodium_mg: 0,
                potassium_mg: 0,
                cholesterol_mg: 0,
                carbohydrates_total_g: 0,
                fiber_g: 0,
                sugar_g: 0,
                tokens,
                cart: []
            });
            user.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Successully Registered, please login now" });
                }
            });
        }
    })
});


app.post("/request", (req, res) => {
    var query = req.body.query;
    if (query === "") {
        res.send({ message: "Error! Blank Search" });
    }
    else {
        request.get({
            url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
            headers: {
                'X-Api-Key': 'wMwTo/lkOUWyRryGrar7GQ==6BYSFxmmdVweWKaz'
            },
        }, function (error, response, body) {
            if (error) return console.error('Request failed:', error);
            else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
            else {
                const result = JSON.parse(body);
                if (result.length === 0) {
                    res.send({ message: "Not found" });
                }
                else {
                    res.send({ result: result });
                }
            }
        });
    }
});


app.post("/insert", (req, res) => {
    const { content, username } = req.body;

    const nutri = new Nutri({
        name: content.name,
        calories: 0,
        serving_size_g: content.serving_size,
        fat_total_g: content.totalFat,
        fat_saturated_g: content.saturatedFat,
        protein_g: content.protein,
        sodium_mg: content.sodium,
        potassium_mg: content.potassium,
        cholesterol_mg: content.cholesterol,
        carbohydrates_total_g: content.carbohydrates,
        fiber_g: 0,
        sugar_g: content.sugar
    });

    User.findOne({ username: username },  function (err, foundUser) {
        if (err) {
            console.log("error in /insert");
        }
        else {

            if (foundUser) {
                foundUser.fat_total_g += content.totalFat;
                foundUser.fat_saturated_g += content.saturatedFat;
                foundUser.protein_g += content.protein;
                foundUser.sodium_mg += content.sodium;
                foundUser.potassium_mg += content.potassium;
                foundUser.cholesterol_mg += content.cholesterol;
                foundUser.carbohydrates_total_g += content.carbohydrates;
                foundUser.sugar_g += content.sugar;
                foundUser.cart.push(nutri);
                foundUser.save();
                res.send({ message: "Added" });
            }else{
                res.send({ message: "User not found" });
            }

        }
    });

});



app.post("/insert2", (req, res) => {

    // console.log(req);

    const { username } = req.body;

    var query = req.body.name;
    request.get({
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: {
            'X-Api-Key': 'wMwTo/lkOUWyRryGrar7GQ==6BYSFxmmdVweWKaz'
        },
    }, function (error, response, body) {
        if (error) return console.error('Request failed:', error);
        else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else {
            const content2 = JSON.parse(body);
            const content = content2[0];
            const nutri = new Nutri({
                name: content.name,
                calories: 0,
                serving_size_g: content.serving_size_g,
                fat_total_g: content.fat_total_g,
                fat_saturated_g: content.fat_total_g,
                protein_g: content.protein_g,
                sodium_mg: content.sodium_mg,
                potassium_mg: content.potassium_mg,
                cholesterol_mg: content.cholesterol_mg,
                carbohydrates_total_g: content.carbohydrates_total_g,
                fiber_g: 0,
                sugar_g: content.sugar_g
            });
            User.findOne({ username: username }, function (err, foundUser) {
                if (err) {
                    console.log("error in /insert2 findOne");
                }
                else {
                    foundUser.fat_total_g += content.fat_total_g;
                    foundUser.fat_saturated_g += content.fat_total_g;
                    foundUser.protein_g += content.protein_g;
                    foundUser.sodium_mg += content.sodium_mg;
                    foundUser.potassium_mg += content.potassium_mg;
                    foundUser.cholesterol_mg += content.cholesterol_mg;
                    foundUser.carbohydrates_total_g += content.carbohydrates_total_g;
                    foundUser.sugar_g += content.sugar_g
                    foundUser.cart.push(nutri);
                    foundUser.save();
                    res.send({ message: "Added" });
                }
            });
        }
    });

});


app.post("/account", (req, res) => {
    const username = req.body.username;
    User.findOne({ username: username }, function (err, foundUser) {
        if (err) {
            console.log("error in /account");
        }
        else {
            res.send({
                cart: foundUser.cart, name: foundUser.fName, surname: foundUser.lName, email: foundUser.email, userName: foundUser.username, fat_total: foundUser.fat_total_g, fat_saturated: foundUser.fat_saturated_g,
                protein: foundUser.protein_g, sodium: foundUser.sodium_mg, potassium: foundUser.potassium_mg, cholesterol: foundUser.cholesterol_mg, carbohydrates_total: foundUser.carbohydrates_total_g, fiber: foundUser.fiber_g, sugar: foundUser.sugar_g
            });
        }
    });
});


const mailer = (email, otp, username) => {

    let transporter = nodemailer.createTransport(sgTransport({
        auth: {
            api_key: process.env.MAILKEY
        }
    }))

    // const otpp = otp;
    console.log(email, otp, username)
    console.log("sent");
    var mailoptons = {
        // Yahsralsdkfj
        // saurabhkhadsang2018@gmail.com
        // yashrajpatil056@gmail.com
        // to: email,
        to: email,
        from: 'nutrifitotp@gmail.com',
        subject: 'NutriFit Register User ',
        html: ` <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">NutriFit</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing NutriFit. Use the following OTP to complete your Sign Up procedures. for username <h3>${username}</h3> . OTP is valid for 10 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
          <p style="font-size:0.9em;">Regards,<br />NutriFit</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>NutriFit Inc</p>
            <p>Nagpur</p>
            <p>India</p>
          </div>
        </div>
      </div>` ,
    }

    transporter.sendMail(mailoptons, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email send : ', info.message);
        }
    });

}


const mailerforget = (email, otp, username) => {

    let transporter = nodemailer.createTransport(sgTransport({
        auth: {
            api_key: process.env.MAILKEY
        }
    }))

    // const otpp = otp;
    console.log(email, otp, username)
    console.log("sent");
    var mailoptons = {
        to: email,
        from: 'nutrifitotp@gmail.com',
        subject: 'NutriFit Otp | Reset Password',
        html: ` <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">NutriFit</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing NutriFit. Use the following OTP to Reset your password. for username <h3>${username}</h3> . OTP is valid for 10 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
          <p style="font-size:0.9em;">Regards,<br />NutriFit</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>NutriFit Inc</p>
            <p>Nagpur</p>
            <p>India</p>
          </div>
        </div>
      </div>` ,
    }

    transporter.sendMail(mailoptons, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email send : ', info.message);
        }
    });

}



// email send 
app.post("/emailsend", (req, res) => {

    let otpcode = Math.floor(1000 + Math.random() * 9000);

    let optdata = new otp({
        username: req.body.username,
        email: req.body.email,
        code: otpcode,
        createdat: new Date().getTime(),
        expirein: (new Date().getTime() + 600 * 1000)
    })

    optdata.save(err => {
        if (err) {
            res.send(err);
        } else {
            mailer(req.body.email, otpcode, req.body.username)
            res.send({ message: "Otp Sent successfully" });
        }
    });
});




app.post("/resendotpbyemail", (req, res) => {

    User.findOne({ email: req.body.email, }, async (err, usernew) => {

        if (usernew) {
            let otpcode = Math.floor(1000 + Math.random() * 9000);

            let optdata = new otp({
                username: usernew.username,
                email: usernew.email,
                code: otpcode,
                createdat: new Date().getTime(),
                expirein: (new Date().getTime() + 600 * 1000)
            })

            optdata.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    mailer(usernew.email, otpcode, req.body.username)
                    res.send({ message: "Otp Sent successfully" });
                }
            });
        } else {
            res.send({ message: "Email Not found" });
        }
    });
});

app.post("/resendotpbyusername", (req, res) => {

    User.findOne({ username: req.body.username, }, async (err, usernew) => {

        if (usernew) {
            let otpcode = Math.floor(1000 + Math.random() * 9000);

            let optdata = new otp({
                username: usernew.username,
                email: usernew.email,
                code: otpcode,
                createdat: new Date().getTime(),
                expirein: (new Date().getTime() + 600 * 1000)
            })

            optdata.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    mailer(usernew.email, otpcode, req.body.username)
                    res.send({ message: "Otp Sent successfully" });
                }
            });
        } else {
            res.send({ message: "Username Not found" });
        }
    });
});


app.post("/forgetpassword", (req, res) => {

    User.findOne({ username: req.body.username, }, async (err, usernew) => {

        if (usernew) {
            let otpcode = Math.floor(1000 + Math.random() * 9000);

            let optdata = new otp({
                username: usernew.username,
                email: usernew.email,
                code: otpcode,
                createdat: new Date().getTime(),
                expirein: (new Date().getTime() + 600 * 1000)
            })

            optdata.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    mailerforget(usernew.email, otpcode, req.body.username)
                    res.send({ message: "Otp Sent successfully" });
                }
            });
        } else {
            res.send({ message: "Username Not found" });
        }
    });
});

app.post("/resetpassword", (req, res) => {
    otp.findOne({ username: req.body.username, code: req.body.otpcode }, async (err, usernew) => {
        if (usernew) {
            let diff = usernew.expirein - (new Date().getTime())

            if (diff < 0) {
                res.send({ message: "Otp Expired" });
            } else {
                User.findOne({ username: req.body.username }, async (err, usernew) => {
                    var salt = bcrypt.genSaltSync(10);
                    var hash = bcrypt.hashSync(req.body.password, salt);
                    usernew.password = hash;
                    usernew.save();
                    res.send({ message: "Password change sucessfuly" });
                });
            }

        } else {
            res.send({ message: "Username not exist" });
        }
    });
});




app.post("/otpverify", (req, res) => {


    otp.findOne({ username: req.body.username, code: req.body.otpcode }, async (err, usernew) => {
        if (usernew) {
            let diff = usernew.expirein - (new Date().getTime())

            if (diff < 0) {
                res.send({ message: "Otp Expired" });
            } else {
                User.findOne({ username: req.body.username }, async (err, usernew) => {
                    // console.log(usernew)
                    if (usernew) {
                        usernew.isVerified = true;
                        usernew.save();
                        res.send({ message: "User verified" });
                    }
                });
            }

        } else {
            res.send({ message: "Wrong Otp" });
        }
    });
});





// step 3: Heroku 


// step 3: Heroku 




if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}

app.listen(port, function () {
    console.log("Server has started Successfully on " + port);
});