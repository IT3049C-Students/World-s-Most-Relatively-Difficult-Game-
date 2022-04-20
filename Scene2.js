let score = 0;
let death = 0;
let heldScore = 0;

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

create() {
    
    this.background = this.add.image( 0, 0, 'tutorial');
    this.background.setOrigin(0,0);

    this.player = this.physics.add.image(config.width - 160, config.height / 2, "player" );
    this.enemy = this.physics.add.image(config.width - 80, config.height / 2, "enemy" );
    this.enemy1 = this.physics.add.image(config.width + 80, config.height / 2, "enemy" );
    this.enemy2 = this.physics.add.image(config.width - 40, config.height / 2, "enemy" );
    this.objective = this.physics.add.image(config.width -75, config.height / 2, "coinobjective");
    
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.physics.world.setBoundsCollision();
    this.player.setCollideWorldBounds(true);

    this.badGuys = this.physics.add.group();
    this.badGuys.add(this.enemy);
    this.badGuys.add(this.enemy1);
    this.badGuys.add(this.enemy2);

    this.physics.add.overlap(this.player, this.badGuys, this.playerDies, null, this);
    this.physics.add.overlap(this.objective, this.player,  this.getBank, null, this);
    //let walls=1;
    //this.add.text(20,20,"Playing Game", {font: "25px Arial", fill: "yellow"});
    
}
    
playerDies(player){
    player.x = config.width - 160;
    player.y = config.height / 2;
    
    console.log("f in the chat my bruddas");
    death += 1;
    console.log(`Times you have died:` + death);
    this.resetEnemy1position(this.enemy);
    this.resetEnemy1position(this.enemy1);
    this.resetEnemy2position(this.enemy2);
    
    if(score > heldScore){
        sessionStorage.setItem("highScore", score);
        heldScore = sessionStorage.getItem("highScore");
                
        }
    document.getElementById(`highestScore`).innerHTML = "Highest Score is: " + heldScore;
    document.getElementById("deathTally").innerHTML = "You have died: " + death + "times"; 
    score = 0;
    document.getElementById("currentScore").innerHTML = "Current Score is: " + score;
}

getBank(objective){
    score += 1;
    console.log(score);
    var randomX = Phaser.Math.Between(10, 310);
    var randomY = Phaser.Math.Between(10, 310);
    objective.x = randomX;
    objective.y = randomY;
    document.getElementById('currentScore').innerHTML = "Current score is: " + score;
}

moveEnemy (enemy, speed){
    enemy.y += speed;
    if (enemy.y > config.height) {
        this.resetEnemyposition(enemy);
    }
}
moveEnemy1 (enemy1, speed){
    enemy1.y += speed;
    if (enemy1.y > config.height) {
        this.resetEnemy1position(enemy1);
    }
}
moveEnemy2 (enemy2, speed){
    enemy2.x += speed;
    if (enemy2.x > config.height) {
        this.resetEnemy2position(enemy2);
    }
}

resetEnemyposition(enemy){
    enemy.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    enemy.x = randomX;
}
resetEnemy1position(enemy1){
    enemy1.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    enemy1.x = randomX;
}
resetEnemy2position(enemy2){
    enemy2.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    enemy2.y = randomY;
}

movePlayer (player, speed){
    if(this.cursorKeys.left.isDown) {
        this.player.x -= speed;
    }
    else if (this.cursorKeys.right.isDown) {
        this.player.x += speed;
    }
    else if (this.cursorKeys.up.isDown) {
        this.player.y -= speed;
    }
    else if (this.cursorKeys.down.isDown) {
        this.player.y += speed;
    }

    }
update() {
    this.moveEnemy(this.enemy, 2);
    this.moveEnemy1(this.enemy1, 2);
    this.moveEnemy2(this.enemy2, 2);
    this.movePlayer(this.player, 3)

    }

}