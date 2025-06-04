"use client";
import React from "react";

const Features = () => {
  return (
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Premium Quality
          <br />
          <span className="text-blue-200">Without The Premium Price</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {/* Feature 1 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-primary/70/30">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <h3 className="text-white font-semibold">Customizable Plugins</h3>
            </div>
            <p className="text-blue-200 text-sm">
              Tailor each plugin to your exact needs
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-primary/70/30">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛡️</span>
              </div>
              <h3 className="text-white font-semibold">Plugins You Can Trust</h3>
            </div>
            <p className="text-blue-200 text-sm">
              Reliable. Secure. Crafted with love.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-primary/70/30">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔧</span>
              </div>
              <h3 className="text-white font-semibold">Copy-Paste Configs</h3>
            </div>
            <p className="text-blue-200 text-sm">
              Get started instantly with ready-to-use settings and presets.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-primary/70/30">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🚀</span>
              </div>
              <h3 className="text-white font-semibold">Direct Support</h3>
            </div>
            <p className="text-blue-200 text-sm">
              Need help? — We offer fast, friendly, and direct.
            </p>
          </div>
        </div>
      </div>

  );
};

export default Features;
