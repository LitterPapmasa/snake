// x=row y=columns
function Matrix(destId, x, y){
    this.matrix = document.getElementById(destId);
    this.score = document.getElementById('score');
    this.x = x;
    this.y = y;
    this.gameOver = false;
    this.food = [];
    this.foodScore = 0;
    this.score.innerHTML = this.foodScore;
    // this.level =

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
        that.genNewFood(1);
    }

    // xyArr is array[x,y], val: 0 - calean, 1 - snake paint, 2: food
    this.setCell = function(xyArr, val){
        console.log(xyArr[0] + ":" + xyArr[1]);
        if ((that.x < xyArr[0]) || (that.y < xyArr[1]) ||
            (1 > xyArr[1]) || (1 > xyArr[0])) {
                delete(this);
                that.gameOver();
        } else {
            if (position = that.getDiv(xyArr[0], xyArr[1])) {;
                switch(val){
                    case 1:
                        position.classList.add('snake');
                        break;
                    case 2:
                        position.classList.add('food');
                    break;
                    default:
                        // console.log('position:'+position);
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
        that.score.innerHTML = ++that.foodScore;
        console.log('skill UP !!!');
        that.sound();
        that.genNewFood(1);

    }

    this.genNewFood = function(count){
        this.count = count || 1;
        for(var i = 1; i <= count; i++){
            this.xFood = Math.round(Math.random()*that.x) || 1;
            this.yFood = Math.round(Math.random()*that.y) || 1;
            that.food.unshift({x:this.xFood, y:this.yFood});
            that.setCell([this.xFood, this.yFood], 2);
            console.log('genFood');
        }
    }



    this.sound = function(action){
        var soundFile = new Audio("./sounds/get.ogg" ) ;
        console.log('ua = navigator.userAgent'+ navigator.userAgent);
        soundFile.play();
    }

    this.gameOver = function(){
        that.matrix.innerHTML = "<h1> Game over </h1>";
        that.matrix.style.border = 0;
        that.matrix.style.backgroundColor = 'black';
                // clearInterval(that.go.movement);
        that.gameOver = true;
        console.log('gameover');
    }


}

