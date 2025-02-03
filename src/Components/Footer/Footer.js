import React from 'react';

export default function Footer() {
  return (
    <div className="bg-footer text-footer py-4 flex justify-between items-center">
      <div className="flex space-x-4 ml-4">
        <img className="w-8 h-8" src={`${process.env.PUBLIC_URL}/Assets/Logo/Instagram.png`} alt="Instagram" />
        <img className="w-8 h-8" src={`${process.env.PUBLIC_URL}/Assets/Logo/Facebook.png`} alt="Facebook" />
        <img className="w-8 h-8" src={`${process.env.PUBLIC_URL}/Assets/Logo/Discord.png`} alt="Discord" />
      </div>
      <div className="text-center">
        © 2024 ShieldSearch. All rights reserved.
      </div>
      <div className="flex space-x-4 mr-4">
        <img className="w-8 h-8" src={`${process.env.PUBLIC_URL}/Assets/Logo/Android.png`} alt="Google Play" />
        <img className="w-8 h-8" src={`${process.env.PUBLIC_URL}/Assets/Logo/Apple.png`} alt="Apple Store" />
      </div>
    </div>
  );
}