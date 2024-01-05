class CardOop {
  #author = "";
  #image = "";
  #content = "";

  constructor(author, image, content) {
    this.#author = author;
    this.#image = image;
    this.#content = content;
  }

  set author(val) {
    this.#author = val;
  }

  set image(val) {
    this.#image = val;
  }

  set content(val) {
    this.#content = val;
  }

  get author() {
    return this.#author;
  }

  get image() {
    return this.#image;
  }

  get content() {
    return this.#content;
  }

  html() {
    throw new Error("You must choose as author or company");
  }
}

class AuthorCardOop extends CardOop {
  html() {
    return `<div class="card-oop">
            <img src="${this.image}" class="profile-card-oop" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author}</p>
        </div>`;
  }
}

class CompanyCardOop extends CardOop {
  html() {
    return `<div class="card-oop">
            <img src="${this.image}" class="profile-card-oop" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author} Company</p>
        </div>`;
  }
}

const card1 = new AuthorCardOop(
  "Surya Elidanto",
  "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "Mantap sekali jasanya!"
);
const card2 = new AuthorCardOop(
  "Renaldi",
  "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Apasih bang?!"
);
const card3 = new CompanyCardOop(
  "Jafar",
  "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Okelah bang"
);

const testimonials = [card1, card2, card3]; // length => 3
let cardHTML = "";

for (let index = 0; index < CardOop.length; index++) {
  cardHTML += testimonials[index].html();
}

document.getElementById("card-oops").innerHTML = cardHTML;
