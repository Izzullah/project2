import { Link } from "react-router-dom"
const Signup = () => {
    return (
        <div className="bg-[#F0F2F4] h-[780px] w-full grid justify-center">
            <div className="bg-white w-[480px] h-[576px] p-[24px] mt-[120px] shadow-xl">
                <div className="font-semibold font-plus text-[20px] text-[#0B0C0F] ">Sign up</div>
                <div className="flex gap-[30px] mt-4">
                    <div className="grid gap-5">
                     <span className="font-medium text-[14px] font-plus text-[#556377] ">First Name</span>
                     <input type="text" className="border-[1px] px-[14px] py-[10px] w-[200px] h-[48px] rounded-md border-[#E1E5EA]"/>
                    </div>  

                    <div className="grid gap-5">
                        <span  className="font-medium text-[14px] font-plus text-[#556377] ">Last Name</span>
                         <input type="text" className="border-[1px] px-[14px] py-[10px] w-[206px] h-[48px] rounded-md border-[#E1E5EA]"/>
                    </div>             
                </div>

                <div className="grid gap-3 mt-7">
                    <span  className="font-medium text-[14px] font-plus text-[#556377] ">Email</span>
                    <input type="text" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-2 mt-6">
                    <span className="text-[14px] text-[#556377] font-medium font-plus">Password</span>
                    <input type="text" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text" />  
                </div>

                <div className="flex gap-2 mt-[40px] ">
                    <button className="w-[20px] h-[20px] border-[0.83px] rounded-md border-[#C4CBD4] mt-1"></button>
                    <span className="text-[12px] text-[#84818A] font-plus">By clicking Create account, I agree that I have read and accepted the <br />Terms of Use and Privacy Policy.</span>
                </div>
                 <div className="mt-9">
                    <button className="text-[14px] font-plus font-medium text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px]  rounded-full">Create Account</button>
                </div>
                <Link to='/Login'>
                
                <div className="flex justify-center gap-1 mt-4">
                    <span className="text-[14px] font-plus text-[#404A59]">I have an account?</span>
                    <span className="text-[14px] font-plus font-semibold text-[#0B0C0F]">Sign In</span>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Signup