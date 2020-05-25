function PowerStone(x, y, img) {
  this.x = x;
  this.y = y;
  this.width = 30;

  this.image = img;

  this.show = function () {
    image(
      this.image,
      this.x + this.width / 2,
      this.y + this.width / 2,
      this.width,
      50
    );
  };

  this.collided = function (x, y) {
    console.log((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) < 5000;
  };
}
