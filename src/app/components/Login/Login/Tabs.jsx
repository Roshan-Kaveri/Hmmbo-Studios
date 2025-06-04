import React from "react";

const Tabs = ({ activeTab, setActiveTab, accountCreated }) => (
  <div className="flex mb-8 bg-black/30 rounded-lg p-1">
    <button
      onClick={() => setActiveTab("signin")}
      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
        activeTab === "signin" ? "bg-primary/90 text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      Sign In
    </button>
    <button
      onClick={() => !accountCreated && setActiveTab("create")}
      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
        activeTab === "create"
          ? "bg-primary/90 text-white"
          : accountCreated
          ? "text-gray-500 cursor-not-allowed"
          : "text-gray-300 hover:text-white"
      }`}
      disabled={accountCreated}
    >
      {accountCreated ? "Verify Email" : "Create Account"}
    </button>
  </div>
);

export default Tabs;
