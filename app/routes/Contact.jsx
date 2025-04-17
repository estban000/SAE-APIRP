import React from "react";
// Components
import ProjectBox from "./Elements/ProjectBox";
// Assets
import ProjectImg1 from "./assets/img/projects/bulletin1.png";
import ProjectImg2 from "./assets/img/projects/bulletin2.png";
import ProjectImg3 from "./assets/img/projects/bulletin3.png";
import ProjectImg4 from "./assets/img/projects/bulletin4.png";
import ProjectImg5 from "./assets/img/projects/bulletin5.png";
import ProjectImg6 from "./assets/img/projects/bulletin6.png";
import HeaderImage from "./assets/img/Contact/Header-Contact.jpg";

export function Contactcontenu() {
  return (
    <section className="pt-20 w-full min-h-[840px] flex items-center justify-center">
      <div className="flex flex-wrap w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 text-center sm:text-left p-6">
          <h1 className="text-5xl font-extrabold">
            Nous <span className="text-gray-700">contacter</span>
          </h1>
          <p className="text-sm mt-4 mb-6 max-w-prose mx-auto">
            Pour nous signaler tout changement de coordonnées personnelles...
            <br />
            Pour les renouvellements d’adhésion et pour les commandes...
            <br />
            <span className="font-semibold">Email: apirp.association@gmail.com</span>
          </p>
          <h3>Mail : apirp.association@gmail.com</h3>
          <h3>
            Suivez nous sur{" "}
            <a
              href="https://m.facebook.com/APIRP/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              Facebook
            </a>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            className="rounded-lg w-3/4 sm:w-full"
            src={HeaderImage}
            alt="office"
          />
        </div>
      </div>
    </section>
  );
}

export function Assoc() {
  return (
    <section className="my-12 w-full">
      <div className="container mx-auto bg-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">L'association et ses statuts</h1>
          <h2 className="text-2xl font-semibold my-4">Présentation de l'APIRP</h2>
          <p className="text-sm mb-6">
            Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris...
          </p>
          <p className="text-sm font-semibold">Pour nous contacter : apirp.association@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export function Elu() {
  return (
    <section className="my-12 w-full">
      <div className="container mx-auto bg-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Les élus au C.A.</h1>
          <h2 className="text-2xl font-semibold my-4">
            Membres du C.A. et du Bureau élus le 16 mars 2019
          </h2>
          <div className="text-sm mb-6">
            <p>Président : Olivier Morin</p>
            <p>Vice-Présidente : Ilaria Madonna</p>
            <p>Secrétaire : Estelle Paint</p>
            <p>Trésorière : Valérie Guillouet</p>
            {/* Add the rest of the members here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bulletin() {
  return (
    <section className="my-12 w-full">
      <div className="container mx-auto bg-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Les bulletins de l'association</h1>
          <h2 className="text-2xl font-semibold my-4">
            Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne
          </h2>
          <p className="text-sm mb-6">
            Si vous souhaitez commander l'un de ces bulletins...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div>
            <ProjectBox
              img={ProjectImg1}
              title="La carte"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view",
                  "_blank"
                )
              }
            />
          </div>
          <div>
            <ProjectBox
              img={ProjectImg2}
              title="Le menu"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view",
                  "_blank"
                )
              }
            />
          </div>
          <div>
            <ProjectBox
              img={ProjectImg3}
              title="Lettre aux adhérents"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Ci-dessous les sommaires des derniers bulletins</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div>
            <ProjectBox
              img={ProjectImg4}
              title="Copertia bulletin"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view",
                  "_blank"
                )
              }
            />
          </div>
          <div>
            <ProjectBox
              img={ProjectImg5}
              title="Sommaire"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view",
                  "_blank"
                )
              }
            />
          </div>
          <div>
            <ProjectBox
              img={ProjectImg6}
              title="Sommaire"
              action={() =>
                window.open(
                  "https://drive.google.com/file/d/0B34j4qalEtJseHdNS1FRX0xKVGM/view?resourcekey=0-L2vbnBD7zasV7NsrSUX0GQ",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <>
    <Contactcontenu />
    <Assoc />
    <Elu />
    <Bulletin />
    </>
  );
}