import Snake from './snake.js';

const draw = () => {
    const canvas = document.getElementById('screen');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const snake = new Snake();
        snake.update();
        snake.show(ctx);
    }
}

draw();