# Nestflux 🎬

Nestflux - Netflix Clone (Static Version)
Bienvenue sur Nestflux, une version statique simplifiée de Netflix développée en JavaScript. Ce projet inclut une gestion d'authentification sécurisée (hachage des mots de passe) et un déploiement automatisé via GitHub Actions.

🚀 Fonctionnalités
Page d'accueil : Interface immersive inspirée de Netflix.

Inscription (Sign-Up) : Création de compte avec hachage du mot de passe via `bcryptjs`.

Connexion (Sign-In) : Authentification sécurisée en comparant les empreintes (hashs) stockées.

Gestion du Profil : Espace utilisateur et configuration stockés dans le localStorage.

Multi-pages : Navigation fluide entre l'authentification et l'application.

🛠️ Installation & Développement Local
Pour faire tourner ce projet sur ton ordinateur (notamment sous WSL/Linux) :

Cloner le dépôt :

```bash

git clone https://github.com/SnoXx83/nestflux.git
cd nestflux

npm install

```

Lancer le serveur de développement (Vite) :

```bash

npx run dev
Accède ensuite à http://localhost:5173.

```

📦 Dépendances du projet
Voici les outils nécessaires installés via npm :

Production :

bcryptjs : Pour sécuriser les mots de passe avant le stockage dans le navigateur.

Développement :

vite : Serveur de développement ultra-rapide et outil de build.

path : Pour la gestion des chemins dans la configuration.


🏗️ Structure du Projet
Plaintext

```bash

nestflux/
├── .github/workflows/
│   └── deploy.yml          # CI/CD: Automated build and deployment
├── src/
│   ├── Auth/               # Authentication module
│   │   ├── SigninPage.html # Login interface
│   │   ├── SignupPage.html # Registration interface
│   │   └── Authscript.js   # Authentication logic & hashing
│   ├── user/               # User-related features
│   │   ├── Profile/        # Dedicated Profile folder
│   │   │   ├── Profile.html # User settings page
│   │   │   └── profile.js  # Profile edit logic (Bcrypt validation)
│   │   ├── Session.html    # Profile selection screen
│   │   └── Session.js      # Session management logic
│   ├── Animations/         # UI & Visual effects
│   │   └── Ui.js           # Shared UI functions (displayMessage)
├── index.html              # Main application entry point
├── main.js                 # Core logic and global initialization
├── vite.config.js          # Vite multi-page configuration
└── package.json            # Project dependencies and scripts

```

🌐 Déploiement
Ce projet est déployé automatiquement sur GitHub Pages. À chaque git push sur la branche main, une GitHub Action :

Installe les dépendances Node.js.

Compile le projet (npm run build).

Publie le dossier /dist final.
