const cardContainer = document.querySelector(".card-container");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];
    if (lastCard.isIntersecting) {
      loadNewCards();
      lastCardObserver.unobserve(lastCard.target);
      lastCardObserver.observe(document.querySelector(".card:last-child"));
    }
  },
  {
    rootMargin: "100px",
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards() {
  for (let i = 0; i < 2; i++) {
    // Load 2 new cards at a time
    const card = document.createElement("div");
    card.classList.add("card");
    const randomImageNumber = getRandomImageNumber();
    const imageUrl = `https://lelabderic.fr/projet/projet_15/img/Game-fantasy%20(${randomImageNumber}).webp`;

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = `Image ${randomImageNumber}`;

    card.appendChild(imageElement);
    cardContainer.appendChild(card);
    observer.observe(card);
  }
}

function getRandomImageNumber() {
  const minImageNumber = 1;
  const maxImageNumber = 2145;
  return (
    Math.floor(Math.random() * (maxImageNumber - minImageNumber + 1)) +
    minImageNumber
  );
}
