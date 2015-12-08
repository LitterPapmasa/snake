window.onload = function(){

var speed = 100;

var m1 = new Matrix('matrix', 20, 20);
m1.create();

var snake = new GameObj(5, 3, m1, 'snake');
snake.create();
snake.go();

var red = new GameObj(8, 11, m1);
red.create();
// red.go();

window.onkeydown = function(e){


        if (e == false) var e = window.event;

        key = e.keyCode || e.which;
        if (+key == 37) snake.direct = 'left';
        if (+key == 38) snake.direct = 'up';
        if (+key == 39) snake.direct = 'right';
        if (+key == 40) snake.direct = 'down';

        console.log(" e.keyCode:" + e.keyCode);




}





}