window.onload = function(){

    var m1 = new Matrix('matrix', 33, 33);
    m1.create();
    //m1.sound();

    var snake = new Snake(1, 1, m1);
    snake.create();
    snake.go();

    // var red = new GameObj(8, 11, m1);
    // red.create();
    // // red.go();

    window.onkeydown = function(e){

        if (e == false) var e = window.event;

        var key = e.keyCode || e.which;
        if (+key == 37 && snake.direct != 'right') snake.direct = 'left';
        if (+key == 38 && snake.direct != 'down') snake.direct = 'up';
        if (+key == 39 && snake.direct != 'left') snake.direct = 'right';
        if (+key == 40 && snake.direct != 'up') snake.direct = 'down';

        console.log(" e.keyCode:" + e.keyCode);
        if (m1.gameOver === 'true') {
            delete(snake);
            delete(m1);
        }
        console.log('snake.gameOver:'+snake.gameOver);
    }
}