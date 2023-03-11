function setup(){
    canvas = createCanvas(550,550)
    canvas.center()
    
    video = createCapture(VIDEO)
      video.size(550,600)

      poseNet = ml5.poseNet(video, modelLoaded )
      poseNet.on("pose", gotPoses)


}
function modelLoaded(){
    console.log("PodeNet is now initialize")
}
function draw(){
    
}

function gotPoses(results){
    
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x
        leftWristX = results[0].pose.leftWrist.x
    }

}