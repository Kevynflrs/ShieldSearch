export default function Main() {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-white text-blue-900 font-sans relative">
      <h1 className="text-2xl font-bold text-center mb-8">
        Il est important de sécuriser ses données personnelles dans l'ère numérique actuelle face à la croissance des cyberattaques.
      </h1>

      <div className="flex flex-wrap justify-center gap-12 max-w-4xl relative">
        <div className="flex flex-col items-center text-center relative">
          <p className="text-sm max-w-xs mb-2">
            Utiliser un mot de passe fort est essentiel pour protéger vos informations personnelles en ligne et prévenir les cyberattaques.
          </p>
          {/* <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/DownArrow.png`}
            alt="Down Arrow"
            className="absolute top-full left-1/2 transform -translate-x-1/2"
          /> */}
          <div className="w-40 h-28 bg-blue-100 rounded-lg flex flex-col justify-center items-center shadow-lg mt-10">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Icon/Password.png`}
              alt="Password Icon"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm">Générer un mot de passe</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center relative">
          <p className="text-sm max-w-xs mb-2">
            Faire attention à l'URL sur laquelle vous cliquez est crucial pour éviter les sites frauduleux, car un simple clic sur un lien douteux peut exposer vos données personnelles et compromettre la sécurité de votre appareil.
          </p>
          {/* <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/CurvedArrow.png`}
            alt="Curved Arrow"
            className="absolute top-full left-1/2 transform -translate-x-1/2"
          /> */}
          <div className="w-40 h-28 bg-blue-100 rounded-full flex flex-col justify-center items-center shadow-lg mt-10">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Icon/Link.png`}
              alt="Link Icon"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm">Vérifier une URL</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center relative">
          <p className="text-sm max-w-xs mb-2">
            Vérifier que votre mot de passe est suffisamment fort est indispensable pour assurer la sécurité de vos comptes.
          </p>
          {/* <img
            src={`${process.env.PUBLIC_URL}/Assets/vector/LeftArrow.png`}
            alt="Left Arrow"
            className="absolute top-full left-1/2 transform -translate-x-1/2"
          /> */}
          <div className="w-40 h-28 bg-blue-100 rounded-lg flex flex-col justify-center items-center shadow-lg mt-10">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Icon/Check.png`}
              alt="Check Icon"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm">Vérifier un mot de passe</p>
          </div>
        </div>
      </div>
    </div>
  );
}