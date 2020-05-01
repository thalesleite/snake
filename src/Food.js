class Food {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 10;
        this.x = Math.ceil(Math.random() * this.canvas.width);
        this.y = Math.ceil(Math.random() * this.canvas.height);
    }

    show() {
        this.ctx.beginPath();

        this.ctx.rect(this.x, this.y, this.scale, this.scale);
        this.ctx.strokeStyle = '#DC143C';
        this.ctx.lineWidth = '2';

        this.ctx.stroke();
    }

    erase () {
        this.ctx.clearRect(this.x, this.y, this.scale, this.scale);
    }

    update() {
        this.x = Math.ceil(Math.random() * this.canvas.width);
        this.y = Math.ceil(Math.random() * this.canvas.height);
    }
}

export default Food;