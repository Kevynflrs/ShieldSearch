export default function Header() {
  return (
    <div className="bg-[#0077b6] flex flex-col items-center justify-center h-[902px]">
      <img
        className="w-full h-[61.39px] overflow-visible"
        src="vector-10.svg"
        alt="Décoration vectorielle"
      />
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            className="absolute left-[980px] top-[444.95px] transform rotate-[-64.598deg]"
            src="group0.svg"
            alt="Icône décoration"
          />
          <img
            className="absolute left-[388px] top-[328px]"
            src="highlight-050.svg"
            alt="Icône mise en avant"
          />
          <div className="text-white text-center font-['Itim-Regular',_sans-serif] text-5xl font-normal">
            Nous sommes ShieldSearch
          </div>
        </div>
        <img
          className="w-[500px] h-[500px] object-cover"
          src="azur-3-removebg-preview-10.png"
          alt="Illustration principale"
        />
        <div className="text-white text-center font-['Itim-Regular',_sans-serif] text-xl font-normal mt-4">
          ShieldSearch c’est deux étudiants en école d’ingénieur en informatique.
          Dans le cadre de nos études, nous avons voulu créer un moyen de se protéger face aux cybermenaces actuelles.
          <br />
          Nous avons pensé au QR code, de plus en plus utilisé au quotidien, qui nous renvoie généralement directement sur une page après le scan.
          <br />
          C’est pourquoi nous avons décidé de créer une plateforme permettant de générer des mots de passe robustes et de vérifier nos anciens mots de passe.
          ShieldSearch permet également de vérifier des liens sur la version web et d’analyser les liens derrière les QR codes.
        </div>
      </div>
      <img
        className="w-[170.07px] h-[83.44px] mt-4"
        src="vector-217-stroke0.svg"
        alt="Décoration vectorielle"
      />
    </div>
  );
}