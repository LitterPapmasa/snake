// x=row y=columns
function Matrix(destId, x, y){
    this.matrix = document.getElementById(destId);
    this.score = document.getElementById('score');
    this.x = x;
    this.y = y;
    this.gameOver = false;
    this.apples = 0;
    this.score.innerHTML = this.apples;

    var that = this;

    // render matrix
    this.create = function(){
        for(var i = 0; i < that.y; i++){
            for(var j = 0; j < that.x; j++){
                var cell = document.createElement('div');
                cell.className = "cell";
                that.matrix.appendChild(cell);
            }
        }
    }

    // x = row, y = column, val if true paint, if fale clean
    this.setCell = function(xyArr, val){

        console.log(xyArr[0] + ":" + xyArr[1]);
        if ((that.x < xyArr[0]) ||
            (that.y < xyArr[1]) ||
            (1 > xyArr[1]) || (1 > xyArr[0])) {
            xyArr[0] = xyArr[1] = 1;
            delete(this);
            gameOver();
        //stop();
        } else {
            if (position = that.getDiv(xyArr[0], xyArr[1])) {;
                switch(val){
                    case 1:
                        console.log('x:'+xyArr[0] + " y:" + xyArr[1]);
                        console.log(position);
                        position.classList.add('snake');
                        break;
                    case 2:
                        position.classList.add('food');
                    break;
                    default:
                        console.log('position:'+position);
                        position.className = "cell";
                    break;
                }
            }
        }

    }

    this.getDiv = function(x, y){
        return that.matrix.children[(x-1) + (that.y - y)*that.y];
    }


    this.skillUp = function(){
        that.score.innerHTML = ++that.apples;
        console.log('skill UP !!!!!!!!');
        that.sound();
        that.genNewApple();

    }

    this.genNewApple = function(){
        var apple = new GameObj(Math.round(Math.random()*that.x), Math.round(Math.random()*that.y), that);
        apple.create();
    }

    this.sound = function(actioin){
        var soundFile = new Audio("./sounds/get.mp3" ) ;

        soundFile.play();
    }

     function gameOver(){
        that.matrix.innerHTML = "<h1> Game over </h1>";
        that.matrix.style.border = 0;
        that.matrix.style.backgroundColor = 'black';
                // clearInterval(that.go.movement);
        that.gameOver = true;
        console.log('gameover');
    }
}

