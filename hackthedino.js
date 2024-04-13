//make a issue for a bug
//enjoy

Runner.instance_.setSpeed(1000)
//unlimited speed

var original = Runner.prototype.gameOver
Runner.prototype.gameOver = function (){}
Runner.prototype.gameOver = original
//emortal dino
var original = Runner.prototype.gameOver
Runner.prototype.gameOver = function (){}
//un-emortal dino

Runner.instance_.tRex.setJumpVelocity(99)
//control the jump

Runner.instance_.distanceRan = 99999
//change your point

Runner.instance_.playingIntro = true
//intro glitch
Runner.instance_.playingIntro = false 
//no intro glitch
