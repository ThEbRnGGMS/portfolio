# Portfolio V3 — Théo Béranger

Portfolio statique prêt pour GitHub Pages, en HTML, CSS et JavaScript natifs. Aucun build, aucune dépendance JS, aucun serveur nécessaire.

## Déploiement GitHub Pages

1. Décompresser l'archive ZIP.
2. Sur `https://github.com/ThEbRnGGMS/portfolio`, déposer **les fichiers à la racine du dépôt** : `index.html`, `style.css`, `script.js`, `favicon.svg`, `CV_TheoBeranger.pdf` (et éventuellement ce README).
3. Supprimer ou remplacer les anciens fichiers conflictuels si besoin ; valider le commit sur `main`.
4. Dans **Settings → Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/(root)**.
5. Patienter quelques minutes puis consulter `https://thebrnggms.github.io/portfolio/`.

## Fonctionnalités

- Accueil avec illustration SVG interactive, texte animé, particules interactives, halo, verre dépoli, tilt 3D, scroll reveals et intro.
- Thèmes clair/sombre enregistrés dans le navigateur et traduction FR/EN.
- Filtres de projets, études de cas en modales, chronologie, architecture réseau pédagogique interactive.
- Mini bureau Linux simulé, terminal avec commandes `help`, `whoami`, `skills`, `projects`, `experience`, `contact`, `date`, `ls`, `cat readme.txt`, `clear`, `sudo hire-me`, `game` ; mini-jeu « deviner le nombre ».
- Visite guidée recruteur, barre de progression, retour en haut, copie des coordonnées.
- Formulaire de contact : **ouvre un brouillon dans le logiciel e-mail du visiteur via `mailto:`**. Pas de backend ni de livraison garantie. Pour un envoi directement depuis le site, il faut configurer un service tiers avec votre consentement.
- Responsive et respect de `prefers-reduced-motion`.

## À personnaliser / vérifier

- L'avatar est **une illustration originale générique**, pas un portrait fidèle.
- Le CV joint est celui fourni. Vérifier qu'il est à jour avant publication : il comporte des coordonnées personnelles.
- Les projets sont fondés sur les missions mentionnées dans le CV ; **aucune capture ni métrique n'a été inventée**. Ajouter vos propres captures, liens vers dépôts et résultats mesurés lorsque disponibles.
- L'onglet « Cybersécurité » peut être vide : aucun projet spécifique de cybersécurité n'était documenté dans le CV.
- Le site utilise une police Google Fonts ; en l'absence de réseau, une police système est utilisée.
- Le terminal et le bureau sont des simulations locales : aucune commande système n'est exécutée.

## Tests rapides

Ouvrir `index.html` dans un navigateur, vérifier le menu mobile, la bascule EN/FR, le thème, les filtres, les fenêtres de projets, le terminal (`help`, `game`), le formulaire `mailto:` et le lien CV. Aucun besoin de serveur pour la plupart des fonctionnalités ; le presse-papiers peut nécessiter HTTPS.
