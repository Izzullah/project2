const Newpassword = () =>{
    return(
        <div className="bg-[#F0F2F4] flex justify-center w-full h-[775px]">
            <div className="bg-white w-[480px] h-[430px] grid justify-center mt-[160px] shadow-md">
                <div className="font-semibold font-plus text-[#0B0C0F] text-[20px] mt-4">
                    New password
                </div>
                <div className="text-[14px] text-[#404A59] font-plus mt-4">
                    Please create a new password that you don't use on any other <br />site.
                </div>

                <div className="grid gap-2">
                    <span className="text-[14px] text-[#556377] font-medium font-plus">New Password</span>
                    <input type="text" placeholder="Enter your new password" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text" />
                    <div>
                        <span className="text-[#8896AA] text-[12px] font-plus">minimum 8 characters</span>   
                    </div>  
                </div>

                <div className="grid gap-2 mt-4">
                    <span className="text-[14px] text-[#556377] font-medium font-plus">Confirm Password</span>
                     <input type="text" placeholder="Enter your new password" className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA] cursor-text" />
                </div>

                 <div className="mt-9">
                    <button className="text-[14px] font-plus text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px]  rounded-full">Set Password</button>
                </div>
            </div>
        </div>
        
    )

}
export default Newpassword