import React from "react";
import { Eye, EyeOff } from "lucide-react";

const InputWithIcon = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  showPasswordToggle,
  showPassword,
  togglePasswordVisibility,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mt-2">{placeholder}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type={type === "password" && showPasswordToggle ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-12 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary/70 focus:ring-1 focus:ring-primary/70 transition-colors"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);

export default InputWithIcon;
