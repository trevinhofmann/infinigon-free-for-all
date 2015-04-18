var Infinigon = require('infinigon');
var Board = Infinigon.Board;
var Piece = Infinigon.Piece;

function FreeForAll() {

  this.game = new Infinigon();

}

FreeForAll.prototype.getGame = function() {
  return this.game;
};

FreeForAll.prototype.newPlayer = function(id) {
  var options = {
    board: this.game.board,
    position: {
      x: 500,
      y: 500
    },
    class: 'human piece'
  };
  return new Piece(id, options);
};

FreeForAll.prototype.removePlayer = function(id) {
  this.game.board.pieces[id].deconstruct();
};

module.exports = FreeForAll();