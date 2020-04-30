class Food {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 15;
        this.x = 30;
        this.y = 20;
    }

    show() {
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
        this.ctx.fillStyle = '#fff';
    }
}

export default Food;