var Menu = function () {
};

module.exports = Menu;

Menu.prototype = {

  create: function () {
    var x = this.game.width / 2,
      y = this.game.height / 2;

    this.background = this.add.sprite(x, y, 'background');
    this.background.anchor.setTo(0.5, 0.5);

    this.ground = this.add.tileSprite(x, this.game.height, 335, 112, 'ground');
    this.ground.anchor.setTo(0.5, 1);
    this.ground.autoScroll(-100, 0);

    this.titleGroup = this.game.add.group();

    this.title = this.game.add.sprite(0, 0, 'title');
    this.titleGroup.add(this.title);

    this.bird = this.game.add.sprite(200, 5, 'bird');
    this.titleGroup.add(this.bird);

    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);

    this.titleGroup.x = 35;
    this.titleGroup.y = 50;

    this.game.add.tween(this.titleGroup).to({
      y: 40
    }, 350, Phaser.Easing.Linear.None, true, 0, 1000, true);

    this.startButton = this.game.add.button(x, y, 'start-button', this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
  },

  update: function () {
  },

  startClick: function() {
    this.game.state.start('Game');
  }
};
