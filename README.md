# Template React avec Firebase

Ce template fournit une base pour démarrer rapidement un nouveau projet React avec Firebase, Tailwind CSS et une configuration de base.

## 🚀 Démarrage d'un nouveau projet

### 1. Cloner le template
```bash
git clone [URL_DU_REPO] nom-de-votre-projet
cd nom-de-votre-projet
```

### 2. Renommer le projet
```bash
node rename-project.js nom-de-votre-projet
```
Cette commande va :
- Mettre à jour le nom dans package.json
- Créer un fichier .env.local à partir de .env.example

### 3. Configuration Firebase
1. Ouvrez le fichier `.env.local`
2. Remplissez les variables avec vos informations Firebase :
```env
REACT_APP_FIREBASE_API_KEY=votre_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=votre_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=votre_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=votre_app_id
```

### 4. Installation des dépendances
```bash
npm install
```

### 5. Démarrer le projet
```bash
npm start
```

## 📁 Structure du projet

```
├── src/
│   ├── components/     # Composants React
│   ├── pages/         # Pages de l'application
│   ├── services/      # Services (Firebase, API, etc.)
│   ├── styles/        # Fichiers CSS et styles
│   ├── utils/         # Fonctions utilitaires
│   ├── App.tsx        # Composant principal
│   └── index.tsx      # Point d'entrée
├── public/            # Fichiers statiques
├── .env.example       # Template pour les variables d'environnement
├── .env.local         # Variables d'environnement (non commité)
├── tailwind.config.js # Configuration Tailwind CSS
└── package.json       # Dépendances et scripts
```

## 🛠 Technologies utilisées

- React
- TypeScript
- Firebase
- Tailwind CSS
- PostCSS
- Autoprefixer

## 📝 Notes importantes

- Le fichier `.env.local` n'est pas commité pour des raisons de sécurité
- Toujours utiliser le script `rename-project.js` pour renommer le projet
- Les variables d'environnement doivent commencer par `REACT_APP_`

## 🔧 Scripts disponibles

- `npm start` : Démarre le serveur de développement
- `npm build` : Crée une version de production
- `npm test` : Lance les tests
- `npm run eject` : Éjecte la configuration Create React App

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request
