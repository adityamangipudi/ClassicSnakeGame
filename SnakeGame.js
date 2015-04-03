
/**
 * Created by adityamangipudi1 on 4/3/15.
 */
document.addEventListener('DOMContentLoaded', function(){
    var game =document.querySelector('div.container');
    var snake = document.querySelector('div.snake');

    function createElement(type, classname, parent){
        var elem = document.createElement(type);
        elem.className=classname;
        parent.appendChild(elem);
        return elem;
    }
    function createFood(){
        var food = createElement('div', 'food', game);
        createElement('div', 'square1', food);
        createElement('div', 'square2', food);
        createElement('div', 'square3', food);
        createElement('div', 'square4', food);

    }
    function addTail(){
        createElement('div','snakesquare', snake);

    }
    addTail();
    addTail();
    var fired= false;
    window.addEventListener("keydown", function (event) {


        if(fired===false){
            start();
            fired=true;
        }else{

        }


    });
    function start(){
        // var snakedimensions = snake.getBoundingClientRect();
        var snakedimensions = snake.getBoundingClientRect();
        var snaketop= snakedimensions.top;
        var containerdimensions =game.getBoundingClientRect();
        console.log(containerdimensions.top);
        console.log(snaketop);
        var inter = setInterval(function () {



            if(snaketop>containerdimensions.top){
                snake.style.top =( snaketop--)+'px';
                // console.log(snake.style.top);


            }else{
                clearInterval(inter);
            }

        }, 100);
    }

});