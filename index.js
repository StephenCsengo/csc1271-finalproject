class Card {
  constructor(name, logo, founded, stadium, manager, url) {
    this.name = name;
    this.logo = logo;
    this.founded = founded;
    this.stadium = stadium;
    this.manager = manager;
    this.url = url;
  }
  makeElement() {
    let card = document.createElement("article");
    card.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = this.logo;
    let div = document.createElement("div");
    div.setAttribute("class", "card-content");
    let h2 = document.createElement("h2");
    h2.innerText = this.name;
    let h3 = document.createElement("h3");
    h3.innerText = `Details:`;
    let ul = document.createElement("ul");
    let foundedLi = document.createElement("li");
    let groundsLi = document.createElement("li");
    let managerLi = document.createElement("li");
    foundedLi.innerText = `Founded: ${this.founded}`;
    groundsLi.innerText = `Grounds: ${this.stadium}`;
    managerLi.innerText = `Manager: ${this.manager}`;
    let a = document.createElement("a");
    a.innerText = "Learn More";
    a.setAttribute("href", this.url);

    ul.appendChild(foundedLi);
    ul.appendChild(groundsLiLi);
    ul.appendChild(managerLi);

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(ul);
    div.appendChild(a);
    card.append(img);
    card.appendChild(div);

    return card;
  }
}

fetch(
  "https://github.com/StephenCsengo/csc1271-finalproject/blob/main/teams.json"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
