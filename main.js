scoreleftWrist = 0 ;
song="null" ;
scoreleftWrist= 0 ;
scorerightWrist =0 ; 
leftWristX= 0 ;
leftWristY= 0 ;
rightWristX= 0 ;
rightWristY= 0 ;

function preload()
{
song=loadSound("music.mp3") ;

}

function setup()
{
    canvas = createCanvas(600,500) ;
    canvas.center() ;

    video = createCapture(VIDEO) ;
    video.hide() ;  
    poseNet = ml5.poseNet(video , modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
    
}
function modelLoaded()
{
console.log("poseNet est initialized" ) ;
}

function gotPoses(results)
 {
    if(results.length>0)
    {
        console.log(results) ;
        scoreleftWrist = results[0].pose.keypoints[9].score ;
        scorerightWrist = results[0].pose.keypoints[10].score ;
        console.log("scorerightWrist = " + scorerightWrist + "scoreleftWrist = " + scoreleftWrist) ;
        leftWristX=results[0].pose.leftWrist.x ;
        leftWristY=results[0].pose.leftWrist.y ;
        console.log("leftWristX = "+ leftWristX + "  leftWristY = " + leftWristY) ;
        rightWristX=results[0].pose.rightWrist.x ;
        rightWristY=results[0].pose.rightWrist.y ;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY) ;
    }
    
    
 }


function draw()
{
    image(video , 0 , 0 , 600 , 500)
    fill('#C0c0c0') ;
    stroke('#FF0000') ;
}
    if(scoreleftWrist >0.2)
    {
    circle(leftWristX , leftWristY , 20) ;
    InNumberleftwristY = Number(leftwristY) ;
    remove_decimals = floor(InNumberleftwristY) ;
    volume = rmove_decimals/500 ;
    document.getElementById("volume").innerHTML = "volume = " + volume ;
    song.setvolume(volume) ;
    }
    if(rightWristY > 0 && rightWristY  <=100)
    {
    document.getElementById("speed").innerHTML = "speed = 0.5x" ;
    set.rate(0.5) ;

    }
    else if(rightWristY>100 && rightWristY<=200)
    {
document.getElementById("speed").innerHTML = "speed = 1x"
 song.rate(1) ;

}
else if(rightWirstY >200 && rightWirstY <= 300)
{
document.getElementById("speed").innerHTML = "speed = 1.5x" ;
song.rate(1.5) ; 
}
else if(rightWristY >300 && rightWristY <=400) 
{
    document.getElementById("speed").innerHTML = "speed = 2x" ;
    set.rate(2) ;

}

else if(rightWristY >400 && rightWristY <=500)
{
    document.getElementById("speed").innerHTMl = "speed = 2.5x" ;
    song.rate=(2.5) ;

}
function play()
{
    song.play() ;
    song.rate(1) ;
    song.setVolume(0.7);

}