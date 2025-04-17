import React from "react";
// Components
import FullButton from "./Buttons/FullButton";
// Assets
import AddImage2 from "./assets/img/Promouvoir/Promouvoir-1.jpg";
import HeaderImage from "./assets/img/Promouvoir/Header-Promouvoir.jpg";
import AddImage3 from "./assets/img/Promouvoir/Promouvoir-2.jpg";

export function HeaderPromouvoir() {
  return (
    <section className="container flex justify-between items-center pt-20 min-h-[840px] md:flex-col">
      <div className="w-1/2 h-full text-center md:w-full md:order-2 md:mt-12 md:mb-12">
        <div>
          <h1 className="font-extrabold text-4xl">
            <span className="text-dark">Promouvoir</span> l'italien
          </h1>
          <p className="max-w-[470px] py-4 text-sm leading-relaxed md:max-w-full md:py-4 md:text-center">
            Bienvenue sur notre page promouvoir l'italien. Dans le paysage culturel et linguistique mondial, la langue italienne brille de sa propre lumière. Au cœur de cette vitalité linguistique se trouve l'engagement passionné de notre association dévouée à sa promotion.
          </p>
          <div className="max-w-[190px] mx-auto">
            <FullButton title="Voir Plus" />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full md:w-full md:order-1 md:mt-8">
        <div className="relative flex justify-end">
          <img className="rounded-lg z-10" src={HeaderImage} alt="office" />
        </div>
      </div>
    </section>
  );
}

export default function Promouvoir() {
  return (
    <>
    <HeaderPromouvoir />
    <section id="projects" className="w-full">
      <div className="bg-white">
        <div className="container">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl">La plaquette éditée par l'APIRP</h1>
            <p className="text-sm mt-4">
              L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="flex justify-between items-center py-24 md:flex-col md:py-12">
            <div className="w-1/2">
              <div className="flex justify-center">
                <img className="rounded-lg" src={AddImage2} alt="add" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center">
                <img className="rounded-lg" src={AddImage3} alt="add" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="flex justify-between items-center py-12">
            <div className="w-1/2">
              <h4 className="text-sm mt-4">Télécharger le bon de commande pour pouvoir commander les dépliants :</h4>
            </div>
            <div className="w-1/2 flex justify-between">
              <div className="w-[190px]">
                <FullButton
                  title="Adhérent"
                  action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg', '_blank')}
                />
              </div>
              <div className="w-[190px] ml-4">
                <FullButton
                  title="Non adhérent"
                  action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container">
          <div className="text-center md:text-left">
            <h4 className="text-sm mt-4">Réponses au Quizz de la plaquette</h4>
            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                onClick={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w', '_blank')}
              >
                Les réponses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
