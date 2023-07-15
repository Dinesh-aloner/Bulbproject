function changeImage(){
    var pic = document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("ON");
        pic.src = "Bulb off.jpeg";
    }
    else{
        console.log("OFF");
        pic.src = "Bulb on.jpeg";
    }
}