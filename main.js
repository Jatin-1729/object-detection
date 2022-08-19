modelStatus = "";
img ="";
object = [];

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("score").innerHTML = "Status: Detecting Objects  ............";
}

function modelLoaded(){
    console.log("cocossd model is initialized");
    modelStatus = true ; 

    objectDetector.detect(img,gotResult);

}

function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
 object = result ;   
}
}

function preload(){
    img = loadImage("dog_cat.jpg");
}


function draw(){
    image(img,0,0,640,420);
if(modelStatus!=""){
    for(i=0;i<object.length;i++){
      //  console.log(object[i].label);
        document.getElementById("score").innerHTML = "Status: Object Is Detected";
        fill("#ff0000");
        percentage = floor(object[i].confidence*100);
        text(object[i].label+" "+percentage+"%",object[i].x+15 ,object[i].y+15 );
        noFill();
        stroke("#ff0000");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    } 
}
   

 
}
