function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function take_snapshotz(){
    save('myfilterimage.png');
}
function draw(){
    image(video, 0, 0, 300, 300);

}
function modelLoaded(){
    console.log("'poseNet is initialized'");

}
function gotPoses(results){
if(results.lenght > 0){
    console.log(results);
    console.log("noseX ="+ results[0].pose.nose.Y);
    console.log("noseY ="+ results[0].pose.nose.Y);
}
}
