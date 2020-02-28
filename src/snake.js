class Snake {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    show(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, 10, 10);
        this.ctx.fillStyle = '#fff';
        this.ctx.closePath();
    }
}

export default Snake;