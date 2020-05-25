function Zombie() {
  this.x = Math.random() * -20 + windowWidth - 20;
  this.y = Math.random() * windowHeight;
  this.angle;
  this.img = loadImage("images/Zombie.jpg");
  this.width = 36;

  this.update = function (x, y) {
    this.angle = Math.atan2(y - this.y - 18, x - this.x - 18);
    this.x += Math.cos(this.angle);
    this.y += Math.sin(this.angle);
  };

  this.show = function () {
    image(this.img, this.x, this.y, this.width, this.width);
  };
}
