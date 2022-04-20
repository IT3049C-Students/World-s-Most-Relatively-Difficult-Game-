let gameSettings= {
    playerSpeed: 100,
}

let config = {
    width: 320,
    height: 320,
    backgroundcolor: 0x000000,
    scene: [Scene1,Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            debugShowVelocity: false
        }
    }
}
//testing purposes
let game = new Phaser.Game(config);

