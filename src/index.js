import Phaser from "phaser";

// import { Plugin as NineSlicePlugin } from "phaser3-nineslice";
// import SceneWatcherPlugin from "phaser-plugin-scene-watcher";

// Scenes
import { MainScene } from "./scenes/MainScene.js";

const GAME_WIDTH = 1024;
const GAME_HEIGHT = 768;
const GAME_ZOOM = 1;

const config = {
  type: Phaser.WEBGL,
  title: "Phaser Game",
  backgroundColor: "#000000",
  canvas: document.querySelector("canvas"),
  banner: false,
  gameVersion: 0.1,
  fps: {
    min: 30,
    target: 60
  },
  inputGamepad: false,
  inputKeyboard: true,
  inputMouse: true,
  plugins: {
    global: [
      // { key: "NineSlice", plugin: NineSlicePlugin, start: true },
    ],
    scene: []
  },
  callbacks: {},
  sceneConfig: {},
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      debug: true
    },
  },
  render: {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    clearBeforeRender: true
  },
  scale: {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    zoom: GAME_ZOOM
  },
  scene: [
    MainScene
  ]
};

new Phaser.Game(config);
