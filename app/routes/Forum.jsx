import React from "react";
// Components
import FullButton from "./Buttons/FullButton";
// Assets
import AddImage2 from "./assets/img/Forum/Forum-1.jpg";
import Programme21 from "./assets/img/Forum/Programme21.jpg";
import Programme20 from "./assets/img/Forum/Programme20.jpg";
import HeaderImage from "./assets/img/Forum/Header-Forum.jpg";

export function HeaderForum() {
  return (
    <section className="container flex justify-between items-center pt-20 min-h-[840px]">
      <div className="w-1/2 flex justify-center">
        <div>
          <h1 className="text-5xl font-extrabold">
            <span className="text-dark">Forum</span> des associations franco-italiennes
          </h1>
          <p className="text-sm mt-4 max-w-[470px] leading-relaxed">
            Bienvenue sur notre page forum des associastions. Découvrez le prochain forum des associations franco-italiennes et son programme.
          </p>
          <div className="mt-6 max-w-[190px]">
            <FullButton title="Voir Plus" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end relative">
        <img className="rounded-lg z-10" src={HeaderImage} alt="office" />
      </div>
    </section>
  );
}

export function Forum() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="flex justify-between py-24 mb-24 relative">
          <div className="relative w-1/2">
            <div className="absolute top-[-300px] left-0 w-full">
              <div className="flex justify-center">
                <img className="rounded-lg" src={AddImage2} alt="" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-sm font-semibold">Forum des associations italiennes virtuel</h4>
            <h2 className="text-4xl font-extrabold text-dark my-4">APIRP 2020</h2>
            <p className="text-xs mt-4 mb-4">
              Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020.
            </p>
            <p className="text-xs mb-4">
              Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents.
            </p>
            <p className="text-xs mb-4">
              Plus d'infos sur les <a href="https://padlet.com/apirpassociation/apirp2020" className="text-blue-600">renseignements.</a>
            </p>
            <p className="text-xs">
              L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              <div className="w-[190px]">
                <FullButton title="Programme 20 juin" action={() => window.open(Programme20, '_blank')} />
              </div>
              <div className="w-[190px]">
                <FullButton title="Programme 21 juin" action={() => window.open(Programme21, '_blank')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
