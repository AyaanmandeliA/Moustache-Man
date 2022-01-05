function preload() { }
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLooaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
}

function takemewithyou() {
    save("m.jpg");
}

function modelLooaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        console.log( " nose x =" + results[0].pose.nose.x);
        console.log( " nose y =" + results[0].pose.nose.y);
    }
}