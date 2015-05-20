var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.spritesheet('bird', 'assets/images/bird.png', 34, 24, 3);
    this.load.spritesheet('pipes', 'assets/images/pipes.png', 54, 320, 2);

    this.load.image('background', 'assets/images/background.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('gameover', 'assets/images/gameover.png');
    this.load.image('get-ready', 'assets/images/get-ready.png');
    this.load.image('instructions', 'assets/images/instructions.png');
    this.load.image('medals', 'assets/images/medals.png');
    this.load.image('particle', 'assets/images/particle.png');
    // this.load.image('pipes', 'assets/images/pipes.png');
    this.load.image('poop', 'assets/images/poop.png');
    this.load.image('scoreboard', 'assets/images/scoreboard.png');
    this.load.image('start-button', 'assets/images/start-button.png');
    this.load.image('test', 'assets/images/test.png');
    this.load.image('title', 'assets/images/title.png');

    this.load.audio('flap', 'assets/audio/flap.wav');
    this.load.audio('ground-hit', 'assets/audio/ground-hit.wav');
    this.load.audio('ouch', 'assets/audio/ouch.wav');
    this.load.audio('pipe-hit', 'assets/audio/pipe-hit.wav');
    this.load.audio('score', 'assets/audio/score.wav');
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
