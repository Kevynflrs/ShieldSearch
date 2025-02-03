import React from 'react';

export default function Header() {
  return (
    <div className="relative bg-header w-full h-auto py-8 flex flex-col items-center">
      <img
        src={`${process.env.PUBLIC_URL}/Assets/Logo/FirstLogo.png`}
        alt="Logo"
        className="mb-4"
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
      <div className="text-header text-center text-xl mb-4 px-4">
        ShieldSearch c’est deux étudiants en école d’ingénieur en informatique. Dans
        le cadre de nos études, nous avons voulu créer un moyen de se protéger face
        aux cybermenaces actuelles.
        <br />
        Dans ce cadre-là, nous avons pensé au QR code, de plus en plus utilisé au
        quotidien, et qui nous renvoie généralement directement sur une page après
        le scan.
        <br />
        C’est pourquoi nous avons décidé de créer une plateforme permettant de se
        protéger sur internet en générant des mots de passe robustes et en vérifiant
        nos anciens mots de passe. ShieldSearch permet également de vérifier des
        liens sur la version web, mais aussi de scanner des QR codes et de rester
        protégé face aux menaces potentielles en analysant le lien derrière le QR
        code.
      </div>
      <div className="w-full flex justify-between items-center mb-4 px-4">
        <div className="flex justify-center w-full">
          <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/Underline.png`}
            alt="Vector"
          />
        </div>
        <div className="flex justify-end w-full">
          <img
            className="h-auto ml-4"
            src={`${process.env.PUBLIC_URL}/Assets/vector/Sign.png`}
            alt="Group"
          />
        </div>
      </div>
    </div>
  );
}