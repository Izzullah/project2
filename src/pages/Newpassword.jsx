import { useState } from "react"
import { useNavigate } from "react-router-dom"
import icon from "../assets/image/icon.png"

const Newpassword = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  // state for toggling show/hide
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="bg-[#F0F2F4] flex justify-center w-full h-[775px]">
      <div className="bg-white w-[480px] h-[430px] grid justify-center mt-[160px] shadow-md p-6">
        <div className="font-semibold font-plus text-[#0B0C0F] text-[20px] mt-2">
          New password
        </div>

        <div className="text-[14px] text-[#404A59] font-plus mt-4">
          Please create a new password that you don't use on any other <br />
          site.
        </div>

        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="grid gap-2 mt-4 relative">
            <span className="text-[14px] text-[#556377] font-medium font-plus">
              New Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[40px] rounded-md border-[#E1E5EA] cursor-text"
              required
            />
            {/* toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[42px]"
            >
              <img src={icon} alt="toggle password" className="w-5 h-5" />
            </button>
            <span className="text-[#8896AA] text-[12px] font-plus">
              minimum 8 characters
            </span>
          </div>

          {/* Confirm Password */}
          <div className="grid gap-2 mt-6 relative">
            <span className="text-[14px] text-[#556377] font-medium font-plus">
              Confirm Password
            </span>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your new password"
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[40px] rounded-md border-[#E1E5EA] cursor-text"
              required
            />
            {/* toggle button */}
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-[42px]"
            >
              <img src={icon} alt="toggle confirm" className="w-5 h-5" />
            </button>
          </div>

          {/* Submit */}
          <div className="mt-9">
            <button
              type="submit"
              className="text-[14px] font-plus text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px] rounded-full"
            >
              Set Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newpassword
