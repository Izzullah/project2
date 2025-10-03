import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import icon from "../assets/image/icon.png"

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const firstName = form.elements["firstName"].value
    const lastName = form.elements["lastName"].value
    const email = form.elements["email"].value
    const password = form.elements["password"].value

    console.log({ firstName, lastName, email, password })

    navigate("/login")
  }

  return (
    <div className="bg-[#F0F2F4] h-[780px] w-full grid justify-center">
      <div className="bg-white w-[480px] h-[576px] p-[24px] mt-[120px] shadow-xl">
        <div className="font-semibold font-plus text-[20px] text-[#0B0C0F]">Sign up</div>



        <form onSubmit={handleSubmit}>

          <div className="flex gap-[30px] mt-4">
            <div className="grid gap-5">
              <span className="font-medium text-[14px] font-plus text-[#556377]">First Name</span>
              <input
                type="text"
                name="firstName"
                className="border-[1px] px-[14px] py-[10px] w-[200px] h-[48px] rounded-md border-[#E1E5EA]"
              />
            </div>

            <div className="grid gap-5">
              <span className="font-medium text-[14px] font-plus text-[#556377]">Last Name</span>
              <input
                type="text"
                name="lastName"
                className="border-[1px] px-[14px] py-[10px] w-[206px] h-[48px] rounded-md border-[#E1E5EA]"
              />
            </div>
          </div>
          <div className="grid gap-3 mt-7">
            <span className="font-medium text-[14px] font-plus text-[#556377]">Email</span>
            <input
              type="email"
              name="email"
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA]"
              required
            />
          </div>

          <div className="grid gap-3 mt-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="border-[1px] px-[14px] py-[10px] w-[432px] h-[35px] rounded-md border-[#E1E5EA]"
            />


            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[10px] text-gray-500"
            >
              <img src={icon} alt="toggle password" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-2 mt-[40px]">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] border-[0.83px] rounded-md border-[#C4CBD4] mt-1"
            />
            <span className="text-[12px] text-[#84818A] font-plus">
              By clicking Create account, I agree that I have read and accepted the <br />
              Terms of Use and Privacy Policy.
            </span>
          </div>

          <div className="mt-9">
            <button
              type="submit"
              className="text-[14px] font-plus font-medium text-white bg-[#03C987] px-[14px] py-[12px] w-[432px] h-[48px] rounded-full"
            >
              Create Account
            </button>
          </div>
        </form>

        <Link to="/login">
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
