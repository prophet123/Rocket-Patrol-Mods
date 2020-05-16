class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('bgmusic', './assets/pianoonly.wav');
        this.load.image('SStarfield', './assets/starfield.jpg');
    }

    create() {
        // menu display
        let bgmusic = this.sound.add('bgmusic')
            bgmusic.play({
            volume: .3,
            loop: true
          })
            

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#84254a',
            color: '#419c99',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

    
        }


        let highScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#e8b072',
            color: '#ff6ae5',
            align: 'right',
            padding: {
                top: 3,
                bottom: 3,
            },
            fixedWidth: 200
        }
    
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'SStarfield').setOrigin(0, 0);
        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- 3*textSpacer, 'ROCKET PATROL: Mods, Enjoy!', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - 2*textSpacer, 'High Score:' + highScore, menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#46637b';
        menuConfig.color = '#de80ff';
        this.add.text(centerX, centerY + 2*textSpacer, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 2,
                fastshipSpeed: 6,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                fastshipSpeed: 8,
                gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
    }
}