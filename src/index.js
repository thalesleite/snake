import Snake from './Snake.js';
import Food from './Food.js';

const canvas = document.getElementById('screen');
const snake = new Snake(canvas);
const food = new Food(canvas);
const speed = 140;

const draw = () => {
    snake.show();
    food.show();
    snake.update();

    collision(snake, food);
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

const collision = (snake, food) => {
    if (snake.head.x < ( food.x + food.scale ) && ( snake.head.x + snake.scale )  > food.x &&
        snake.head.y < ( food.y + food.scale)  && ( snake.head.y + snake.scale ) > food.y) {
        
        food.erase();
        food.update();

        snake.add();
    }
}

setInterval(draw, speed);
window.addEventListener('keydown', keyPressed);