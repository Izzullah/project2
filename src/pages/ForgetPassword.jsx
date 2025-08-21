import { Link } from "react-router-dom"
const ForgetPassword = () => {
    return (
        <div className="bg-[#F0F2F4] flex justify-center w-full h-[775px]">
            <div className="bg-white w-[480px] h-[364px] grid justify-center mt-[160px] shadow-md">
                <div className="font-plus font-semibold text-[20px] align-middle mt-5">Forgot password?</div>
                <div className="text-[#404A59] text-[14px] ">
                    No worries! Just enter your email and we'll send you a reset <br />password link.
                </div>

                <div className="grid gap-2 mt-3">
                    <span className="text-[#556377] text-[14px]">Email</span>
                    <input type="text" placeholder="Email needed"  className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text"/>
                </div>
                <div className="mt-9">
                    <button className="text-[14px] font-plus text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px]  rounded-full">Send Recovery Email</button>
                </div>

                <Link to='/Signup'>
                <div className="flex justify-center gap-1 mt-6">
                    <span className="text-[14px] text-[#404A59]">Don't have an account?</span>
                    <span className="text-[14px] text-[#0B0C0F] font-medium">Sign Up</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default ForgetPassword