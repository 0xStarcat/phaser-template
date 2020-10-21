import "phaser";

export default class GameScene extends Phaser.Scene {
  graphics: Phaser.GameObjects.Graphics;
  camera: Phaser.Cameras.Scene2D.Camera;

  constructor(name: string) {
    super(name);

    console.log("Scene loaded: ", name);
  }

  preload() {}

  create() {}

  update(): void {}
}
