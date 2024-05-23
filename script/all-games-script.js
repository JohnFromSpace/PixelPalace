document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("games-container");
    console.log(container);

    const images = [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
        "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg",
        "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg"
    ];
    const gameNames = [
        "Borderlands 2", "Dragonball Z", "Zelda", "Ghost Recon", "Sims4", "Tearaway", 
        "Age of Empires II", "The Witcher", "Past Cure", "Red Dead Redemption II", 
        "Call of Duty", "Final Fantasy VII", "Doom", "FarmVille", "Jedi", "Persona5", 
        "Bloodborne", "Daysgone", "Daysgone II", "NBA2K20", "Killzone", "Mortal Kombat II", 
        "Outer Worlds", "Fallout 4"
    ];

    function createGrid(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);

        for (let i = 0; i < (rows * cols); i++) {
            let gameCard = document.createElement('div');
            gameCard.className = 'game-card';

            let gameImg = document.createElement('img');
            gameImg.src = "img/games_logos/" + images[i];
            console.log(gameImg.src);
            gameCard.appendChild(gameImg);

            let gameName = document.createElement('p');
            let nameText = document.createTextNode(gameNames[i].toUpperCase());
            gameName.appendChild(nameText);
            gameCard.appendChild(gameName);

            let playButton = document.createElement('button');
            playButton.innerHTML = "PLAY NOW";
            playButton.className = "btn-play";
            playButton.onclick = function() { location.href = "game-screen.html"; };
            gameCard.appendChild(playButton);

            container.appendChild(gameCard);
        }
    }

    createGrid(6, 4);
});
