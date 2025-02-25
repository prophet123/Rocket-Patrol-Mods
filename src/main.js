let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    fastshipSpeed: 5,
    gameTimer: 60000   
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;


//highscore var 
let highScore = 0;