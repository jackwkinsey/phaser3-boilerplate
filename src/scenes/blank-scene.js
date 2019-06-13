import { Scene } from 'phaser';

class BlankScene extends Scene {
  constructor() {
    console.log('construct blank scene');
    super({ key: 'blank-scene' });
  }

  preload() {
    console.log('blank scene preload.');
  }

  create() {
    console.log('blank scene create');
    this.input.once(
      'pointerdown',
      event => {
        console.log('click!!!');
        this.scene.start('simple-scene');
      },
      this
    );
  }
}

export default BlankScene;
