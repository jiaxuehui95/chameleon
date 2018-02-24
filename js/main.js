var role;
var mic;
var height;
var diff;
var isUp;
var isDown;
var isLock;

function setup() {
    createCanvas(windowWidth, windowHeight);
    $('#defaultCanvas0').addClass('myCanvas');
    mic = new p5.AudioIn()
    mic.start();
    height =windowHeight/2
    diff=0
    isUp=false;
    isDown=false;
    isLock=false;
    role = loadGif("lapin.gif")

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#fff3f3');
    micLevel = mic.getLevel();

    image(role,windowWidth/4,height-diff,role.width/3,role.height/3)
    if(micLevel>0.01) {
        console.log(micLevel)
        if(!isLock) {
            isUp = true;
            isLock=true;
        }
    }
    if(isUp&&diff===80)
    {
        isUp=false;
        isDown=true;
    }
    if(isUp&&diff<80)
        diff+=10

    if(isDown&&diff>=0)
        diff-=10
    if(isDown&&diff===0)
    {
        isDown=false
        isLock=false
    }

}

