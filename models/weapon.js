function Weapon(){
     this.x
     this.y
     this.playerX
     this.playerY
     this.angle
     this.length = 30
    

     this.update = function(x, y){
        this.playerX = x 
        this.playerY = y 
        this.angle = Math.atan2(mouseY - this.playerY, mouseX - this.playerX)
        this.x = this.length * Math.cos(this.angle)
        this.y = this.length * Math.sin(this.angle)
     }

     this.show = function(){
        fill(0)
        line(this.playerX, this.playerY, this.playerX + this.x, this.playerY + this.y)
     }


     
}