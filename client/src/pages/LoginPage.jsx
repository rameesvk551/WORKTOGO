import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import {FcGoogle} from "react-icons/fc"
import { Link } from "react-router-dom";
import {Toaster,tost} from"sonner"
import Logo from "../components/Logo";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Input from "../components/Input";

const LoginPage = () => {

  const [data,setData]=useState({email:"",password:""})
  const handleChange=(e)=>{
    const [name,value]=e.target
    setData({...data,[name]: value})
  }
const user={}
  if (user.token) window.location.replace('/')
  return <div className=" flex w-full h-[100vh]">
    <div className="hidden md:flex  flex-col gap-y-4  w-1/3 min-h-screen bg-black items-center justify-center">
   <Logo type="login"/>
   <span className="text-xl font-semibold text-white">welcome back</span>
    </div>
    <div className=" flex w-full md:w-2/3 h-full
     bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black
     items-center px-10 md:px-20 lg:px-40">
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8" >
        <div className="block mb-10 md:hidden"> <Logo/></div>
        <form >
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className=" mt-4 text-center text-2xl md:text-3x1 font-semibold
            text-gray-950 dark:text-white">SignIn To Your Account</h1>
          </div>
          <Button label="SignIn With Google" icon={<FcGoogle className=""/>} 
          style="w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300"
         onClick={()=>{}}/>

         <Divider label="or sign in with email"/>
         <Input label="email"
         isRequered={true}
         placeholder="example@gmail.com"
         value={data?.email}
         onChange={handleChange}/>


<Input label="Password"
         isRequered={true}
         placeholder="Password"
         value={data?.password}
         onChange={handleChange}/>
        
        </div>
        <Button label="SignIn" icon={<FcGoogle className=""/>} 
          style=" mt-6    w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full text-white bg-black
          dark:bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-rose-500 mt-7"
         onClick={()=>{}}/>
       </form>
       <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
       
        <p>don't have an account {''} <Link to="/signup" className="text-rose-500 font-medium"> SignUp</Link></p>
       </div>
      </div>
    </div>
    </div>;
};

export default LoginPage;
