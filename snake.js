function Snake(x, y, matrix){
    this.x = x;
    this.y = y;
    this.matrix = matrix;
    this.direct = 'nodirection';
    this.speed = this.speed || 100;
    this.snakeBody = [];


    var that = this;
    var sLenght = 3;
        // Snake init
        this.create = function(){
            console.log('snake create');
            for(var i = sLenght -1 ; i >= 0 ; i--){
                console.log("x:"+that.x + " y:"+that.y);

                that.snakeBody.unshift({x:that.x, y: ++that.y});
                that.matrix.setCell([that.x, that.y], 1);
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
            //console.log('that.matrix.food.length '+ that.matrix.food.length);
            //for (var i = 0; i <= that.matrix.food.length - 1; i++ ){
                if (that.x == that.matrix.food[0].x &&
                            that.y == that.matrix.food[0].y){
                    console.log('genNewFood x and y ');
                    that.matrix.skillUp();
                    that.snakeBody.unshift({x:that.x, y:that.y});
               }

            // }
            if ( this.checkCollisions()) that.matrix.gameOver();

            that.paintMove();
        }

    }

    this.paintMove = function(){
        that.snakeBody.unshift({x:that.x, y:that.y});
        for(var i = 0; i < that.snakeBody.length; i++){
            var s =  that.snakeBody[i];
            that.matrix.setCell([s.x, s.y], 1);

            if (i == that.snakeBody.length -1) that.matrix.setCell([s.x, s.y], 0);
        }
        that.snakeBody.pop();
    }

    this.checkCollisions = function(){

        for(var i = 2; i <= that.snakeBody.length - 1; i++){
            var s =  that.snakeBody[i];
            if ((that.snakeBody[0].x == s.x) && (that.snakeBody[0].y == s.y)) {
                console.log('check checkCollisions '+that.snakeBody[0].x+"; "+s.x);
                return true;
            }
        }
        return false;
    }


}
