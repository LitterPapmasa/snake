function Snake(x, y, matrix){
    this.x = x;
    this.y = y;
    this.matrix = matrix;
    this.direct = 'nodirection';
    this.speed = this.speed || 50;
    this.snakeBody = [];


    var that = this;
    var sLenght = 6;
        // Snake init
        this.create = function(){
            console.log('game create');
            for(var i = sLenght -1 ; i >= 0 ; i--){
                console.log("x:"+that.x + " y:"+that.y);

                that.snakeBody.unshift({x:that.x, y: ++that.y});
                that.matrix.setCell([that.x, that.y], 2);
               //console.log('that.snakeBody:' + that.snakeBody[0].x);
           }
       }


       this.go = function(){
        //if (that.direction == 'nodirection') return false;
        console.log('that.speed:' + that.speed);
        this.movement = setInterval(function(){
            if (that.matrix.gameOver === true || that.direct == 'nodirection') {
                clearInterval(this.movement);
                delete(this.go);
            } else  that.move();
        }, that.speed);
    }

    this.speedUp = function(){
        clearInterval(that.go.movement);

    }

    this.move = function(direction){

        if (this.direction = direction || that.direct) {
            switch(this.direction){
                case 'left': that.x--;
                break;
                case 'up': that.y++;
                break;
                case 'right': that.x++;
                break;
                case 'down': that.y--;
                break;
            }

           paintMove();
        }

    }

    function paintMove(){
        that.snakeBody.unshift({x:that.x, y:that.y});
        for(var i = 0; i < that.snakeBody.length; i++){
            var s =  that.snakeBody[i];
            that.matrix.setCell([s.x, s.y], 1);

            if (i == that.snakeBody.length -1) that.matrix.setCell([s.x, s.y], 0);
        }

        that.snakeBody.pop();
    }


}
