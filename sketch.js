var cnv;
var player;
var bullets = [];
var zombies = [];
var score = 0;
var zombies_spawn_counter = 10;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  player = new Player();
  create_zombie(zombies_spawn_counter);
}

function bullet() {
  update_bullets();
}

function zombie() {
  update_zombies();
  check_collision();
  respawn_zombies();
}

function game_statues() {
  textSize(50);
  text("Score: " + score, 50, 70);
}

function draw() {
  background(255);
  cnv.mouseClicked(create_bullet);
  player.show();
  player.update();
  bullet();
  zombie();
  game_statues();
}

function create_bullet() {
  bullets.push(new Bullet(player.x, player.y, player.weapon.angle));
}

function create_zombie(amount) {
  for (var i = 0; i < amount; i++) {
    zombies.push(new Zombie());
  }
}

function respawn_zombies() {
  if (zombies.length == 0) {
    zombies_spawn_counter += 2;
    create_zombie(zombies_spawn_counter);
  }
}

function update_zombies() {
  for (var i = 0; i < zombies.length; i++) {
    zombies[i].update(player.x, player.y);
    zombies[i].show();
  }
}

function update_bullets() {
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].update();
    bullets[i].show();
    //remove offscreen bullets
    if (bullets[i].offScreen()) {
      bullets.splice(i, 1);
    }
  }
}

function check_collision() {
  for (var j = 0; j < zombies.length; j++) {
    if (
      (zombies[j].x - player.x) * (zombies[j].x - player.x) +
        (zombies[j].y - player.y) * (zombies[j].y - player.y) <
      ((player.waveRange / 2) * player.waveRange) / 2
    ) {
      zombies.splice(j, 1);
      score++;
    }
  }
  for (var i = 0; i < bullets.length; i++) {
    for (var x = 0; x < zombies.length; x++) {
      if (bullets[i].hitZombie(zombies[x].x, zombies[x].y)) {
        bullets.splice(i, 1);
        zombies.splice(x, 1);
        score++;
        break;
      }
    }
  }
}
