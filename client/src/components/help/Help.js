import {  useNavigate } from "react-router-dom";

const Help = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="p-3 mb-2  ">

                <div className="container">

                    <div>
                        <h1 className="text-center m-3" >About Us</h1>

    
                        <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                            <div className="p-4">

                                <h5 className="fw-bold mb-3" >OTP expire problem</h5>

                                <p className="aboutjust">
                                    Try out : <a className="blulink" onClick={() => navigate("/resendotp")}>OTP Expire</a>
                                </p>
                            </div>
                        </div>


                        <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                            <div className="p-4">

                                <h5 className="fw-bold mb-3" >Verify OTP problem</h5>

                                <p className="aboutjust">
                                    Try out : <a className="blulink" onClick={() => navigate("/verifyotp")}>Verify</a>
                                </p>
                            </div>
                        </div>

                        <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                            <div className="p-4">

                                <h5 className="fw-bold mb-3" >Forget Password problem</h5>

                                <p className="aboutjust">
                                    Try out : <a className="blulink" onClick={() => navigate("/forgetpassword")}>Forget</a>
                                </p>
                            </div>
                        </div>

                        <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.778)' }}>

                            <div className="p-4">

                                <h5 className="fw-bold mb-3" >Reset Password problem</h5>

                                <p className="aboutjust">
                                    Try out : <a className="blulink" onClick={() => navigate("/resetpassword")}>Forget</a>
                                </p>
                            </div>
                        </div>


                    


                    </div>



                    {/* <!-- footer start --> */}
                    <div className="container">
                        <div className="text-center mt-5 ">
                            <div className="copyright">
                                &copy; Copyright <strong><span>Web Squad'5'</span></strong>. All Rights Reserved
                            </div>
                        </div>
                    </div>
                    {/* <!-- footer end --> */}


                </div>
            </div>
        </>

    );
}

export default Help;