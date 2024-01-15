function getCardData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.npoint.io/6f9aaf65e77c0f901ba9", true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      } else {
        reject("Error loading data");
      }
    };

    xhr.onerror = () => {
      reject("Network Error!");
    };

    xhr.send();
  });
}

async function allCard() {
  document.getElementById("card-oops").innerHTML = "LOADING...";
  const cards = await getCardData();

  let cardlHTML = "";

  cards.forEach((value) => {
    cardlHTML += `<div class="card-oop">
                <img src="${value.image}" class="profile-card-oop" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`;
  });

  document.getElementById("card-oops").innerHTML = cardlHTML;
}

async function filterCard(rating) {
  document.getElementById("card-oops").innerHTML = "LOADING...";
  const cards = await getCardData();

  const filteredTestimonial = cards.filter((value) => value.rating === rating);

  if (!filteredTestimonial.length) {
    return (document.getElementById("card-oops").innerHTML =
      "<h1>Data not found!</h1>");
  }

  let filteredCardHTML = "";

  filteredTestimonial.forEach((value) => {
    filteredCardHTML += `<div class="card-oop">
                    <img src="${value.image}" class="profile-card-oop" />
                    <p class="quote">"${value.content}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`;
  });

  document.getElementById("card-oops").innerHTML = filteredCardHTML;
}

allCard();
