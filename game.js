const games = [
    {
        title: "Space Adventure",
        developer: "Galactic Games",
        releaseDate: "2023-03-15",
        description: "Explore distant planets and unravel the mysteries of the universe in this thrilling space adventure game.",
        price: 59.99,
        genre: "adventure",
        rating: 5,
        platform: ["PC", "PS5"],
        imageUrl: "./images/game1.jpg"
    },
    {
        title: "Fast Lane Racing",
        developer: "Speedster Studios",
        releaseDate: "2022-11-22",
        description: "Experience high-speed racing action on tracks around the world. Customize your cars and compete against others for the championship.",
        price: 49.99,
        genre: "Action",
        rating: 4,
        platform: ["PC", "PS5", "Xbox Series X"],
        imageUrl: "./images/game2.jpg"
    },
    {
        title: "Mystery Manor",
        developer: "PuzzleCraft",
        releaseDate: "2024-01-05",
        description: "Solve puzzles and uncover secrets in the eerie Mystery Manor. Can you solve the mystery before it's too late?",
        price: 29.99,
        genre: "simulation",
        rating: 4,
        platform: ["PC", "Nintendo Switch"],
        imageUrl: "./images/game3.jpg"
    },
    {
        title: "Zombie Apocalypse",
        developer: "Survival Games",
        releaseDate: "2023-10-31",
        description: "Fight for survival in a world overrun by zombies. Gather resources, build shelters, and defend against the undead.",
        price: 39.99,
        genre: "action",
        rating: 5,
        platform: ["PC", "PS5", "Xbox Series X"],
        imageUrl: "./images/game4.jpg"
    },
    {
        title: "Fantasy Quest",
        developer: "Epic Journeys",
        releaseDate: "2023-04-20",
        description: "Embark on a quest through a magical world filled with dragons, wizards, and quests. Your adventure awaits!",
        price: 59.99,
        genre: "simulation",
        rating: 5,
        platform: ["PC", "PS5", "Xbox Series X", "Nintendo Switch"],
        imageUrl: "./images/game5.jpg"
    },
    {
        title: "Cybernetic Wars",
        developer: "Futuristic Games",
        releaseDate: "2023-07-18",
        description: "In a dystopian future, lead your faction to victory in strategic battles across cybernetic landscapes.",
        price: 59.99,
        genre: "adventure",
        rating: 4,
        platform: ["PC", "PS5"],
        imageUrl: "./images/game6.jpg"
    },
    {
        title: "Underwater Odyssey",
        developer: "Aqua Explorers",
        releaseDate: "2022-12-12",
        description: "Dive into the depths of the ocean and discover hidden treasures and ancient secrets in this underwater exploration game.",
        price: 39.99,
        genre: "simulation",
        rating: 4,
        platform: ["PC", "Nintendo Switch"],
        imageUrl: "./images/game7.jpg"
    },
    {
        title: "Castle Defender",
        developer: "Medieval Games",
        releaseDate: "2023-02-28",
        description: "Defend your castle from invading forces using strategic placements of towers and troops in this medieval strategy game.",
        price: 29.99,
        genre: "adventure",
        rating: 3,
        platform: ["PC", "PS5", "Xbox Series X"],
        imageUrl: "./images/game8.jpg"
    },
    {
        title: "Street Soccer Championship",
        developer: "Urban Sports",
        releaseDate: "2023-05-30",
        description: "Take to the streets in this fast-paced soccer game. Compete in tournaments around the world and become the street soccer champion.",
        price: 49.99,
        genre: "sports",
        rating: 4,
        platform: ["PC", "PS5", "Xbox Series X", "Nintendo Switch"],
        imageUrl: "./images/game9.jpg"
    },
    {
        title: "Galactic Conquerors",
        developer: "Space Strategy",
        releaseDate: "2023-08-25",
        description: "Command a fleet of starships and conquer the galaxy in this epic space strategy game. Negotiate alliances, battle enemies, and explore new worlds.",
        price: 59.99,
        genre: "sports",
        rating: 5,
        platform: ["PC", "PS5"],
        imageUrl: "./images/game10.jpg"
    }
];


function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

function displayGames(filter = {}) {
    const { platform, maxPrice, genre } = filter;
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = ''; // Clear current games list

    const filteredGames = games.filter(game => 
        (platform === undefined || game.platform.includes(platform)) &&
        (maxPrice === undefined || game.price <= maxPrice) &&
        (genre === undefined || game.genre === genre)
    );

    filteredGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');
        gameElement.innerHTML = `
        <div class="game-image" style="background-image: url('${game.imageUrl}');"></div>
        <div class="game-info">
            <h3>${game.title}</h3>
            <p>${game.genre} - $${game.price}</p>
            <button onclick="viewGameDetails('${game.title}')">View Details</button>
        </div>
        `;
        gamesList.appendChild(gameElement);
    });
}

function viewGameDetails(title) {
    const game = games.find(g => g.title === title);
    if (!game) return;

    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = `
        <div class="game-detail">
            <img src="${game.imageUrl}" alt="${game.title}">
            <h2>${game.title}</h2>
            <p><strong>Developer:</strong> ${game.developer}</p>
            <p><strong>Release Date:</strong> ${game.releaseDate}</p>
            <p><strong>Description:</strong> ${game.description}</p>
            <p><strong>Price:</strong> $${game.price}</p>
            <p><strong>Genre:</strong> ${game.genre}</p>
            <p><strong>Rating:</strong> ${game.rating} stars</p>
            <p><strong>Platform:</strong> ${game.platform.join(', ')}</p>
            <span class="back-button" onclick="applyFilters()">Back to Search Results</span>
        </div>
    `;
}

function addNewGame() {
    const title = document.getElementById('gameTitle').value;
    const price = parseFloat(document.getElementById('gamePrice').value);
    const developer = document.getElementById('developer').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const rating = parseInt(document.getElementById('rating').value);
    const genre = document.getElementById('genre').value;
    
    const platforms = Array.from(document.getElementById('platform').options).filter(option => option.selected).map(option => option.value);

    if (rating < 1 || rating > 5) {
        alert('Rating must be between 1 and 5.');
        return;
    }

    const newGame = {
        title,
        developer,
        releaseDate,
        description: 'Add a description field in your form to capture this', 
        price,
        genre,
        rating,
        platforms,
        imageUrl: '/assets/default.jpg' 
    };

    games.push(newGame);
    localStorage.setItem('games', JSON.stringify(games));
    alert('Game added successfully!');
    location.reload(); 
}

function applyFilters() {
    const platform = document.getElementById('platformSelect').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const genre = document.getElementById('genreSelect').value;

    displayGames({
        platform: platform !== '' ? platform : undefined,
        maxPrice: maxPrice !== '' ? parseFloat(maxPrice) : undefined,
        genre: genre !== '' ? genre : undefined,
    });
}

document.getElementById('filterButton').addEventListener('click', applyFilters);

// Initially display all games
displayGames();