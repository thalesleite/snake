class Food {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 10;
        this.x = Math.ceil(Math.random() * this.canvas.width);
        this.y = Math.ceil(Math.random() * this.canvas.height);;
    }

    show() {
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
        this.ctx.fillStyle = '#fff';
    }
}

export default Food;