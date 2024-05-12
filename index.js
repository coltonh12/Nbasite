document.addEventListener("DOMContentLoaded", function() {
    fetchNBAData();
});

async function fetchNBAData() {
    try {
        const response = await fetch("https://www.balldontlie.io/api/v1/players");
        const data = await response.json();
        displayPlayerStats(data.data); // Assuming data is an array of player objects
    } catch (error) {
        console.error("Error fetching NBA data:", error);
    }
}

function displayPlayerStats(playerStats) {
    const tbody = document.querySelector("#player-stats tbody");
    tbody.innerHTML = ""; // Clear previous data

    playerStats.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.first_name} ${player.last_name}</td>
            <td>${player.team.full_name}</td>
            <td>${player.height_feet}' ${player.height_inches}"</td>
            <td>${player.weight_pounds} lbs</td>
            <!-- Add more cells as needed -->
        `;
        tbody.appendChild(row);
    });
}

