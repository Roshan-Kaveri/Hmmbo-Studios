import React from "react";
import InputWithIcon from "./InputWithIcon";
import { Mail, Lock } from "lucide-react";

const Form = ({
  activeTab,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  togglePasswordVisibility,
  handleSubmit,
  handleCreateAccount,
  accountCreated,
  setActiveTab,
  setAccountCreated,
}) => {
  if (activeTab === "signin")
    return (
      <>
        <InputWithIcon
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithIcon
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle={true}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-primary/90 mt-2 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-black"
        >
          Sign In to Hmmbo Studios
        </button>
        <div className="text-center">
          <button type="button" className="text-primary/70 hover:text-primary text-sm font-medium transition-colors">
            Forgot your password?
          </button>
        </div>
      </>
    );

  if (activeTab === "create")
    return (
      <>
        <InputWithIcon
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithIcon
          icon={Lock}
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle={true}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
        <InputWithIcon
          icon={Lock}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleCreateAccount}
          className="w-full bg-primary/90 hover:bg-primary text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 mt-2 focus:ring-offset-black"
        >
          Create Account
        </button>
      </>
    );

  if (activeTab === "verify")
    return (
      <>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mt-2">Check Your Email</h3>
          <p className="text-gray-400 text-sm">
            We've sent a verification link to <span className="text-white font-medium">{email}</span>
          </p>
        </div>
        <button
          className="w-full bg-primary/90 hover:bg-primary text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-black"
        >
          Resend Verification Email
        </button>
        <div className="text-center mt-4">
          <button
            onClick={() => {
              setActiveTab("signin");
              setAccountCreated(false);
            }}
            className="text-primary/70 hover:text-primary mt-2 text-sm font-medium transition-colors"
          >
            Back to Sign In
          </button>
        </div>
      </>
    );

  return null;
};

export default Form;
