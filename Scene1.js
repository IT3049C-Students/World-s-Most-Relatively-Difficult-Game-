class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1")
    }

preload() {
    this.load.image(`tutorial`, `tiles/tutorial.png`);
    this.load.spritesheet(`player`, "Sprites/player.png"),
        {framewidth: 32, frameheight: 32};
    this.load.spritesheet('enemy', "Sprites/enemy.png"),
        {framewidth: 32, frameheight: 32};
    this.load.spritesheet(`coinobjective`, "Sprites/coinobjective"),
        {framewidth: 32, frameheight:32};

        let scoreCount = 0;
    //this.wallsLayer.setCollisionByProperty({ collides: true});
}
create() {
    const map = this.make.tilemap({key:"map", tileWidth: 32, tileHeight: 32});
    const tileset = map.addTilesetImage("wholesheet1", "tiles");
    const layer = map.createLayer("Ground", tileset, 0, 0);
    const layer2 = map.createLayer("Walls", tileset, 0, 0);
    this.add.image(320,320, `tutorial`);

    this.physics.startSystem(Phaser.Physics.ARCADE);
    player = this.add.sprite(100,100, `player`);
    enemy = this.add.sprite(250,250, 'enemy');
    cursors = this.input.keyboard.createCursorKeys();
//this.physics.add.collider(this.player, this.wallsLayer);
}
update() {

}
}
export default Scene1;