import React from 'react';

export default function Header() {
  return (
    <div className="bg-header w-full h-auto flex flex-col items-center">
      <img
        src={`${process.env.PUBLIC_URL}/Assets/Logo/FirstLogo.png`}
        alt="Logo"
      />
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center mb-20">
          <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/HighlightUp.png`}
            alt="Highlight"
            className="w-16 h-16 mr-4 -mt-20"
          />
          <div className="text-header text-center text-5xl mb-4">
            Nous sommes ShieldSearch
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/HighlightDown.png`}
            alt="Highlight"
            className="w-16 h-16 ml-4 -mb-20"
          />
        </div>
      </div>
      <div className="text-header text-center text-xl mb-4 px-4 max-w-[1000px] mx-auto">
        <p className="mb-2">
          ShieldSearch, c’est deux étudiants en école d’ingénieur en informatique. Dans le cadre de nos études, nous avons voulu créer un moyen de se protéger contre les cybermenaces actuelles.
        </p>
        <p className="mb-2">
          Nous avons pensé au QR code, de plus en plus utilisé au quotidien, et qui nous renvoie directement sur une page après le scan.
        </p>
        <p>
          C’est pourquoi nous avons créé une plateforme permettant de générer des mots de passe robustes et de vérifier les anciens. ShieldSearch permet aussi d’analyser des liens et des QR codes pour se protéger des menaces potentielles.
        </p>
      </div>
        <div className="flex-1 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/Underline.png`}
            alt="Vector"
          />
        </div>
    </div>
  );
}