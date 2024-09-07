function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keypress", function(event){
    drumSound(event.key);
    buttonAnimation(event.key);
});

for(var i = 0; i <= document.querySelectorAll("button.drum").length;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        drumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

function drumSound(pressed){
    switch (pressed) {
        case "w":
            var drum = new Audio("sounds/snare.mp3");
                drum.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
        case "s":
            var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
        default:
            alert("Press W, A, S, D, J, K and L only!");
            break;
    }
}

