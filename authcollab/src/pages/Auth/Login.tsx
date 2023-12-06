import {Link, useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import *as yup from "yup";
import { useForm } from "react-hook-form";
import { createAccount } from "../../Api/authApi"


const ULogin = () => {
   const navigate = useNavigate();
    const schema = yup.object({
        userName: yup.string().required("Must be filled"),
        email: yup.string().email().required("Must be filled"),
        password: yup.string().required("Must be filled"),
        confirm: yup.string().oneOf([yup.ref("password")]),
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm ({
            resolver: yupResolver(schema),
        });

    const handleSubmitNow = handleSubmit((data: any) => {
        console.log(data);
        createAccount(data).then(() => {
            navigate("/verify");
        });
        });
  return (
    <div>
        <div className="h-[100vh] w-full relative flex justify-center items-center bg-indigo-800">
            <div className="h-[70%] w-[30%] bg-white flex justify-center items-center bxs rounded-[20px]">
                <div className="h-[85%] w-[90%]">
                    <div className=" w-full flex justify-center mb-[30px]">
                        <div className="text-[25px] font-semibold text-indigo-900">
                            User Login
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmitNow}>
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" >Email or Username</label>
                            </div>
                            <input type="text" className="w-[100%] h-[40px] bg-white border pl-2"
                            placeholder="email"
                            {...register("email")}
                            />
                            {errors.email?.message && (
                            <div className="text-red-700 text-[12px] text-right ">
                                {errors.email?.message}
                            </div>
                           )}
                        </div>
                        <div className="mb-5">
                            <div>
                                <label htmlFor="" className="w-[100%]">Password</label>
                            </div>
                            <input type="password"  className="w-[100%] h-[40px]  bg-white border pl-2" 
                            placeholder="input your password"
                            {...register("password")}
                            />
                            {errors.password?.message && (
                            <div className="text-red-700 text-[12px] text-right ">
                                {errors.password?.message}
                            </div>
                           )}
                        </div>
                        <div className="flex justify-between w-[100%] mb-8">
                            <div className="flex">
                                 <div className="h-5 w-5 borderall flex justify-center items-center bg-indigo-800 cursor-pointer text-white">✓</div> 
                                 <div className="ml-2">Stay signed in</div>
                            </div>
                            <div className="text-red-600">Forgot Password?</div>
                        </div>
                        <div className="mb-[10px]">
                            <Link to="/dashboard">
                                <button className="w-[100%] h-[40px] rounded-[5px] bg-indigo-800 text-white cursor-pointer">Sign in</button>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center mb-[40px]">
                            <div className= "flex justify-center items-center text-gray-200">_____</div>
                            <div className="mt-4 mx-3">or</div>
                            <div className="flex justify-center items-center text-gray-200">_______</div>
                        </div>
                        <div className="mb-[20px] flex justify-center">
                            <Link to="/userregister">
                                <div>       
                                    <span className="text-[#7695f2] cursor-pointer">Create Account here →</span> instead?
                                </div>
                            </Link>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ULogin