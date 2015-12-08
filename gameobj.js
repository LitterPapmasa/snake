function GameObj(x, y, matrix, type){
        this.x = x;
        this.y = y;
        this.matrix = matrix;
        this.direct = 'up';
        this.type = type || 'active-cell';

        var that = this;
        this.create = function(){
            console.log('game create');
            that.matrix.setCell(that, true);
        }

        this.go = function(){
            setInterval(that.move, 200);
        }

        this.move = function(direction){

                that.matrix.setCell(that, false);

                this.direction = that.direct || direction;
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
                that.matrix.setCell(that, true);

        }

    }
