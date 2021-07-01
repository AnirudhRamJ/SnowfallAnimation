class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0.2,
            friction: 0.2
        }

        this.snow = Bodies.circle(x, y, 20, options);
        this.snowImage = loadImage("snow4.webp");
        this.radius = 20;
        World.add(world, this.snow);
    }

    updateY() {
        if (this.snow.position.y > height) {
            Matter.Body.setPosition(this.snow, { x: random(0, 800), y: random(0, 400) });
        }


    }
    display() {
        imageMode(CENTER);
        image(this.snowImage, this.snow.position.x, this.snow.position.y, this.radius, this.radius);
    }
}