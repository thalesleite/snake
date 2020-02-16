class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        console.log(this.x);
    }

    show(ctx){
        ctx.fillStyle = '#fff';
        ctx.fillRect(this.x, this.y, 10, 10);
    }
}

export default Snake;