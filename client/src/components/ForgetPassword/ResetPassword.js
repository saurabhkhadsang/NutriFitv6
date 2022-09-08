import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPassword = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        otp: "",
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

        try {
            axios.post("/resetpassword", { username: user.username, otpcode: user.otp, password: user.password })
                .then(res => {

                    // console.log("post", res)

                    // console.log("thsi is ", res.message);

                    if (res.data.message === "Username Not found") {
                        toast.error('Username Not found', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000
                        });
                    }

                    if (res.data.message === "Password change sucessfuly") {
                        toast.success('Password change sucessfuly', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000
                        });

                        navigate("/login");

                        // setTimeout(() => {
                        //     navigate("/resetpassword");Otp Expired
                        // }, 2000)
                    }

                    if (res.data.message === "Otp Expired") {
                        toast.error('Otp Expired', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000
                        });
                        navigate("/forgetpassword");
                    }



                })

        } catch (e) {
            toast.error("Reset Fail");
        }

    }

    return (
        <div className="p-3 mb-2  ">
            <ToastContainer />

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
                                            <h2 className="fw-bold py-2 m-2 text-center py-2">Reset Password</h2>

                                            {/* <div className="text-center" >
                                        <h6 className="fw-bold" >For OTP Check Your email</h6>
                                        <p  > Please check spam folder </p>
                                    </div> */}

                                            <form role="form" autocomplete="off">
                                                <div className="form-group m-3">
                                                    <input type="text" name="username" id="username" autocomplete="off"
                                                        className="form-control input-lg" placeholder="username" onChange={handleChange} value={user.username} />
                                                </div>

                                                <div className="form-group m-3">
                                                    <input type="otp" name="otp" id="otp"
                                                        className="form-control input-lg" placeholder="OTP" onChange={handleChange} value={user.otp} />
                                                </div>

                                                <div className="form-group m-3">
                                                    <input type="password" name="password" id="password"
                                                        className="form-control input-lg" placeholder="New Password" onChange={handleChange} value={user.password} />
                                                </div>

                                                <div className="d-flex justify-content-center m-3 py-3">
                                                    <button type="button" className="btn btn-primary rmdbut rounded-3 grnbtn shadow" onClick={handleClick}> Verify </button>
                                                </div>

                                                {/* <div className="text-center">
                                            <p>OTP Expired ? <a className="blulink" onClick={() => navigate("/resendotp")}>Resend OTP</a></p>
                                        </div> */}
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

export default ResetPassword;