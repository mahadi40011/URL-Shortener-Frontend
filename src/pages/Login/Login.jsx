import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiUnlock } from "react-icons/ci";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";

const Login = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-md bg-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-800 tracking-tight mb-3">
            Welcome{" "}
            <span className="bg-green-600 bg-clip-text text-transparent">
              Back
            </span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
            <CiUnlock className="w-4 h-4 text-green-500" />
            <span>Securely access your account</span>
          </div>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-gray-100 rounded-xl py-3.5 text-gray-700 font-semibold hover:bg-gray-200 transition-all active:scale-[0.98]">
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <div className="flex items-center my-8">
          <div className="grow h-px bg-linear-to-r from-gray-300 to-transparent"></div>
          <span className="shrink-0 mx-4 text-xs uppercase font-bold text-gray-400 tracking-[0.2em]">
            Or
          </span>
          <div className="grow h-px bg-linear-to-l from-gray-300 to-transparent"></div>
        </div>

        {!showEmailLogin ? (
          <button
            onClick={() => setShowEmailLogin(true)}
            className="w-full flex items-center justify-center gap-3 text-green-600 font-bold py-3.5 rounded-xl border border-green-200 bg-green-100 hover:bg-green-200 transition-all"
          >
            <MdOutlineEmail size={24}/>
            Sign in with Email
          </button>
        ) : (
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 animate-in fade-in duration-500"
          >
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="name@gmail.com"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/10 text-gray-700 transition-all ${
                  errors.email
                    ? "border-red-400 bg-red-50/30"
                    : "border-gray-200 focus:border-green-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-sm font-bold text-gray-700">
                  Password
                </label>
                <span className="text-xs font-bold text-green-600 hover:text-green-700 cursor-pointer">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Min 6 characters required",
                    },
                  })}
                  className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/10 text-gray-700 transition-all ${
                    errors.password
                      ? "border-red-400 bg-red-50/30"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600/80 text-white py-4 rounded-xl font-bold hover:bg-green-700/80 shadow-lg shadow-green-600/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
               login
            </button>
          </form>
        )}

        <p className="text-center text-sm font-medium text-gray-500 mt-8">
          New here?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-bold hover:text-green-700 underline underline-offset-4"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
