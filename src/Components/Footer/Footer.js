export default function Footer() {
  return (
    <div className="bg-[#0077b6] flex flex-col items-center justify-center h-[94px] relative">
      <div className="text-white text-center font-['Itim-Regular',_sans-serif] text-2xl font-normal">
        © 2024 ShieldSearch. All rights reserved.
      </div>
      <div className="flex justify-between w-full px-8 mt-4">
        <div className="flex space-x-8">
          <img className="w-[50px] h-[50px]" src="instagram-1-10.png" alt="Instagram" />
          <img className="w-[50px] h-[50px]" src="facebook-10.png" alt="Facebook" />
          <img className="w-[50px] h-[50px]" src="discord-10.png" alt="Discord" />
        </div>
        <div className="flex space-x-8">
          <img className="w-[50px] h-[50px]" src="apple-10.png" alt="Apple Store" />
          <img className="w-[50px] h-[50px]" src="android-10.png" alt="Google Play" />
        </div>
      </div>
    </div>
  );
}