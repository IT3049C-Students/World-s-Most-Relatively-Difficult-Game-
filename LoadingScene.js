class LoadingScene extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

preload() {
    this.preload.image("tutorial", "src/Json/tutorial.png");
    this.load.spritesheet("coinobjective", "src/Sprites/coinobjective");
    this.load.spritesheet("enemy", "src/Sprites/enemy.png");
    this.load.spritesheet("player", "src/Sprites/player.png");
}
create() {
    this.scene.start("Scene1");
    this.add.image( 320, 320, "tutorial");
}
update() {

}
}