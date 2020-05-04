console.log(2);
var game = new Phaser.Game(1200, 700, Phaser.AUTO);

var GameState = {
    preload: function(){
        this.load.image('background' , 'images/background.png')
    },
    create: function() {
        this.background = this.game.add.sprite(0, 0, 'background')
        this.background.width = 1200;
        this.background.height = 700;
    },
    update: function() {

    }
};

game.state.add('GameState' , GameState);
game.state.start('GameState');
