export default function Main() {
    return (
      <div className="flex flex-col items-center">
        <div className="text-[#03045e] text-center font-['Itim-Regular',_sans-serif] text-[32px] font-normal w-[1039px] my-4">
          Il est important de sécuriser ses données personnelles dans l'ère numérique actuelle face à la croissance des cyberattaques.
        </div>
        <div className="flex flex-wrap justify-center gap-8 my-4">
          <div className="text-[#03045e] text-center text-[32px] font-normal w-[459px]">
            Utiliser un mot de passe fort est essentiel pour protéger vos informations personnelles en ligne et prévenir les cyberattaques.
          </div>
          <div className="text-[#03045e] text-center text-[32px] font-normal w-[459px]">
            Faire attention à l'URL sur laquelle vous cliquez est crucial pour éviter les sites frauduleux, car un simple clic sur un lien douteux peut exposer vos données personnelles et compromettre la sécurité de votre appareil.
          </div>
          <div className="text-[#03045e] text-center text-[32px] font-normal w-[459px]">
            Vérifier que votre mot de passe est suffisamment fort est indispensable pour assurer la sécurité de vos comptes.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 my-4">
          <div className="flex flex-col items-center w-[581px]">
            <img className="w-[25.53%] h-[18.12%] my-4" src="vector0.svg" alt="Décoration" />
            <div className="text-[#03045e] text-center text-[32px] font-normal">
              Générer un<br />mot de passe
            </div>
            <img className="w-[141px] h-[141px] my-4" src="password-10.png" alt="Icône mot de passe" />
          </div>
          <div className="flex flex-col items-center w-[581px]">
            <img className="w-[26.43%] h-[17.75%] my-4" src="vector1.svg" alt="Décoration" />
            <div className="text-[#03045e] text-center text-[32px] font-normal">
              Vérifier un<br />mot de passe
            </div>
            <img className="w-[71px] h-[71px] my-4" src="check-10.png" alt="Icône vérification" />
          </div>
          <div className="flex flex-col items-center w-[581px]">
            <img className="w-[23.49%] h-[24.46%] my-4" src="vector2.svg" alt="Décoration" />
            <div className="text-[#03045e] text-center text-[32px] font-normal">
              Vérifier une URL
            </div>
            <img className="w-[55px] h-[55px] my-4" src="link-2-10.png" alt="Icône lien" />
          </div>
        </div>
      </div>
    );
  }