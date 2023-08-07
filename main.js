noseX=0;
noseY=0;
w=0;
h=0;
imagen_filtro="";
function preload(){
    pig_nose=loadImage('cerdito.png');
    cat_nose=loadImage('narizgatito.png');
    clown_nose=loadImage('roja.png');
    funny_nose=loadImage('gracioso.png');
    

}


function setup(){
canvas = createCanvas(300, 300);
canvas.position(530,200);
video =createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log('PonseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y
    }
}

function draw(){

image(video, 0, 0, 300, 300);

var combo=document.getElementById("filtros");
var selected=combo.options[combo.selectedIndex].text;
if(selected =="nariz de michi" ){
    imagen_filtro=cat_nose;
    noseX=noseX-120;
    noseY=noseY-150;
    w=280;
    h=280;
}
if(selected =="cabeza de cerdito" ){
    imagen_filtro=pig_nose;
    noseX=noseX-80;
    noseY=noseY-80;
    w=180;
    h=180;
}
if(selected =="nariz de payaso" ){
    imagen_filtro=clown_nose;
    noseX=noseX-25;
    noseY=noseY-25;
    w=40;
    h=40;
}
if(selected =="lentes rosas" ){
    imagen_filtro=funny_nose;
    noseX= noseX-80;
    noseY= noseY-80;
    w=200;
    h=200;
}
image(imagen_filtro, noseX, noseY, w, h);
    
}

function take_snapshot(){
    

save('myFilterImage.png');
}


