import full from "../assets/image/full.png"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div>
            <div className="bg-[#F0F2F4] w-full h-[780px] grid justify-center">

                <div className="bg-white w-[490px] h-[460px] grid justify-center mt-[120px] shadow-md">
                    <Link to='/'>
                        <div className="flex justify-center mt-5">
                            <img className="w-fit" src={full} alt="" srcset="" />
                        </div>
                    </Link>
                    <div className="font-plus font-semibold text-[20px] mt-2">Sign up</div>
                    <div className="grid gap-3 mt-5">
                        <span className="font-plus font-medium text-[14px] text-[#556377] ">Email</span>
                        <input type="text" placeholder="Enter your email" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text" />
                    </div>

                    <div className="grid gap-3 mt-6">
                        <span className="font-plus font-medium text-[14px] text-[#556377] ">Password</span>
                        <input type="text" placeholder="Enter your password" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text" />
                    </div>
                    <Link to='/Forget-password'><div className="flex justify-end mt-3">Forgot password?</div></Link>
                    <div>
                        <button className="text-[14px] font-plus text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px]  rounded-full">Sign In</button>
                    </div>
                    <Link to='/Signup'>
                        <div className="flex justify-center gap-1 mt-6">
                            <span className="text-[14px] text-[#404A59]">Don't have an account?</span>
                            <span className="text-[14px] text-[#0B0C0F] font-medium">Sign Up</span>
                        </div>
                    </Link>
                </div>
                <div className="grid justify-center text-center ">
                    <div>
                        <div><span className="text-[12px] font-plus text-[#84818A]">Protected by reCAPTCHA and subject to the Circle</span></div>
                    <div> 
                        <span className="text-[12px] font-plus text-black"> Privacy Policy</span> <span className="text-[12px] font-plus text-[#84818A]">and</span>
                        <span className="text-[12px] font-plus text-black ml-1">Terms of Service.</span>
                    </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
export default Login 