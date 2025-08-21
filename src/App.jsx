import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Newpassword from "./pages/Newpassword"
import Signup from "./pages/Signup"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forget-password" element={<ForgetPassword />} />
          <Route path="Newpassword" element={<Newpassword/>} />
          <Route path="Signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
