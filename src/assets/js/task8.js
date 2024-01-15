const testimonials = [
  {
    author: "5Surya Elidanto",
    content: "Siplah oke",
    image:
      "https://source.unsplash.com/360x200?worker",
    rating: 5,
  },
  {
    author: "4Renaldi",
    content: "Apasih bang",
    image:
      "https://source.unsplash.com/360x200?worker",
    rating: 4,
  },
  {
    author: "3Fandi",
    content: "Mantap bro",
    image:
      "https://source.unsplash.com/360x200?worker",
    rating: 3,
  },
  {
    author: "2Orang baru",
    content: "Mantap bro",
    image:
      "https://source.unsplash.com/360x200?worker",
    rating: 2,
  },
  {
    author: "1Orang baru",
    content: "Mantap bro",
    image:
      "https://source.unsplash.com/360x200?worker",
    rating: 1,
  },
];

function allTestimonial() {
  const testimonialHTML = testimonials.map((value) => {
    return `<div class="card-oop">
                <img src="${value.image}" class="profile-card-oop" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`;
  });

  document.getElementById("card-oops").innerHTML = testimonialHTML.join(" ");
}

function filterTestimonial(rating) {
  const filteredTestimonial = testimonials.filter(
    (value) => value.rating === rating
  );

  const filteredTestimonialHTML = filteredTestimonial.map((value) => {
    return `<div class="card-oop">
                <img src="${value.image}" class="profile-card-oop" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`;
  });

  document.getElementById("card-oops").innerHTML =
    filteredTestimonialHTML.join(" ");
}

allTestimonial();
