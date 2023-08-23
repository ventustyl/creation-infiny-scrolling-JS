
# Projet de Scroll Infini avec Effet Parallax

Ce projet met en œuvre un exemple de défilement infini avec un effet de parallaxe utilisant des images provenant de l'API Pexels. Les fichiers JavaScript (`script.js`), CSS (`style.css`) et HTML (`index.html`) sont utilisés pour créer cette expérience de défilement fluide.

## Fonctionnalités

- Affichage de cartes avec un effet de parallaxe en utilisant des images de l'API Pexels.
- Chargement continu de nouvelles cartes à mesure que l'utilisateur défile.
- Utilisation de l'API Intersection Observer pour déclencher l'affichage des cartes lorsqu'elles deviennent visibles.

## Instructions d'utilisation

1. Obtenez une clé d'API Pexels en vous inscrivant sur leur site.
2. Ouvrez le fichier `script.js` et remplacez `'VOTRE_CLÉ_API_PEXELS'` par votre propre clé d'API Pexels.
3. Ouvrez le fichier `index.html` dans votre navigateur pour voir le défilement infini avec effet de parallaxe en action.

## Configuration requise

- Un navigateur web moderne compatible avec l'API Intersection Observer.

## Aperçu du Code

Le fichier `script.js` contient le code JavaScript qui interagit avec l'API Pexels et gère l'affichage des cartes. Le fichier `style.css` définit les styles pour le projet, y compris l'effet de parallaxe.

```javascript
// Extrait du code Javascript
function  loadNewCard() {
fetch(`https://api.unsplash.com/photos/random?page=${currentPage}`, {
headers: {
Authorization:  `Client-ID ${apiKey}`,
},
})
.then((response) =>  response.json())
.then((photo) => {
const  imageUrl  =  photo.urls.regular;
const  card  =  document.createElement("div");
card.classList.add("card");
const  image  =  new  Image();
image.src  =  imageUrl;
card.appendChild(image);
cardContainer.appendChild(card);
// ... (votre code JavaScript)
```
## Remarque
Suite au nombre de requête sur pexel j'ai du adapter mon projet avec du contenu perso car il limite a 50 req/h

## Auteur

Eric Venturino

## Licence

Ce projet est sous licence MIT
