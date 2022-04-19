
//testing purposes
let game = new Phaser.Game(320,320)
    function preload(){
        game.load.image(`player`,  "Sprites/player.png"),
        {framewidth: 32, frameheight: 32};
        game.load.image('enemy', "Sprites/enemy.png"),
        {framewidth: 32, frameheight: 32};
        game.load.image(`coinobjective`, "Sprites/coinobjective"),
        {framewidth: 32, frameheight:32};
        game.load,image(`tutorial`, `Tiles/tutorial.png`);

        let scoreCount = 0;

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

    else if (cusrors.right.isDown){
        player.body.moveRight(150);
    }

    if (cursors.up.isDown){
        player.body.moveUp(150);
    }

    else if (cursors.down,isDown){
        player.body.moveDown(150);
    }

//enemy movement
if(enemy and wall colide){
    
    switch (enemyWall== true;){
        case 1: 
            enemy.body.moveDown(150);
            break;
        case 2:
            enemy.body.moveUp(150);
            break;

    }
}






    //collect coin
    
 function CollectCoin() {
    if (player colides with coin){
        scoreCount = scoreCount + 1;
    }

 }
    //reached goal
    function GoalZone(){
    if (player colides with goal and scoreCount == 1){
        ///Game Win
        ///Take to next level
    }
    }

    //hit bad dot and reset
    function ResetPosition(){
        if(player and enemy colide){
            //reset player position to the start of the map

        }
    }
}