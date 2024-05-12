// Add JavaScript below
document.addEventListener("DOMContentLoaded", function() {
    fetchNBAData();
});

async function fetchNBAData() {
    try {
        const response = await fetch("YOUR_NBA_API_ENDPOINT_HERE");
        const data = await response.json();
        displayPlayerStats(data); // Assuming data is an array of player stats objects
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
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.points}</td>
            <td>${player.rebounds}</td>
            <td>${player.assists}</td>
            <!-- Add more cells as needed -->
        `;
        tbody.appendChild(row);
    });
}
