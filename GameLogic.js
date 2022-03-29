
//testing purposes
let game = new Phaser.Game(800, 800, Phaser.CANVAS, 
    'phaser-example', { preload: preload, create: create, update: update });

function preload(){
    game.load.image(`player`,  `sprites/player.png`);
}

function create(){
    game.physics.startSystem(Phaser.Physics.P2JS);
    
    player = game.add.sprite(400,400, `player`);
    
    cursors = game.input.keyboard.createCursorKeys();

}


function move() {
    player.body.setZeroVelocity();

    if (cursors.left.isDown){
        player.body.moveLeft(150);
    }

    else if (cusrors.right.isDown){
        player.body.moveRight(150);
    }

    if (cursors.up.isDown){
        player.body.moveUp(150);
    }

    else if (cursors.down,isDown){
        player.body.moveDown(150);
    }
}