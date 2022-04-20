class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

create() {
    
    this.background = this.add.image( 0, 0, 'tutorial');
    this.background.setOrigin(0,0);

    this.player = this.add.image(config.width - 160, config.height / 2, "player" );
    this.enemy = this.add.image(config.width - 80, config.height / 2, "enemy" );
    this.enemy1 = this.add.image(config.width + 80, config.height / 2, "enemy" );
    this.enemy2 = this.add.image(config.width - 40, config.height / 2, "enemy" );

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    //let walls=1;
    //this.add.text(20,20,"Playing Game", {font: "25px Arial", fill: "yellow"});
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

update() {
    this.moveEnemy(this.enemy, 5);
    this.moveEnemy1(this.enemy1, 5);
    this.moveEnemy2(this.enemy2, 5);
    this.movePlayerManager();
 }

 movePlayerManager(){
     if(this.cursorKeys.left.isDown){
         this.player.setVelocityX(-gameSettings.playerSpeed);
     }else if (this.cursorKeys.right.isDown){
         this.player.setVelocityX(gameSettings.playerSpeed);
     }
 }

 
    // if (enemy.y >= config.height){
    //     walls = 1;
    // }
    // if (enemy.y <= config.height){
    //     walls = 2;
    // }
    // switch (walls) {
    //     case 1:
    //         moveEnemy (enemy, speed){
    //             enemy.y -= speed;
    //         }
    //         break;
    
    //     case 2:
    //         moveEnemy (enemy, speed){
    //             enemy.y += speed;
    //         }
    //         break;
    //     default:
    //         moveEnemy (enemy, speed){
    //             enemy.y -= speed;
    //         }
    
    // }
}
