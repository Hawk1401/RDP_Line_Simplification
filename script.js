let points = [];

function setup(){
    createCanvas(500, 300);
    background(144);
    beginShape();
    translate(0, height/2);
    fill(0);
    noFill();
    stroke(1);
    for(let i = 0; i < width; i++){
        let x = i / 100;
        let y = Math.exp(-x) * Math.cos(2* Math.PI * x);
        y *= -1;
        points.push(createVector(x,y));
        vertex(x*100, y*100);
    }
    endShape();
}

function draw(){
    
}

function getSimplePoint(arry, start, end){
    //vector rechnung
    //cerate vector von Start zu end
    //lot fuß punkt verfahren.
    
    //return cordiates of the farest away point in the array
}