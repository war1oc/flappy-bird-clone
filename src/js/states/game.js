var Bird = require('../entities/bird');
var Ground = require('../entities/ground');
// var Pipe = require('../entities/pipe');
var PipeGroup = require('../entities/pipeGroup');

var Game = function() {};

module.exports = Game;

Game.prototype = {

  create: function() {
    var x = this.game.width / 2,
      y = this.game.height / 2;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.background = this.add.sprite(x, y, 'background');
    this.background.anchor.setTo(0.5, 0.5);

    this.bird = new Bird(this.game, 100, this.game.height / 2);
    this.game.add.existing(this.bird);

    this.pipes = this.game.add.group();

    this.ground = new Ground(this.game, x, this.game.height, 335, 112);
    this.game.add.existing(this.ground);

    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    var flapKey = this.input.keyboard.addKey([Phaser.Keyboard.SPACEBAR]);
    flapKey.onDown.add(this.bird.flap, this.bird);

    this.input.onDown.add(this.bird.flap, this.bird);

    this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
    this.pipeGenerator.timer.start();
  },

  update: function() {
    if(this.bird.y > 400){
      this.deathHandler();
    }

    this.pipes.forEach(function(pipeGroup){
      this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
    }, this);
  },

  generatePipes: function() {
    var pipeY = this.game.rnd.integerInRange(-100, 100);
    var pipeGroup = this.pipes.getFirstExists(false);
    if (!pipeGroup) {
      var pipeGroup = new PipeGroup(this.game, this.pipes);
    }
    pipeGroup.reset(this.game.width + pipeGroup.width / 2, pipeY);
  },

  deathHandler: function(){
    this.game.state.start('Menu');
  },

  shutdown: function(){
    this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
    this.bird.destroy();
    this.pipes.destroy();
  }
};
