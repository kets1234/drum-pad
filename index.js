
for(var i = 0; i < document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(Event){
    makeSound(Event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var audioSnare = new Audio('sounds/snare.mp3');
                audioSnare.play();
            break;
        case "a":
            var audioKick = new Audio('sounds/kick-bass.mp3');
                audioKick.play();
            break;
        case "s":
            var audioCrash = new Audio('sounds/crash.mp3');
                audioCrash.play();
            break;
        case "d":
            var audioTom1 = new Audio('sounds/tom-1.mp3');
                audioTom1.play();
            break;
        case "j":
            var audioTom2 = new Audio('sounds/tom-2.mp3');
                audioTom2.play();
            break;
        case "k":
            var audioTom3 = new Audio('sounds/tom-3.mp3');
                audioTom3.play();
            break;
        case "l":
            var audioTom4 = new Audio('sounds/tom-4.mp3');
                audioTom4.play();
            break;
        default:
            alert("Press w,a,s,d,j,k and l only!");
            break;
    }
}

//var audioTom = new Audio('sounds/tom-1.mp3');
//audioTom.play();