// x=row y=columns
function Matrix(destId, x, y){
    this.matrix = document.getElementById(destId);
    this.score = document.getElementById('score');
    this.x = x;
    this.y = y;
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
    this.setCell = function(obj, val){
        if (obj.x > that.x) obj.x = 1;
        if (obj.x < 1) obj.x = that.x;
        if (obj.y > that.y) obj.y = 1;
        if (obj.y < 1) obj.y = that.y;
        var position = that.getDiv(obj.x, obj.y);
        if (val) {

            if (position.classList.contains('active-cell')){
                // console.log(position.classList.contains('snake') );
                that.skillUp();
                position.classList.remove('active-cell');
            }
            position.classList.add(obj.type);
        } else {
            position.classList.remove(obj.type);
        }

    }

    this.getDiv = function(x, y){
        return matrix.children[(x-1) + (that.y - y)*that.y];
    }


    this.skillUp = function(){
        that.score.innerHTML = ++that.apples;
        console.log('skill UP !!!!!!!!');
        that.genNewApple();

    }



    this.genNewApple = function(){
        var apple = new GameObj(Math.round(Math.random()*that.x), Math.round(Math.random()*that.y), that);
        apple.create();
    }
}

