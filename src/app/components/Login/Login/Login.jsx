"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import Form from "./Form";
import Features from "./Features";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("signin");
  const [accountCreated, setAccountCreated] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signin") {
      console.log("Login attempt:", { email, password });
    }
  };

  const handleCreateAccount = () => {
    console.log("Account creation:", { email, password, confirmPassword });
    setAccountCreated(true);
    setActiveTab("verify");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Side */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mt-2">Welcome</h1>
            <p className="text-gray-400">
              Let's get you signed in to{" "}
              <span className="text-primary font-semibold">Hmmbo Studios</span>
            </p>
          </div>

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} accountCreated={accountCreated} />

          <form onSubmit={handleSubmit}>
            <Form
              activeTab={activeTab}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              handleSubmit={handleSubmit}
              handleCreateAccount={handleCreateAccount}
              accountCreated={accountCreated}
              setActiveTab={setActiveTab}
              setAccountCreated={setAccountCreated}
            />
          </form>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="w-1/2 bg-gradient-to-br from-primary/70 via-primary to-primary p-12 flex flex-col justify-center">
        <Features />
      </div>
    </div>
  );
};

export default Login;
