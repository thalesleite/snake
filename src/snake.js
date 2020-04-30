class Snake {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 15;
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    update() {
        if ( (this.x === this.canvas.width || this.x > this.canvas.width ) && this.xSpeed === 1 ) {
            this.x = -this.scale;
        }
        if ( ( this.x === 0 || this.x < 0 ) && this.xSpeed === -1 ) {
            this.x = this.canvas.width;
        }
        if ( (this.y === this.canvas.height || this.y > this.canvas.height ) && this.ySpeed === 1) {
            this.y = -this.scale;
        }
        if ( ( this.y === 0 || this.y < 0 ) && this.ySpeed === -1 ) {
            this.y = this.canvas.height;
        }

        // Update snake move
        this.x += this.xSpeed * this.scale;
        this.y += this.ySpeed * this.scale;
    }

    show() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();

        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
        this.ctx.fillStyle = '#fff';

        this.ctx.closePath();
    }
}

export default Snake;