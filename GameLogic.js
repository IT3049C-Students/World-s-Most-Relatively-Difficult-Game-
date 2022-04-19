
//testing purposes
let game = new Phaser.Game(320,320)
    function preload(){
        game.load.spritesheet(`player`, "Sprites/player.png"),
        {framewidth: 32, frameheight: 32};
        game.load.spritesheet('enemy', "Sprites/enemy.png"),
        {framewidth: 32, frameheight: 32};
        game.load.spritesheet(`coinobjective`, "Sprites/coinobjective"),
        {framewidth: 32, frameheight:32};
        game.load,image(`tutorial`, `Tiles/tutorial.png`);
    }
    
    function create(){
        game.add.imgae(320,320, `tutorial`);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        player = game.add.sprite(400,400, `player`);
        enemy = game.add.sprite(250,250, 'enemy');
        cursors = game.input.keyboard.createCursorKeys();
    
    }

function update() {
    player.body.setZeroVelocity();

    if (cursors.left.isDown){
        player.body.moveLeft(150);
    }

    else if (cursors.right.isDown){
        player.body.moveRight(150);
    }

    if (cursors.up.isDown){
        player.body.moveUp(150);
    }

    else if (cursors.down,isDown){
        player.body.moveDown(150);
    }
}