import React from "react";
// Components
import BlogBox from "./Elements/BlogBox";
import FullButton from "./Buttons/FullButton";
//Assets
import HeaderImage from "./assets/img/Activites/Header-Activites.jpg";

export function HeaderActivités() {
  return (
    <section className="container flex flex-col lg:flex-row items-center pt-20">
      <div className="flex flex-col items-center lg:w-1/2 lg:text-left">
        <h1 className="text-5xl font-extrabold">
          <span className="text-dark">Activités</span> culturelles
        </h1>
        <p className="text-sm py-4 max-w-xl text-center lg:text-left">
          Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !
        </p>
        <div className="max-w-xs">
          <FullButton title="Voir Plus" />
        </div>
      </div>
      <div className="flex justify-end lg:w-1/2 mt-6 lg:mt-0">
        <img className="rounded-lg" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
      </div>
    </section>
  );
}

export default function Activités() {
  return (
    <>
    <HeaderActivités />
    <section className="w-full pt-5">
      <div className="whiteBg">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Concours Dante Dì",
                text: "Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.[...]",
              },
              {
                title: "Paolo Fresu et Daniele di Bonaventura en concert.",
                text: "Mercredi 21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura. Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui.[...]",
              },
              {
                title: "Sicilia, Tunisia, ...",
                text: "Sur scène à Nanterre, «Sicilia.» Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger [...].",
              },
              {
                title: "Italissimo 2020",
                text: "La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.[...]",
              },
              {
                title: "Exposition Gramsci à l'IIC",
                text: "Pour célébrer la richesse et la vivacité de la pensée d’Antonio Gramsci, la Fondation Gramsci et l’Institut culturel italien de Paris vous invitent à découvrir l’exposition « Les Cahiers de prison et la France »[...]",
              },
              {
                title: "L'essor des séries italiennes à l'IIC",
                text: "Le 22 septembre 2020 à 19h, l'Institut culturel italien vous convie à une rencontre consacrée à la Fiction à l'italienne. De Gomorra à la série de Paolo Sorrentino, The young Pope.[...]",
              },
              {
                title: "Erri De Luca, au MK2 Bibliothèque",
                text: "L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]",
              },
              {
                title: "Soirée de chants traditionnels italiens et stage de chant",
                text: "Le Studio DTM - Danse Théâtre Musique accueille le 20 Mars 2020 à 20h30 un artiste italien, pour une soirée de chants et bals traditionnels des régions Marche et Abruzzo.[...]",
              },
              {
                title: "Cézanne et Rêve d’Italie au Musée Marmottan.",
                text: "Au musée Marmottan Monet, Paris 16ème, vient de s’ouvrir une exposition inédite intitulée «Cézanne et les maîtres. Rêve d’Italie». Elle aura lieu jusqu’au 5 juillet 2020.[...]",
              },
            ].map(({ title, text }, index) => (
              <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <BlogBox
                  title={title}
                  text={text}
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
