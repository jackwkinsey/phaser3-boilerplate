class SimpleScene extends Phaser.Scene {
  constructor() {
    console.log('construct simple scene');
    super({ key: 'simple-scene' });
  }

  preload() {
    console.log('simple scene preload');
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    console.log('simple scene create');
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('red');
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    this.input.once(
      'pointerdown',
      event => {
        console.log('clicked simple scene!!!');
        this.scene.start('blank-scene');
      },
      this
    );
  }
}

export default SimpleScene;
