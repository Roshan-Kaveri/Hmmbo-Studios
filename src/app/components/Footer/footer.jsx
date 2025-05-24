import React from "react";
import { Twitter, Instagram } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-[-5em] bg-transparent text-center text-white py-4">
        <hr /> <br></br>
      <div className="text-sm">
        Copyright © 2025 Hmmbo Studios – All rights reserved
        <br />
        Hmmbo Studios is not affiliated with Minecraft or Mojang AB
      </div>

      <div className="flex justify-center gap-6 mt-4 text-base font-medium">
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/support" className="hover:underline">Support</a>
        <a href="/about" className="hover:underline">About</a>
      </div>

      <div className="flex justify-center gap-6 mt-4 text-white">
        <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="w-5 h-5 hover:text-zinc-300 transition" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5 hover:text-zinc-300 transition" />
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-zinc-300 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
