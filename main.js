


function preload(){
    lipstick = loadImage("https://i.postimg.cc/SssNdpQs/Lipstick-Realtime-1.gif");
    }
    
    function setup(){
    canvas = createCanvas(300,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,350);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
    }

    function draw(){
        image(video, 0, 0, 300, 350);
        image(lipstick, , , 30, 30);
        }