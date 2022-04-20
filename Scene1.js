class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

 preload() {
     this.load.image("tutorial", "Tiles/tutorial.png");
//     this.load.spritesheet("coinobjective", "src/Sprites/coinobjective");
//     this.load.spritesheet("enemy", "src/Sprites/enemy.png");
//     this.load.spritesheet("player", "src/Sprites/player.png");
 }
create() {
    this.add.text( 20, 20, "Loading game...");
    this.scene.start("playGame");
}
update() {

}
}