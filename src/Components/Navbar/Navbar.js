import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 h-full flex z-50">
      {/* Navbar container */}
      <motion.div
        className="bg-navbar w-[200px] h-full md:h-auto md:w-[250px] rounded-tr-[40px] rounded-br-[40px] shadow-lg flex flex-col items-center p-6 md:p-8"
        initial={{ x: -220 }}
        animate={{ x: isOpen ? 0 : -220 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/verifier-url" className="text-navbar text-xl md:text-2xl font-bold mt-6 md:mt-10">
          <div className="bg-[#90E0EF] p-3 md:p-4 rounded-[30px] w-[140px] md:w-[160px] text-center shadow-md transform rotate-[-5deg] hover:rotate-0 transition">
            Vérifier une URL
          </div>
        </Link>
        <Link to="/verifier-mdp" className="text-navbar text-xl md:text-2xl font-bold mt-6 md:mt-10">
          <div className="bg-[#90E0EF] p-3 md:p-4 rounded-[40px] w-[150px] md:w-[170px] text-center shadow-md transform rotate-[4deg] hover:rotate-0 transition">
            Vérifier un mot de passe
          </div>
        </Link>
        <Link to="/generer-mdp" className="text-navbar text-xl md:text-2xl font-bold mt-6 md:mt-10">
          <div className="bg-[#90E0EF] p-3 md:p-4 rounded-[35px] w-[160px] md:w-[180px] text-center shadow-md transform rotate-[-3deg] hover:rotate-0 transition">
            Générer un mot de passe
          </div>
        </Link>
      </motion.div>

      {/* Toggle Button */}
      <button
        className="bg-navbar w-10 h-10 md:w-12 md:h-12 rounded-tr-lg rounded-br-lg ml-[-10px] md:ml-[-12px] flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? `${process.env.PUBLIC_URL}/Assets/Icon/cross.png` : `${process.env.PUBLIC_URL}/Assets/Icon/Menu.png`}
          alt="Toggle Icon"
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </button>
    </div>
  );
};