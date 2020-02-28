import Snake from './snake.js';

const canvas = document.getElementById('screen');
const snake = new Snake(canvas);

const draw = () => {
    snake.show();
    snake.update();
}

setInterval(draw, 10);