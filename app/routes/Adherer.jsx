import React from 'react';
import Hero from './Hero'; // Assure-toi d'importer le composant Hero correctement
import './style/Adherer.css'; // Importe le fichier CSS pour le composant Adherer
// import FicheAdhesionPDF from '../assets/fiche_adhesion.pdf';
import adhererImg from './img/img-adherer.png'; // Chemin vers ton image
import heroImage from './img/drapeau_italie.jpg';
import Input from './Elements/ElementFormulaire';

const Adherer = () => {
    const title = "Adhérer à notre association";
    const description = "Bienvenue sur notre page d'adhésion. Découvrez les avantages de devenir membre de notre association.";
    const buttonText = "Commencer";

    const handleScrollToContent = () => {}
        // Fonction pour faire défiler la page vers la partie suivante

    const handleScrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="adherer-container">
            <Hero
                title={title}
                description={description}
                buttonText={buttonText}
                heroImage= {heroImage}
                scrollTo={handleScrollToContent}
            />

            <div className="adherer-content1">
                
                <img src={adhererImg} alt="Adherer Image" className="adherer-image" />

                <div className="txt-content">
                    <h2 className='h2'>Pourquoi adhérer ?</h2>
                    <h3 className='h3'>Adhérer à l'A.P.I.R.P. vous permet de :</h3>
                    <ol className='custom-ol ol'>
                            <li >Participer activement aux assemblées générales.</li>
                            <li>Recevoir chaque année le bulletin imprimé de l’association et des plaquettes gratuites pour la promotion de l’italien.</li>
                            <li>
                                Soutenir des initiatives visant à promouvoir l’enseignement de l’italien en île-de-France, telles que :
                                <ul className='ul'>
                                    <li>- La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;</li>
                                    <li>- La création et l’impression de plaquettes pour la promotion de l’italien ;</li>
                                    <li>- Notre participation à des manifestations et des événements culturels tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc.</li>
                                </ul>
                            </li>
                            <li>Connaître le réseau des professeurs d’italien de la Région Parisienne.</li>
                            <li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li>
                            <li>Bénéficier de l'union qui fait la force ; l'A.P.I.R.P. est un moyen de ne pas rester isolé et de favoriser des échanges actifs sur notre métier.</li>
                    </ol>
                </div>
            </div>
{/* Formulaire d'adhésion à l'association. */}
            <div className="adherer-content2">
                <h2 className='h2'>Qui peut adhérer à l’association ?</h2>
                <p className='p'>Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.</p>
                <h3 className='h3'>Comment y adhérer ?</h3>
                <p className='p'>Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.</p>
                <div id='formulaire-adhesion'>
                    <form action='#'>
                        <fieldset>
                            <legend>Identité</legend>
                            <Input id={"nom"} nom={"Nom"} type={"text"}></Input>
                            <Input id={"prenom"} nom={"Prénom"} type={"text"}></Input>
                            <div className="input">
                                <label htmlFor="adresse">Adresse</label>
                                <textarea name="adresse" id="adresse"></textarea>
                            </div>
                            <Input id={"telephone"} nom={"Téléphone"} type={"tel"}></Input>
                            <Input id={"email"} nom={"Adresse email"} type={"email"}></Input>
                        </fieldset>
                        <fieldset>
                            <legend>Établissement</legend>
                            <Input id={"etablissement"} nom={"Établissement"} type={"text"}></Input>
                            <fieldset>
                                <legend>Type</legend>
                                <div className="input">
                                    <div>
                                        <input type="radio" name="type" id="public" value="public"/>
                                        <label htmlFor="public">Public</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="type" id="prive" value="prive"/>
                                        <label htmlFor="prive">Privé</label>
                                    </div>
                                </div>
                            </fieldset>
                        </fieldset>
                        <fieldset>
                            <legend>Adhésion</legend>
                            <fieldset>
                                <legend>Je ...</legend>
                                <div className="input">
                                    <div>
                                        <input type="radio" name="adhesion" id="renouveler" value="renouveler"/>
                                        <label htmlFor="renouveler">... souhaite renouveler son adhésion à l'APIRP pour l'année scolaire à suivre</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="adhesion" id="adherer" value="adherer"/>
                                        <label htmlFor="adherer">... souhaite adhérer pour la première fois à l'APIRP, pour l'année scolaire à suivre</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="adhesion" id="changer" value="changer"/>
                                        <label htmlFor="changer">... vous prie de noter le changement de coordonées</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="adhesion" id="quitter" value="quitter"/>
                                        <label htmlFor="quitter">... ne ferais plus partie de l'APIRP à compter de demain</label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Montant de la cotisation</legend>
                                <div className="input">
                                    <div>
                                        <input type="radio" name="cotisation" id="normale" value="normale"/>
                                        <label htmlFor="normale">23€ - cotisation normale</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="cotisation" id="soutien" value="soutien"/>
                                        <label htmlFor="soutien">30 € - cotisation de soutien</label>
                                    </div>
                                </div>
                            </fieldset>
                            <div>
                                <input type="checkbox" name="autorisaton" id="autorisaton" />
                                <label htmlFor="autorisation">J'autorise l'APIRP à transmettre mes coordonées aux instances institutionelles (Ambassades italienne, Consulat italien, institut culturel italien)</label>
                            </div>
                        </fieldset>
                        <button type="submit">Valider</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Adherer;