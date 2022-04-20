class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        
        this.background = this.add.image( 0, 0, 'tutorial');
        this.background.setOrigin(0,0);

        this.player = this.add.image(config.width - 160, config.height / 2, "player" );

        //this.add.text(20,20,"Playing Game", {font: "25px Arial", fill: "yellow"});
    }
    update() {
    
    }
}