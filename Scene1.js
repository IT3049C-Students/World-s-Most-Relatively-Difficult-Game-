class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

 preload() {
     this.load.image("tutorial", "Tiles/tutorial.png");
     this.load.image("coinobjective", "src/Sprites/coinobjective");
     this.load.image("enemy", "Sprites/enemy.png");
     this.load.image("player", "Sprites/player.png");
 }
create() {
    this.add.text( 20, 20, "Loading game...");
    this.scene.start("playGame");
}
update() {

}
}