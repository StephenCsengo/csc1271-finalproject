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
    groundsLi.innerText = `Grounds: ${this.stadium.name}`;
    managerLi.innerText = `Manager: ${this.manager}`;
    let a = document.createElement("a");
    a.innerText = "Learn More";
    a.setAttribute("href", this.url);

    ul.appendChild(foundedLi);
    ul.appendChild(groundsLi);
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

fetch("https://stephencsengo.github.io/csc1271-finalproject/teams.json")
  .then((res) => res.json())
  .then((data) => {
    const teamData = data.teams;
    addCards(teamData);
  });

function addCards(teams) {
  console.log(teams);
  /*   for (let team of teams) {
    console.log(team);
  } */
  teams.forEach(function (team) {
    let cardHolder = document.querySelector(".team-cards");
    const card = new Card(
      team.name,
      team.logo,
      team.founded,
      team.stadium,
      team.manager,
      team.url
    );
    cardHolder.append(card.makeElement());
  });
}
