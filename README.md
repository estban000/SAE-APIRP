# Consigne SAE 4.01

Date butoir : **10 avril 2025 - 18 h 00 (CET)**

Modalité de rendu par e-mail : michele.linardi@cyu.fr (1 rendu par groupe + court rapport du travail).  

## Modalité de travail :

Groupe de deux/trois personnes max. 

## Objectifs :  

L’objectif de la SAE est d’améliorer l’application REACT qui contient l’implémentation du frontend du site APIRP (Association de professeures d’Italien des lycées d’l’Ile de France). Le cahier de charge du site se trouve dans le fichier CAHIER_SITE_APIRP.pdf Utilisez-le pour avoir toutes les infos. 

**ATTENTION** Le cahier de charges ne doit pas etre considéré comme une liste de tache à faire, mais plutôt comme une source d’inspiration pour comprendre les besoins fonctionnels de l’association et les attentes en terme d’UI et UX. Dans ce projet, nous vous demandons aussi de concevoir la page DIVERS et d'y ajouter une fonctionnalité (seulement la partie FRONTEND) parmi les suivantes :   
- **Transférer le site web dans le framework Remix et ajouter (section adhérer) un formulaire pour l’inscription des adhérents à l’association. (voir FICHE ADHESION.pdf) et prévoir la partie pour le payement en ligne (bouton PayPal ou similaire).** 
- Transférer le site web dans le framework Remix et préparer une section (dans la page Divers) pour la gestion (ajout/modification/suppression) des activités affichées dans la 
page d’accueil. 
- Transférer le site web dans le framework Remix et ajouter une section pour l’affichage des comptes rendus de réunion et une partie pour ajouter des questions (style forum). 
Pour effectuer votre travail, vous devriez impérativement individuer et utiliser des composants déjà prêts dans des frameworks disponibles ou dans des bibliothèques gratuites en 
ligne. 

## Liens utiles (REACT Components) : 
- https://github.com/hungvancap/socialMedia?ref=reactjsexample.com 
- https://reactjsexample.com/a-social-media-web-app-made-with-react-and-mysql/ 
- https://mui.com/material-ui/getting-started/templates    
- https://chonky.io/  
- https://www.wearedevelopers.com/magazine/best-free-react-ui-libraries 
- ... 
 
Pour lancer le site (application crée par la bias de Create React App ) vous devez utiliser les 
bibliothèques react-scripts : https://www.npmjs.com/package/react-scripts 

  
# Formulaire d'adhésion
- Identité
    - nom
    - prénom
    - Adresse (n°, rue, code postal, ville)
    - téléphone
    - email
- Etablissement
    - nom
    - radio (privé/public)
- Situation 
    - Souhaite renouveler son adhésion à l'APIRP pour l'année scolaire [...]
    - Souhaite adhérer pour la première fois à l'APIRP pour l'année scolaire [...]
    - Vous prie de changer le changement de coordonées
    - Ne fera plus partie de l'APIRP à dater du [...]

    - montant de la cotisation
        - 23€ cotisation normale
        - 30€ cotisation de soutien

    - autorise l'APIRP à transmettre mes coordonées aux instances institutionelles (Ambassades italienne, Consulat italien, institut culturel italien) OUI | NON

- Date
- Signature

- Bouton Paiement



# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
