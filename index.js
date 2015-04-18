var Infinigon = require('infinigon');
var Board = Infinigon.Board;
var Piece = Infinigon.Piece;

function FreeForAll() {

  var options = {
    size: {
      width: 3000,
      height: 3000
    }
  };
  this.game = new Infinigon(options);
  this.game.start();
  this.game.onCollision = this.handleCollision;

}

FreeForAll.prototype.getGame = function() {
  return this.game;
};

FreeForAll.prototype.newPlayer = function(id) {
  var options = {
    id: id,
    board: this.game.board,
    position: {
      x: 1500,
      y: 1500
    },
    class: 'human piece'
  };
  return new Piece(options);
};

FreeForAll.prototype.removePlayer = function(id) {
  this.game.board.pieces[id].deconstruct();
};

FreeForAll.prototype.handleCollision = function(pieceA, pieceB) {
  if (pieceA.class.indexOf("human") > -1 && pieceB.class.indexOf("projectile") > -1) {
    pieceA.deconstruct();
  } else if (pieceA.class.indexOf("projectile") > -1 && pieceB.class.indexOf("human") > -1) {
    pieceB.deconstruct();
  }
};

module.exports = FreeForAll();