



const loadClubName = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value ='';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showTeamInfo(data.teams))
}
const showTeamInfo = (teams) =>{
    const teamSpinner = document.getElementById('spinner');
    teamSpinner.style.display ='block';
    const teamContainer = document.getElementById('team_container');
    teamContainer.textContent ='';
    teams.forEach(team =>{

        const div = document.createElement('div')
        div.classList.add('team-card');
        div.innerHTML = `
                <img class ="img-fluid" src =${team.strTeamBadge}>
                <h4 class="bg-primary my-2 p-2 text-center">Team Name: ${team.strTeam}</h4>
                <h5 class ="bg-danger text-center p-2">Country: ${team.strCountry}</h5>
                <button onclick="loadTeamDetails(${team.idTeam})" class="team-button">Details</button>
        `;
        teamContainer.appendChild(div)
    });
};

const loadTeamDetails = teamId =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
    .then(res => res.json())
    .then( data => showTeamDetail(data.teams[0]))
};

const showTeamDetail = teamInfo =>{
    console.log(teamInfo);
    const teamDetailsContainer = document.getElementById('team_details');
    teamDetailsContainer.textContent =''
    const teamDiv = document.createElement('div')
    teamDiv.classList.add('single-team-detail')
    teamDiv.innerHTML =`
        <img src="${teamInfo.strTeamJersey}">
        <p>${teamInfo.strStadiumDescription}</p>
        <h4>Gender: ${teamInfo.strGender}</h4>
        <h4>League: ${teamInfo.strLeague}</h4>
        <h4>League: ${teamInfo.strStadium}</h4>
       
    `;
    teamDetailsContainer.appendChild(teamDiv)
}
