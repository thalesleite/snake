import Snake from './snake.js';

const canvas = document.getElementById('screen');
const snake = new Snake(canvas);

const draw = () => {
    snake.show();
    snake.update();
}

const keyPressed = (e) => {
    console.log(e.keyCode);
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

setInterval(draw, 120);
window.addEventListener('keydown', keyPressed);