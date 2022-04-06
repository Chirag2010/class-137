status="";
object="";
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();

    video=createVideo(VIDEO);
    video.hide();
}
function start(){
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
object=document.getElementById("input_1").value;
}
function modelLoaded(){
    console.log("model loaded!");
        status=true;   
}
function draw(){
    image(video, 0, 0, 480, 380);
}











