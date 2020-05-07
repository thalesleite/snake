class Snake {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 15;
        this.size = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.head = {
            x: 0,
            y: 0
        };
        this.body = [{x: 1,y: 1}];
    }

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    add() {
        this.size = this.size + 1;
    }

    update() {
        if ( (this.head.x === this.canvas.width || this.head.x > this.canvas.width ) && this.xSpeed > 0 ) {
            this.head.x = -this.scale;
        }
        if ( ( this.head.x === 0 || this.head.x < 0 ) && this.xSpeed < 0 ) {
            this.head.x = this.canvas.width;
        }
        if ( (this.head.y === this.canvas.height || this.head.y > this.canvas.height ) && this.ySpeed > 0 ) {
            this.head.y = -this.scale;
        }
        if ( ( this.head.y === 0 || this.head.y < 0 ) && this.ySpeed < 0 ) {
            this.head.y = this.canvas.height;
        }

        // Update snake movement
        this.head.x += this.xSpeed * this.scale;
        this.head.y += this.ySpeed * this.scale;
    }

    show() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();

        // snake's head
        this.ctx.fillRect(this.head.x, this.head.y, this.scale, this.scale);
        this.ctx.fillStyle = '#fff';

        // let cont = this.size;
        // while (cont > 0) {
        //     this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
        //     this.ctx.fillStyle = '#fff';

        //     cont = cont - 1;
        // }

        this.ctx.stroke();
    }
}

export default Snake;