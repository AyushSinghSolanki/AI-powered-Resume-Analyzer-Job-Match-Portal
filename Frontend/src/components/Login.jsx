import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // 1. useNavigate import karein
import api from "../api/axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // 2. Hook ko initialize karein

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        toast.success("Login successful");
        console.log(res.data);

       localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        const res = await api.post("/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        toast.success("Account created successfully");
        console.log(res.data);

        // Sign up ke baad chahein toh direct login page view par shift kar dein ya main page par bhej dein
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background 3D Animated Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-75 h-75 bg-emerald-500/20 rounded-full blur-[90px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-75 h-75 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none animate-pulse"></div>

      {/* Main 3D Container */}
      <div className="w-full max-w-sm relative z-10 perspective-[1000px]">
        <div className="bg-[#101012]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.15)] transform hover:-translate-y-1">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block p-2.5 rounded-xl bg-white/5 border border-white/10 mb-3 shadow-inner">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mb-1">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-400 text-xs">
              {isLogin
                ? "Enter your credentials to access portal"
                : "Join today and supercharge your career"}
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex bg-white/5 p-1 rounded-lg mb-6 border border-white/10">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                isLogin
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                !isLogin
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {!isLogin && (
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ayush Singh Solanki"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    toast("Password reset link sent to your email.", {
                      icon: "✉️",
                      style: {
                        background: "#101012",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      },
                    });
                  }}
                  className="text-[11px] text-emerald-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-1 py-2.5 bg-linear-to-r from-emerald-500 to-teal-400 text-black text-xs font-semibold rounded-lg shadow-[0_8px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_20px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 text-center border-t border-white/10 pt-4">
            <p className="text-[10px] text-gray-500">
              Protected by enterprise-grade 3D encrypted protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
