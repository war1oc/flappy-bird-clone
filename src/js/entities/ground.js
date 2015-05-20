var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  this.autoScroll(-200, 0);
  this.anchor.setTo(0.5, 1);
  // game.physics.arcade.enableBody(this);
  // this.body.allowGravity = false;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {

};

module.exports = Ground;
