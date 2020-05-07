class Snake {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 15;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.head = {x: 0, y: 0};
        this.body = [];
    }

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    add() {
        if ( this.body.length > 0 ) {
            // get position from last member of array body
            const tail = this.body[this.body.length - 1];
            this.body.push({ x: tail.x, y: tail.y });
        } else {
            this.body.push({ x: this.head.x, y: this.head.y });
        }
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
        for (let index = this.body.length - 1; index === 0; index--) {
            if ( index === 0 ) {
                this.body[index].x = this.head.x;
                this.body[index].y = this.head.y;
            } else {
                const tail = this.body[index - 1];
                this.body[index].x = tail.x;
                this.body[index].y = tail.y;
            }
        }

        this.head.x += this.xSpeed * this.scale;
        this.head.y += this.ySpeed * this.scale;
    }

    show() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();

        // snake's head
        this.ctx.fillRect(this.head.x, this.head.y, this.scale, this.scale);
        this.ctx.fillStyle = '#fff';

        for (const member of this.body) {
            this.ctx.fillRect(member.x, member.y, this.scale, this.scale);
            this.ctx.fillStyle = '#fff';
        }

        this.ctx.stroke();
    }
}

export default Snake;