function Player() {
  this.x = windowWidth / 2;
  this.y = windowHeight / 2;
  this.weapon = new Weapon();
  this.speed = 2;
  this.img = loadImage("images/Ironman.png");
  this.width = 36;
  this.height = 60;
  this.isUsingWave = false;
  this.waveRange = 0;
  this.hasPowerStone = false;
  this.health = 100;

  this.show = function () {
    image(
      this.img,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    this.weapon.show();
    if (this.hasPowerStone) {
      this.laser();
    }
  };

  this.laser = function () {
    if (keyIsDown(81)) {
      this.isUsingWave = true;
    }
    if (this.isUsingWave) {
      if (this.waveRange < windowWidth / 2) {
        this.waveRange += 15;
        push();
        noFill();
        ellipse(this.x, this.y, this.waveRange);
        pop();
      } else {
        this.isUsingWave = false;
        this.waveRange = 0;
      }
    }
  };

  this.leftOffScreen = function () {
    return this.x <= 0;
  };

  this.rightOffScreen = function () {
    return this.x >= windowWidth;
  };

  this.topOffScreen = function () {
    return this.y <= 0;
  };

  this.bottomOffScreen = function () {
    return this.y >= windowHeight;
  };

  this.update = function () {
    this.weapon.update(this.x, this.y - 10);
    if (keyIsDown(87) && keyIsDown(68)) {
      if (!this.topOffScreen()) {
        this.y -= this.speed;
      }
      if (!this.rightOffScreen()) {
        this.x += this.speed;
      }
    } else if (keyIsDown(68) && keyIsDown(83)) {
      if (!this.rightOffScreen()) {
        this.x += this.speed;
      }
      if (!this.bottomOffScreen()) {
        this.y += this.speed;
      }
    } else if (keyIsDown(83) && keyIsDown(65)) {
      if (!this.leftOffScreen()) {
        this.x -= this.speed;
      }
      if (!this.bottomOffScreen()) {
        this.y += this.speed;
      }
    } else if (keyIsDown(65) && keyIsDown(87)) {
      if (!this.leftOffScreen()) {
        this.x -= this.speed;
      }
      if (!this.topOffScreen()) {
        this.y -= this.speed;
      }
    } else if (keyIsDown(87) && !this.topOffScreen()) {
      this.y -= this.speed;
    } else if (keyIsDown(83) && !this.bottomOffScreen()) {
      this.y += this.speed;
    } else if (keyIsDown(65) && !this.leftOffScreen()) {
      this.x -= this.speed;
    } else if (keyIsDown(68) && !this.rightOffScreen()) {
      this.x += this.speed;
    }
  };
}
