import 'phaser';

import SimpleScene from './scenes/simple-scene';
import BlankScene from './scenes/blank-scene';

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 250,
      },
    },
  },
  scene: [SimpleScene, BlankScene], // calls constructor for each scene listed
};

new Phaser.Game(gameConfig);
