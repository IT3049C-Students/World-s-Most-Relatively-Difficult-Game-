import Align from "../util/Align";
import { AlignGrid } from "../util/alignGrid";
import { UIBlock } from "../util/UIBlock";

export class Scene1 extends Phaser.Scene1 {
    constructor() {
        super("Scene1")
    }

preload() {
    this.load.image("Tiles", "src/Tiles/wholesheet1.png");
    this.load.tilemapTiledJSON('map','src/Json/tutorial..tmj')
}
create() {
const map = this.make.tilemap({key:"map", tileWidth: 100, tileHeight: 100});
const tileset = map.addTilesetImage("wholesheet1", "tiles");
const layer = map.createLayer("Ground", tileset, 0, 0);
const layer2 = map.createLayer("Walls", tileset, 0, 0);
}
update() {

}
}
export default Scene1;