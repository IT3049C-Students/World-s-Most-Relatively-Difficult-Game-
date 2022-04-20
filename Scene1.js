class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    // preload() {
    //     this.load.image('tutorial', 'Tiles/tutorial.png');
    //     this.load.spritesheet("coinobjective", "Sprites/coinobjective");
    //     this.load.spritesheet("enemy", "Sprites/enemy.png");
    //     this.load.spritesheet("player", "Sprites/player.png");
    // }
    create() {
        this.add.text(20,20, "Loading Game...");
        // this.scene.start("playGame");
    }
}