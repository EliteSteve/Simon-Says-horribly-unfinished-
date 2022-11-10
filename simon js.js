/*$(document).ready(function(){

    $(document).on('keypress','selector',init_run);
})/*

/*button.onclick = buttonFlash()

function buttonFlash(){
    document.getElementById("green")
}*/

const init_sequence = [];
const game_sequence = [];

//function init_run(){
    for (let i = 0; i < 100; i++){
        let x = Math.floor(Math.random() * 4) + 1;
        init_sequence.push(x);
    }
    //output_run()
//}
//function output_run(){
    for (let i = 0; i < init_sequence.length; i++){
        let y = init_sequence[i]
        //console.log(y);
        game_sequence.push(y);
        if (y == 1){
            document.getElementById(green);
            green.onclick = green.style.pressed;
        } 
        else if (y == 2){
            document.getElementById(red);
            red.onclick = red.pressed;
        }
        else if (y == 3){
            document.getElementById(yellow);
            yellow.onclick = yellow.pressed;
        }
        else if (y == 4){
            document.getElementById(blue);
            blue.onclick = blue.pressed;
        }
    }
//}

console.log(init_sequence);
console.log(game_sequence);
