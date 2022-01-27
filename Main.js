function setup()
{
    canvas = createCanvas(450, 400);
    canvas.position(560, 250);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("Dr. Pineapple" + results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        difference = floor(lwx - rwx);
        console.log(difference);
        console.log(x, y);
    }
}
