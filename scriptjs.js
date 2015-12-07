window.onload = function(){
    // -- Settings

    var matrix = document.getElementById('matrix');
    var xVal = 20;
    var yVal = 20;
    var speed = 100;

    // == Settings

    function createMatrix(x,y){
        for(var i = 0; i < y; i++){
            for(var j = 0; j < x; j++){

                var cell = document.createElement('div');
                cell.className = "cell";
                matrix.appendChild(cell);
            }
        }
    }

    function paintCell(obj){
        var position = getDiv(obj.xPos, obj.yPos);
        position.classList.add(obj.classObj || 'active-cell');
    }

    // function setCell(obj, val){
    //     var curCell = getDiv(obj.xPos, obj.yPos);
    //     if (obj.classObj) curCell.classList.add(obj.classObj);

    //     if (val == true) curCell.classList.add("active-cell");
    // }

    function getDiv(x, y){
        return matrix.children[(x-1) + (yVal - y)*20];
    }

    function cleanCell(obj){
        var position = getDiv(obj.xPos, obj.yPos);
        var removeClass = obj.classObj || 'active-cell';

        if ( position.classList.contains(removeClass) ){
           position.classList.remove(removeClass);
        }
    }

    function getCell(x, y){
        var position = getDiv(x, y);
        return ( position.classList.contains('active-cell') ) ? true :  false;
    }


    function goForCells(obj){
        paintCell(obj);
        setInterval(function(){
            setTimeout(function(){

                cleanCell(obj);
                ++obj.xPos;
                if (obj.xPos > 20)  obj.xPos = 1;
                paintCell(obj);



            }, speed, obj);
        }, speed, obj)
    }

    function snakeMove(obj){
        paintCell(obj);
        setInterval(function(){
            setTimeout(function(){

                cleanCell(obj);
                if (obj.direct == 'up')    ++obj.yPos;
                if (obj.direct == 'down')  --obj.yPos;
                if (obj.direct == 'left')  --obj.xPos;
                if (obj.direct == 'right')    ++obj.xPos;


                if (obj.xPos > xVal)  obj.xPos = 1;
                if (obj.xPos < 1)  obj.xPos = xVal;
                if (obj.yPos > yVal)  obj.yPos = 1;
                if (obj.yPos < 1)  obj.yPos = yVal;
                paintCell(obj);



            }, speed, obj);
        }, speed, obj)
    }


    // -- Movement

    function moveLeft(obj){

        cleanCell(obj);
        obj.xPos--;
        if (obj.xPos < 1) obj.xPos = 1;
        paintCell(obj);
    }

    function moveRight(obj){

        cleanCell(obj);
        obj.xPos++;
        if (obj.xPos > xVal) obj.xPos = xVal;
        paintCell(obj);
    }

    function moveUp(obj){

        cleanCell(obj);
        obj.yPos++;
        if (obj.yPos > yVal) obj.yPos = yVal;
        paintCell(obj);
    }

    function moveDown(obj){

        cleanCell(obj);
        obj.yPos--;
        if (obj.yPos < 1) obj.yPos = 1;
        paintCell(obj);
    }



    // -- Event listener
    // window.onkeydown = function (e){
    //         if (e == false) var e = window.event;
    //         key = e.keyCode || e.which;
    //         switch(+key){
    //             case 37:
    //                 moveLeft(snake);
    //                 console.log("left e.keyCode:" + e.keyCode);
    //                 break;
    //             case 38:
    //                 moveUp(snake);
    //                 console.log("up e.keyCode:" + e.keyCode);
    //                 break;
    //             case 39:
    //                 moveRight(snake);
    //                 console.log("right e.keyCode:" + e.keyCode);
    //                 break;
    //             case 40:
    //                 moveDown(snake);
    //                 console.log("down e.keyCode:" + e.keyCode);
    //                 break;
    //             default:
    //                 console.log("x e.keyCode:" + e.keyCode);
    //                 break;
    //         }
    //     }

window.onkeydown = function (e){
            if (e == false) var e = window.event;
            key = e.keyCode || e.which;
            switch(+key){
                case 37:
                    snake.direct = 'left';
                    console.log("left e.keyCode:" + e.keyCode);
                    break;
                case 38:
                    snake.direct = 'up';
                    console.log("up e.keyCode:" + e.keyCode);
                    break;
                case 39:
                    snake.direct = 'right';
                    console.log("right e.keyCode:" + e.keyCode);
                    break;
                case 40:
                    snake.direct = 'down';
                    console.log("down e.keyCode:" + e.keyCode);
                    break;
                default:
                    snake.direct = 'stop';
                    console.log("x e.keyCode:" + e.keyCode);
                    break;
            }
        }

    // -- Exec

    createMatrix(xVal, yVal);

    var snake = {
        xPos : 10,
        yPos : 2,
        classObj: 'snake',
        direct: 'up',
    }

    var apple = {
        xPos : Math.round(Math.random()*20),
        yPos : Math.round(Math.random()*10),
    }


    //setCell(snake.xPos, snake.yPos, true);
    paintCell(snake);
    console.log(getCell(snake.xPos, snake.yPos));

   //goForCells(apple);
   snakeMove(snake);




}