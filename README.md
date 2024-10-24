
# Job Board Epi'D'Maïs

## À propos

Ce projet est un site moderne de job board construit avec AdonisJS, un puissant framework web Node.js. Il fournit une plateforme pour que les employeurs publient des offres d'emploi et pour que les chercheurs d'emploi trouvent et postulent à des opportunités.

## Fonctionnalités

- Authentification utilisateur (chercheurs d'emploi et employeurs)
- Publication et gestion des offres d'emploi pour les employeurs
- Recherche avancée et filtrage des offres d'emploi pour les chercheurs d'emploi
- Soumission et suivi des candidatures
- Panneau d'administration pour la gestion du site
- Design responsive pour mobile et desktop

## Technologies utilisées

- [AdonisJS](https://adonisjs.com/) - Le framework Node.js
- [MySQL](https://www.mysql.com/) - Base de données
- [Lucid ORM](https://docs.adonisjs.com/guides/database/introduction) - ORM de base de données
- [Inertia.js](https://inertiajs.com/) - Framework pour applications monopages 
- [React](https://reactjs.org/) - Bibliothèque JavaScript pour construire des interfaces utilisateur
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

## Prérequis

- Node.js (v20 ou version ultérieure)
- npm ou yarn
- Docker (ou MySQL, si vous ne voulez pas utiliser docker)

## Installation

1. Clonez le dépôt :
```text
git clone git@github.com:EpitechMscProPromo2027/T-WEB-501-REN_12.git
```
2. Naviguez dans le répertoire du projet :
```
cd T-WEB-501-REN_12
```
3. Installez les dépendances :
```
npm i
```
4. Copiez le fichier `.env.example` en `.env`
```
cp .env.example .env
```
5. Configurez vos variables d'environnement
6. Ajoutez une clé d'application:
```
node ace generate:key
```
7. Démarrez la base de donnée (la commande suivante s'applique si vous utilisez le conteneur docker intégré)
```
docker compose up -d
```
8. Exécutez les migrations de la base de données :
```
node ace migration:run
```
9.  Appliquez les valeurs initiales de la base de données
```
node ace db:seed
```
10. Lancez le serveur:
```
node ace serve --hmr
```
