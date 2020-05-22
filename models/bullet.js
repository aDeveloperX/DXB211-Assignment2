function Bullet(x, y, angle) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.speed = 10;
  this.width = 12;

  this.update = function () {
    this.x += this.speed * cos(angle);
    this.y += this.speed * sin(angle);
  };

  this.show = function () {
    push();
    noStroke();
    fill("#34d2eb");
    ellipse(this.x, this.y, this.width, this.width);
    pop();
  };

  this.offScreen = function () {
    return (
      this.x > windowWidth + 7.5 ||
      this.x < -7.5 ||
      this.y > windowHeight + this.width / 2 ||
      this.y < -this.width / 2
    );
  };

  this.hitZombie = function (x, y) {
    return this.x > x && this.x < x + 36 && this.y > y && this.y < y + 36;
  };
}
