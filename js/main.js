var role
var mic

function setup() {
    createCanvas(windowWidth, windowHeight);
    $('#defaultCanvas0').addClass('myCanvas');
    mic = new p5.AudioIn()
    mic.start();
    role = loadGif("lapin.gif")

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#fff3f3');
    micLevel = mic.getLevel();
    image(role,windowHeight/4,windowWidth/4,role.width/3,role.height/3)
}
