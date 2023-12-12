const path = window.location.pathname;
teamUrl = path.substring(path.lastIndexOf("/") + 1);
console.log(teamUrl);

fetch("https://stephencsengo.github.io/csc1271-finalproject/teams.json")
  .then((res) => res.json())
  .then((data) => {
    const allTeamData = data.teams;
    const teamData = allTeamData.find((team) => team.url === `/${teamUrl}`);
    const players = teamData.players;
    console.log(teamData);
    console.log(teamData.players);
    addNavItems(allTeamData);
    addTitle(teamData.name, teamData.website, teamData.titles);
    addPlayers(players);
    addAddress(teamData.stadium);
  });

function addNavItems(teams) {
  const dropdown = document.querySelector(".dropdown");
  for (team of teams) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = team.name;
    a.setAttribute("href", `.${team.url}`);
    li.appendChild(a);
    dropdown.appendChild(li);
  }
}

function addTitle(team, link, titles) {
  //Add h1, link to official site
  const titleDiv = document.querySelector(".team-view-title");
  let h1 = document.createElement("h1");
  let a = document.createElement("a");
  h1.innerText = `${team} Team Information`;
  a.innerText = `Visit The Official Team Website`;
  a.setAttribute("href", `${link}`);
  titleDiv.appendChild(h1);
  titleDiv.appendChild(a);

  //Conditionally add titles won
  if (titles !== null) {
    let p = document.createElement("p");
    p.setAttribute("class", "titles");
    p.innerText = "Premier League Champions in: ";
    for (title of titles) {
      const year = document.createTextNode(`${title} `);
      p.append(year);
    }
    titleDiv.appendChild(p);
  }

  //Add title to player table
  const caption = document.querySelector("#team caption");
  caption.innerText = `${team} First-Team Players`;

  //Add title to stadium section
  const stadium = document.querySelector(".stadium-title");
  let h2 = document.createElement("h2");
  h2.innerText = `${team} Stadium Information`;
  stadium.appendChild(h2);
}
function addPlayers(players) {
  const table = document.querySelector("#team tbody");
  players.forEach(function (player) {
    const row = table.insertRow(-1);
    const number = row.insertCell(0);
    const name = row.insertCell(1);
    const position = row.insertCell(2);
    number.innerText = player.Number;
    name.innerText = player.Name;
    position.innerText = player.Position;
  });
}

function addAddress(stadium) {
  const address = document.querySelector("address");
  const stadiumName = stadium.name;
  const street = stadium.address.street;
  const city = stadium.address.city;
  const zip = stadium.address.zip;
  address.append(
    stadiumName,
    document.createElement("br"),
    street,
    document.createElement("br"),
    city,
    document.createElement("br"),
    zip
  );
}
