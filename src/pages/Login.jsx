import full from "../assets/image/full.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import icon from "../assets/image/icon.png"

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.elements["email"].value
    const password = form.elements["password"].value

    console.log({ email, password })

    navigate("/")
  }

  return (
    <div className="bg-[#F0F2F4] w-full h-[780px] grid justify-center">
      <div className="bg-white w-[490px] h-[460px] grid justify-center mt-[120px] shadow-md relative">

        {/* Logo */}
        <Link to="/">
          <div className="flex justify-center mt-5">
            <img className="w-fit" src={full} alt="logo" />
          </div>
        </Link>

        <div className="font-plus font-semibold text-[20px] mt-2">Sign In</div>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="grid gap-3 mt-5">
            <span className="font-plus font-medium text-[14px] text-[#556377]">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA]"
            />
          </div>

          {/* Password */}
          <div className="grid gap-3 mt-6 relative">
            <span className="font-plus font-medium text-[14px] text-[#556377]">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA]"
            />

            {/* Toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[42px] text-gray-500"
            >
              <img src={icon} alt="toggle password" className="w-5 h-5" />
            </button>
          </div>

          {/* Forgot password */}
          <Link to="/Forget-password">
            <div className="flex justify-end mt-3 text-sm text-blue-600 cursor-pointer">
              Forgot password?
            </div>
          </Link>

          {/* Submit */}
          <div className="mt-4">
            <button
              type="submit"
              className="text-[14px] font-plus text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px] rounded-full"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Signup link */}
        <Link to="/Signup">
          <div className="flex justify-center gap-1 mt-6">
            <span className="text-[14px] text-[#404A59]">
              Don't have an account?
            </span>
            <span className="text-[14px] text-[#0B0C0F] font-medium">
              Sign Up
            </span>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="grid justify-center text-center mt-4">
        <div>
          <span className="text-[12px] font-plus text-[#84818A]">
            Protected by reCAPTCHA and subject to the Circle
          </span>
        </div>
        <div>
          <span className="text-[12px] font-plus text-black">
            Privacy Policy
          </span>{" "}
          <span className="text-[12px] font-plus text-[#84818A]">and</span>
          <span className="text-[12px] font-plus text-black ml-1">
            Terms of Service.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
