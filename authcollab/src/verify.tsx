import { Link, Navigate, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { verifyAccount } from "../../Api/authApi"


const UVerify = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    token: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitNow = handleSubmit((data: any) => {
    verifyAccount(data).then(() => {
      navigate("/dashboard");
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-indigo-800">
      <div className=" border bg-white rounded-[20px] w-[500px] min-h-[200px] bxs">
        <div className="m-4 text-[25px] mb-16 flex justify-center font-semibold text-indigo-900">Please Verify Here</div>
        <form className="m-3" onSubmit={handleSubmitNow}>
          <div className="my-2">
            <input
              className="w-full h-[45px] bg-white  rounded-sm border pl-2"
              placeholder="email"
              {...register("email")} 
            />
            {errors.email?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.email?.message}
              </div>
            )}
          </div>

          <div className="my-2">
            <input
              className="w-full bg-white h-[45px] rounded-sm border pl-2"
              placeholder="token"
              {...register("token")} 
            />
            {errors.token?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.token?.message}
              </div>
            )}
          </div>

          <button
            className="w-full bg-indigo-800 rounded-[5px] mt-8 h-[49px] text-white"
            type="submit"
            >
            Verify this Account
          </button>

          <div className="w-full flex justify-center text-[14px] mt-8 ">
            <Link to="/usersignin">
              <div>       
                                    <span className="text-[#7695f2] cursor-pointer ">Back to Login →</span> Here
                                </div>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UVerify;