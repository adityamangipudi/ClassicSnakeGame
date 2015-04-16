
/**
 * Created by adityamangipudi1 on 4/3/15.
 */
    //function to create an element
    function createElement(type, classname, parent){
    console.log('herer')
        var elem = document.createElement(type);
        elem.className=classname;
        parent.appendChild(elem);
        return elem;
    }
var inter;
var direction=0;
var snakediv = document.querySelector('div.snake')

    //game element


    //create's a food square
    function createFood(){
        var food = createElement('div', 'food', game);
        createElement('div', 'square1', food);
        createElement('div', 'square2', food);
        createElement('div', 'square3', food);
        createElement('div', 'square4', food);


    }



var gameTop=document.querySelector('div.container').offsetTop;

var gameLeft=document.querySelector('div.container').offsetLeft;





function Snake(snakeLength, snbody, div ){

    this.snakeLength = snakeLength,
    this.snbody = snbody,
    this.div = div


}

Snake.prototype.setSnakeBody = function(){
    this.snbody = document.querySelectorAll('div.snakesquare')
    return this.snbody
}
Snake.prototype.addTail = function(){
    //console.log(this.div)
    //console.log('here')

    createElement('div','snakesquare', this.div);

};
Snake.prototype.setSnakeLength= function(){
   this.snakeLength= this.snbody.length;
    return this.snakeLength
}
Snake.prototype.setPosition = function(){
    this.setSnakeBody()
    this.setSnakeLength()
    for(var i =0; i< snake.snakeLength;i++){
        snake.snbody[i].style.top = i*22+352 +'px';
        snake.snbody[i].style.left = 352+'px';

    }
   /* Array.prototype.forEach.call(snake.snbody, function(x){
        x.style.top= this.offset;
        x.style.left= ;
    })*/
}
Snake.prototype.start = function(){
    inter = setInterval(function () {
        console.log(this.snake.setSnakeBody())
        console.log(this.snake.setSnakeLength())


        if(this.snake.setSnakeLength()>0&& this.snake.snbody[0].offsetTop>0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1])
            node.style.top = this.snake.snbody[0].offsetTop-22 +'px';

            node.style.left=this.snake.snbody[0].offsetLeft + 'px';
            //console.log(this.snake.snbody[0].offsetTop)
            //console.log(this.snake.div.left)
           // Array.prototype.unshift.call(this.snake.snbody, node);
            //var node = this.snake.div.
            this.snake.div.insertBefore(node, this.snake.snbody[0]);

        }
        else{
            clearInterval(inter)

        }
    }, 500);
}
Snake.prototype.moveUp = function(){
    clearInterval(inter)
    inter = setInterval(function () {
        this.snake.setSnakeBody()
        this.snake.setSnakeLength()


        if(this.snake.setSnakeLength()>0&& this.snake.snbody[0].offsetTop>0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1])
            node.style.top = this.snake.snbody[0].offsetTop-22 +'px';

            node.style.left=this.snake.snbody[0].offsetLeft + 'px';
            //console.log(this.snake.snbody[0].offsetTop)
            //console.log(this.snake.div.left)
            // Array.prototype.unshift.call(this.snake.snbody, node);
            //var node = this.snake.div.
            this.snake.div.insertBefore(node, this.snake.snbody[0]);

        }
        else{
            clearInterval(inter)
        }
    }, 500);
}
Snake.prototype.moveDown = function(){
    clearInterval(inter)
    inter = setInterval(function () {
        this.snake.setSnakeBody()
        this.snake.setSnakeLength()


        if(this.snake.setSnakeLength()>0&& this.snake.snbody[0].offsetTop<528){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1])
            node.style.top = this.snake.snbody[0].offsetTop+22 +'px';

            node.style.left=this.snake.snbody[0].offsetLeft + 'px';
            //console.log(this.snake.snbody[0].offsetTop)
            //console.log(this.snake.div.left)
            // Array.prototype.unshift.call(this.snake.snbody, node);
            //var node = this.snake.div.
            this.snake.div.insertBefore(node, this.snake.snbody[0]);

        }
        else{
            clearInterval(inter)
        }
    }, 500);
}
Snake.prototype.moveLeft = function(){
    clearInterval(inter)
    inter = setInterval(function () {
        this.snake.setSnakeBody()
        this.snake.setSnakeLength()


        if(this.snake.setSnakeLength()>0&& this.snake.snbody[0].offsetLeft>0){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1])
            node.style.top = this.snake.snbody[0].offsetTop +'px';

            node.style.left=this.snake.snbody[0].offsetLeft-22 + 'px';
            //console.log(this.snake.snbody[0].offsetTop)
            //console.log(this.snake.div.left)
            // Array.prototype.unshift.call(this.snake.snbody, node);
            //var node = this.snake.div.
            this.snake.div.insertBefore(node, this.snake.snbody[0]);

        }
        else{
            clearInterval(inter)
        }
    }, 500);
}
Snake.prototype.moveRight = function(){
    clearInterval(inter)
    inter = setInterval(function () {
        this.snake.setSnakeBody()
        this.snake.setSnakeLength()


        if(this.snake.setSnakeLength()>0&& this.snake.snbody[0].offsetLeft<528){
            var node = this.snake.div.removeChild(this.snake.snbody[this.snake.snakeLength-1])
            node.style.top = this.snake.snbody[0].offsetTop +'px';

            node.style.left=this.snake.snbody[0].offsetLeft+22 + 'px';
            //console.log(this.snake.snbody[0].offsetTop)
            //console.log(this.snake.div.left)
            // Array.prototype.unshift.call(this.snake.snbody, node);
            //var node = this.snake.div.
            this.snake.div.insertBefore(node, this.snake.snbody[0]);

        }
        else{
            clearInterval(inter)
        }
    }, 500);
}


var snake  = new Snake(null, document.querySelectorAll('div.snakesquare'), snakediv)
snake.addTail()
snake.addTail()
snake.addTail()
snake.addTail()
snake.addTail()
snake.setPosition()



var fired=false;

function movement() {
    //key presses
    window.addEventListener("keydown", function (event) {

        //if already started
        if (fired === false) {

            snake.start();
            fired = true;
        }

        //left -- direction =3
        if (event.keyCode === 37 && fired === true && direction!=2) {
            direction=3;
            snake.moveLeft()
        }
        //right -- direction =2
        if (event.keyCode === 39 && fired === true && direction!=3) {
            direction=2;
            snake.moveRight()
        }
        //up direction =0
        if (event.keyCode === 38 && fired === true && direction!=1) {
            direction=0;
            snake.moveUp()
        }
        //down direction =1
        if (event.keyCode === 40 && fired === true && direction!=0) {
            direction=1;
            snake.moveDown()
        }


    });
}
movement();