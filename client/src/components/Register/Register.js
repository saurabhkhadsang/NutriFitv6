import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup from "../../images/signup.png";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        username: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    function handleClick() {
        if (user.fName && user.lName && user.username && user.email && user.password) {
            const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
            if (user.email.match(mailformat)) {
                axios.post("/register", user)
                    .then(async (res) => {
                        // alert(res.data.message);
                        if (res.data.message === "Successully Registered, please login now") {
                            toast.success('Account Created', {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 1000
                            });
                            toast.warn('Please verify Accoutn ', {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 1000
                            });

                            // console.log(user.username)

                            // let options = {
                            //     method: 'POST',
                            //     url: 'http://localhost:9002/emailsend',
                            //     body: {
                            //         'username': user.username,
                            //         'email': user.email
                            //     }
                            // }

                            try {
                                axios.post("/emailsend", { username: user.username , email:user.email  })
                                    .then(res => { 
                                        console.log("thsi is ", res.message);
                                     })

                            } catch (e) {
                                toast.error("Otp fail");
                            }

                            navigate("/verifyotp");
                            // setTimeout(() => {
                                
                            // }, 3000)
                            // navigate("/login");
                        }
                    });
            } else {
                toast.warn('You have entered an invalid email address!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000
                });
                // alert("You have entered an invalid email address!");
            }
        }
        else {
            toast.warn('Invalid Input', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
            // alert("Invalid Input");
        }
    }



    return (
        <div className="p-3 mb-2  ">
            {/* <ToastContainer /> */}

            <div className="container">

                <div className="row  py-5 m-2 justify-content-md-center ">
                    <div className="col-sm-8">
                        <div className="row bxshdow rounded-3">
                            <div className="col-sm-6 p-5">
                                <img className="img-fluid" src={signup} alt="" />

                            </div>
                            <div className="col-sm-6  d-flex flex-column justify-content-center ">

                                <div className="justify-content-center align-items-center">
                                    <h2 className="fw-bold py-2 m-2 text-center">Sign Up</h2>
                                    {/* <form role="form"> */}
                                    <div className="form-group m-3">
                                        <input type="text" name="fName"
                                            className="form-control input-lg" placeholder="First Name " value={user.fName} onChange={handleChange} />
                                    </div>

                                    <div className="form-group m-3">
                                        <input type="text" name="lName"
                                            className="form-control input-lg" placeholder="Last Name " value={user.lName} onChange={handleChange} />
                                    </div>

                                    <div className="form-group m-3">
                                        <input type="text" name="username" id="username"
                                            className="form-control input-lg" placeholder="username" value={user.username} onChange={handleChange} />
                                    </div>

                                    <div className="form-group m-3">
                                        <input type="email" name="email"
                                            className="form-control input-lg" placeholder="email" value={user.email} onChange={handleChange} />
                                    </div>

                                    <div className="form-group m-3">
                                        <input type="password" name="password" id="password"
                                            className="form-control input-lg" placeholder="Password" value={user.password} onChange={handleChange} />
                                    </div>

                                    <div className="d-flex justify-content-center m-3">
                                        <button className="btn btn-primary rmdbut rounded-2 grnbtn shadow" onClick={handleClick}> SIGN UP </button>
                                    </div>

                                    <div className="text-center">
                                        <p>Already User ? <a className="blulink" onClick={() => navigate("/login")}>Sign In</a>  </p>
                                    </div>
                                    {/* </form> */}
                                </div>

                            </div>
                        </div>
                    </div>



                </div>



            </div>

        </div>
    );
}

export default Register;