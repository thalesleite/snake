class Snake {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 20;
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
        if ( ((this.x + this.scale) < this.canvas.width /*&& ((this.x + this.scale) > 0 || (this.x + this.scale) === 0 )*/ ) &&
             ((this.y + this.scale) < this.canvas.height /*|| (this.y) < 0*/ )) {
                this.x += this.xSpeed * this.scale;
                this.y += this.ySpeed * this.scale;
        }
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