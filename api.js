//Version Unsplash avec API mais limité a 50 requêtes :(

// const cardContainer = document.querySelector(".card-container");
// const apiKey = "la clé de l'API"; // Remplacez par votre clé d'API Unsplash

// let currentPage = 1;

// function loadNewCard() {
//   fetch(`https://api.unsplash.com/photos/random?page=${currentPage}`, {
//     headers: {
//       Authorization: `Client-ID ${apiKey}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((photo) => {
//       const imageUrl = photo.urls.regular;
//       const card = document.createElement("div");
//       card.classList.add("card");
//       const image = new Image();
//       image.src = imageUrl;
//       card.appendChild(image);
//       cardContainer.appendChild(card);

//       currentPage++; // Passe à la page suivante pour la prochaine requête
//       if (currentPage <= 10) {
//         loadNewCard(); // Charge une nouvelle image
//       }
//     })
//     .catch((error) =>
//       console.error("Erreur lors de la récupération de l'image", error)
//     );
// }

// const cards = document.querySelectorAll(".card");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("show", entry.isIntersecting);
//       if (entry.isIntersecting) observer.unobserve(entry.target);
//     });
//   },
//   {
//     threshold: 0.1,
//   }
// );

// const lastCardObserver = new IntersectionObserver(
//   (entries) => {
//     const lastCard = entries[0];
//     if (!lastCard.isIntersecting) return;
//     loadNewCard();
//     lastCardObserver.unobserve(lastCard.target);
//     lastCardObserver.observe(document.querySelector(".card:last-child"));
//   },
//   {
//     rootMargin: "100px",
//   }
// );

// lastCardObserver.observe(document.querySelector(".card:last-child"));

// cards.forEach((card) => {
//   observer.observe(card);
// });
