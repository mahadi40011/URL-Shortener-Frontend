import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiUser, CiLock } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    createUser,
    signInWithGoogle,
    loading,
    setLoading,
    updateUserProfile,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "all",
  });

  const password = watch("password");

  // Email/Password sign up
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createUser(data.email, data.password);
      await updateUserProfile(data.name);

      toast.success("Sign Up Successful");
      navigate("/");
    } catch (error) {
      console.error("Signup Error:", error.message);
      toast.error("Sign Up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        toast.success("Sign Up Successful");
        navigate("/");
      })
      .catch((err) => {
        console.error("Sign Up Error:", err.message);
        toast.error("Sign Up failed. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-gray-800 tracking-tight mb-3">
            Join{" "}
            <span className="bg-green-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
            <CiLock className="w-4 h-4 text-green-500" />
            <span>Create your secure account</span>
          </div>
        </div>

        {/* Social Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-gray-100 rounded-xl py-3.5 text-gray-700 font-semibold hover:bg-gray-200 transition-all active:scale-[0.98]"
        >
          <FcGoogle size={24} />
          Sign up with Google
        </button>

        <div className="flex items-center my-8">
          <div className="grow h-px bg-linear-to-r from-gray-300 to-transparent"></div>
          <span className="shrink-0 mx-4 text-xs uppercase font-bold text-gray-400 tracking-[0.2em]">
            Or
          </span>
          <div className="grow h-px bg-linear-to-l from-gray-300 to-transparent"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 animate-in fade-in duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/10 text-gray-700 transition-all ${
                    errors.name
                      ? "border-red-400 bg-red-50/30"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                <CiUser
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/10 text-gray-700 transition-all ${
                    errors.email
                      ? "border-red-400 bg-red-50/30"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                <MdOutlineEmail
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="col-span-1">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Required",
                    minLength: { value: 6, message: "Min 6 chars" },
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1.5 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="col-span-1">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Confirm
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Required",
                  validate: (value) => value === password || "Match fail",
                })}
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/10 text-gray-700 transition-all ${
                  errors.confirmPassword
                    ? "border-red-400 bg-red-50/30"
                    : "border-gray-200 focus:border-green-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-[10px] mt-1.5 ml-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button  */}
          <button
            type="submit"
            disabled={loading || !isValid || !isDirty}
            className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed ${
              !isValid || !isDirty
                ? "bg-gray-200 text-gray-400 shadow-none"
                : "bg-green-600 text-white hover:bg-green-700 shadow-green-600/20"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {loading && (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              )}
              {loading ? "Creating Account..." : "Create Account"}
            </div>
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm font-medium text-gray-500 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-bold hover:text-green-700 underline underline-offset-4"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
