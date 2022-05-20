import {Notes} from "./getNotes.js"

let intervals = [];
let noteSerie = [];
function synthInit()
{
    let context = new AudioContext();
    let oscillateur = context.createOscillator();
    let gainNode = context.createGain();

    oscillateur.connect(gainNode);
    gainNode.connect(context.destination);

    oscillateur.type = 'square';
    gainNode.gain.value = 0;
    // oscillateur.frequency.value = 440;

    oscillateur.start(0);
}

function synthDisplay()
{
    document.querySelector(".synthStarter").remove();
    
}

document.body.querySelector(".synthStarter").addEventListener("click", ()=>{
    synthInit();
    synthDisplay();
})
// document.body.addEventListener("keydown", play)