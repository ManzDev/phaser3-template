import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene", active: true });
    this.x = 500;
    this.y = 0;
  }

  preload() {
    this.load.image("image.logo", "/assets/logo.png");
  }

  create() {
    this.image = this.add.image(this.x, this.y, "image.logo").setScale(0.5);
  }

  update() {
    this.y = Math.min(this.y + 1, 350);
    this.image.setPosition(this.x, this.y);
  }
}
