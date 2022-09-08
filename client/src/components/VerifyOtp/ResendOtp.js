import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../images/login.png";
// import "./Login.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResendOtp = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        // otp: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    function handleClick() {
        if (user.username) {
            const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
            if (user.username.match(mailformat)) {

                try {

                    axios.post("/resendotpbyemail", { username: user.username, email: user.username })
                        .then(res => {

                            // console.log("post", res)

                            console.log("thsi is ", res.message);

                            if (res.data.message === "Email Not found") {
                                toast.error('Email Not found', {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 1000
                                });
                            }

                            if (res.data.message === "Otp Sent successfully") {
                                toast.success('Otp Sent successfully', {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 1000
                                });

                                setTimeout(() => {
                                    navigate("/verifyotp");
                                }, 2000)
                            }
                        })

                } catch (e) {
                    toast.error("Otp fail");
                }


                // setTimeout(() => {
                //     navigate("/verifyotp"); resendotpbyusername
                // }, 3000)

            } else {
                try {

                    axios.post("/resendotpbyusername", { username: user.username })
                        .then(res => {

                            console.log("post", res)

                            console.log("thsi is ", res.message);

                            if (res.data.message === "Username Not found") {
                                toast.error('Username Not found', {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 1000
                                });
                            }

                            if (res.data.message === "Otp Sent successfully") {
                                toast.success('Otp Sent successfully', {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 1000
                                });

                                navigate("/verifyotp");

                                // setTimeout(() => {
                                //     navigate("/verifyotp");
                                // }, 2000)
                            }
                        })

                } catch (e) {
                    toast.error("Otp fail");
                }

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

                        <div className="row">

                            <div className="row bxshdow rounded-3 py-5">
                                <div className="col-sm-12">


                                    {/* <div className="col-sm-6 p-5">
                                <img className="img-fluid" src={login} alt="" />
                            </div> */}


                                    <div className="col-sm-6 mx-auto d-flex flex-column justify-content-center ">

                                        <div className="justify-content-center align-items-center py-5">
                                            <h2 className="fw-bold py-2 m-2 text-center py-2">Resend OTP</h2>

                                            <div className="text-center" >
                                                <h6 className="fw-bold" >For OTP Check Your email</h6>
                                                <p  > Please check spam folder </p>
                                            </div>

                                            <form role="form">
                                                <div className="form-group m-3">
                                                    <input type="text" name="username" id="username"
                                                        className="form-control input-lg" placeholder="username" onChange={handleChange} value={user.username} />
                                                </div>

                                                {/* <div className="form-group m-3">
                                            <input type="otp" name="otp" id="otp"
                                                className="form-control input-lg" placeholder="OTP" onChange={handleChange} value={user.otp} />
                                        </div> */}

                                                <div className="d-flex justify-content-center m-3 py-3">
                                                    <button type="button" className="btn btn-primary rmdbut rounded-3 grnbtn shadow" onClick={handleClick}> Rensend OTP </button>
                                                </div>

                                                <div className="text-center">
                                                    <p> <a className="blulink" onClick={() => navigate("/verifyotp")}>Verify Otp</a></p>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                {/* <!-- footer start --> */}
                <div className="container">
                    <div className="text-center mt-5 ">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Web Squad'5'</span></strong>. All Rights Reserved | <a className="blulink" onClick={() => navigate("/help")}>Help</a>
                        </div>
                    </div>
                </div>
                {/* <!-- footer end --> */}

            </div>

        </div>
    );
}

export default ResendOtp;