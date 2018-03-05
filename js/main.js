var role;
var mic;
var height;
var diff=0;
var isUp=false;
var isDown=false;
var isLock=false;

var Min = 400;
var Max = 600;
var num_l = 5;
var wide = 100;
var speed = 25;
var min_interspace = 50;
var max_interspace = 200;
var frameCount = 0;

var recHeight;

var radius = 8.0;
var snowSpeed = 0.01;
var a = 50.0;
var arm = new Array(18);
var spots = new Array(18);

var r = new Array(num_l);

var colorFlag=0
var accLevel


function setup() {
    createCanvas(windowWidth, windowHeight);

    mic = new p5.AudioIn()
    mic.start();
    height =windowHeight/2
    diff=0
    isUp=false;
    isDown=false;
    isLock=false;
    role = loadImage("lapin.gif")
    recHeight=height+wide+30;
    accLevel=0

    frameRate(20);
    var start = 0;
    var i;
    r[0] = new Rectangle(start, windowWidth/2);
    start += windowWidth/2;
    for( i = 1; i < num_l; i++){
        var tmp = Math.random() * (Max - Min) + Min;
        var interspace =Math.random() * (max_interspace - min_interspace) + min_interspace;
        colorFlag=random(0,10);
        r[i] =new Rectangle(start+interspace, tmp,colorFlag);
        start += (tmp + interspace);
    }

    smooth();
    noStroke();

    var i;
    for(i = 0; i < 10; i++){
        var y = random(200, 500);
        arm[i] = new SpinArm(a, y, snowSpeed);
        console.log(arm[i].y)
        spots[i] = new SpinSpots(a, y, snowSpeed);
        a += 150.0;
    }
    a = 0.0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    height =windowHeight/2
    recHeight=height+wide-10

}

function draw() {
    background('#fff3f3');

    fill(0, 23);
    rect(0, 0, windowWidth, windowHeight);
    stroke(242, 156, 177);
    var i;
    for(i = 0; i < 10; i++){
        arm[i].draw_SpinArm();
        spots[i].draw_SpinSpots();
    }
    micLevel = mic.getLevel();
    // if (role.loaded())
        image(role,windowWidth/6,height-diff,role.width/2,role.height/2)
    accLevel = accelerationX;
    // if((!at_rec(windowWidth/6+role.width/5))&&(diff===0))
    // {
    //     height+=10
    //     height+=20
    //     speed=0
    // }
    if(speed>0&&accLevel>3) {

        if(!isLock) {
            isUp = true;
            isLock=true;
        }
    }
    if(isUp&&diff===120)
    {
        isUp=false;
        isDown=true;
    }
    if(isUp&&diff<120)
        diff+=20

    if(isDown&&diff>=0)
        diff-=20
    if(isDown&&diff===0)
    {
        isDown=false
        isLock=false
    }

    frameCount++;

    var i,e;
    for(i = 0; i < num_l; i++){
        r[i].draw_rect();
    }
    for( e in  r){

        r[e].beginX -= speed;
    }
    //si le premier rectangle est disparu d'écran, on ajoute un nouveau(il y a toujours num_l rectangles dans r)
    if(r[0].beginX + r[0].len < 0 ){
        for(i = 1; i < num_l; i++){
            r[i - 1] = r[i];
        }
        colorFlag=random(0,10);
        r[num_l - 1] = new Rectangle(random(r[num_l - 2].beginX + r[num_l - 2].len+min_interspace, r[num_l - 2].beginX + r[num_l - 2].len + max_interspace), random(Min, Max),colorFlag);
    }

}

function at_rec (x)
{
    if(x<r[0].beginX)
        return false
    else {
        var i
        for(i=0;i<num_l;i++)
        {
            if(x>r[i].beginX && x< r[i].beginX+r[i].len)
            {
                return true
            }
        }
    }
}

function Rectangle (beginX,len,coloFlag){
    this.beginX=beginX;
    this.len=len
    this.colorFlag=coloFlag


    var c =255;
    //var colorFlag=0
    this.draw_rect =function(){
        noStroke();

        if(this.colorFlag>5)
            fill("#eab4d4");
        else
            fill("#f7c90fb5")
        push();
        translate(this.beginX, recHeight);

        rect(0, 0, this.len, wide);

        pop();
    }

}


function Spin(xpos, ypos, s){
    this.x = xpos;
    this.y = ypos;
    this.speed = s;
}


function SpinArm(x, y, s)
{
    Spin.call(this, x, y, s);
    var angle=0;
    var i;
    this.draw_SpinArm= function(){
        // console.log(y)
        y+=1;
        strokeWeight(3);
        stroke(242, 156, 177);
        translate(x, y);
        for(i = 0; i < 8; i++){
            push();
            angle += 3.14/4;
            rotate(angle);
            line(0, 0, 24, 0);
            pop();
        }
        translate(-x, -y);
        if(y > height + radius){
            y = 0;
        }
    }
}

function F() {
}

F.prototype = Spin.prototype;

SpinArm.prototype = new F();

SpinArm.prototype.constructor = SpinArm;



function SpinSpots (x,y,s) {
    Spin.call(this, x,y,s);
    var angle=0;
    this.draw_SpinSpots=function() {
        y+=1;
        fill(255);
        noStroke();
        translate(x, y);
        push();
        //translate(x, y);
        angle += speed;
        rotate(angle);
        ellipse(-radius, 0, 2*radius, 2*radius);
        ellipse(0, -radius, 2*radius, 2*radius);
        ellipse(radius, 0, 2*radius, 2*radius);
        ellipse(0, radius, 2*radius, 2*radius);
        pop();
        translate(-x, -y);
        if(y > height + radius){
            y = 0;
        }
    }
}

function G() {
}

G.prototype = Spin.prototype;

SpinSpots.prototype = new G();

SpinSpots.prototype.constructor = SpinSpots;






