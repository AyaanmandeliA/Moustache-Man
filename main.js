
NoseX = 0;
NoseY = 0;

function preload() {
 clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
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
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(NoseX , NoseY , 20 , 20);
    image(clown_nose , NoseX-10 , NoseY-10 , 20 , 20)

}

function takemewithyou() {
    save("clown.png");
}

function modelLooaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log( " nose x =" + NoseX);
        console.log( " nose y =" + NoseY);
    }
}

