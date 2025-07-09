import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/login/Login"
import CreatAcc from "./Pages/SignUP/CreatAcc"
import SignUp from "./Pages/SignUP/SignUp"
import SetUpProfile from "./Pages/Profile/SetUpProfile"
import Test from "./Pages/tests/Test"
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import ProfileContainer from "./Components/Profile/ProfifeContainer";
import MyChat from "./Components/Profile/MyChat";
import Wallet from "./Pages/Wallet/Wallet";
import Forgot from "./Pages/Forgot/Forgot";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path="home/visit" element={<ProfileContainer type={'visit'}/>}/>
        <Route path="chats" element={<MyChat type={'Home'}/>}/>
        <Route path="wallet" element={<Wallet/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path='verify' element={<CreatAcc/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='setupProfile' element={<SetUpProfile/>}/>
        <Route path='test' element={<Test/>}/>
        <Route path="forgot" element={<Forgot/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
