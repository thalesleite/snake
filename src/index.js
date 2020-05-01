import Snake from './Snake.js';
import Food from './Food.js';

const canvas = document.getElementById('screen');
const snake = new Snake(canvas);
const food = new Food(canvas);

const draw = () => {
    snake.show();
    food.show();

    snake.update();

    if (snake.x < ( food.x + food.scale ) && ( snake.x + snake.scale )  > food.x &&
        snake.y < ( food.y + food.scale)  && ( snake.y + snake.scale ) > food.y) {
        
        console.log('collision detected!!!');
    }
}

const keyPressed = (e) => {
    if ( e.keyCode === 37 ) {
        // 37 LEFT
        snake.direction(-1, 0);
    } else if ( e.keyCode === 38 ) {
        // 38 UP
        snake.direction(0, -1);
    } else if ( e.keyCode === 39 ) {
        // 39 RIGHT
        snake.direction(1, 0);
    } else if ( e.keyCode === 40 ) {
        // 40 DOWN
        snake.direction(0, 1);
    }
}

setInterval(draw, 140);
window.addEventListener('keydown', keyPressed);