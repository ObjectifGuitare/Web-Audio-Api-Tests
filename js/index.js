import {Notes} from "./getNotes.js"

let intervals = [];
let noteSerie = [];



let context = new AudioContext();
let oscillateur = context.createOscillator();
let gainNode = context.createGain();

oscillateur.connect(gainNode);


gainNode.connect(context.destination);


oscillateur.type = 'square';
// oscillateur.frequency.value = 540;


gainNode.gain.value = 0;
console.log(context)

function musique()
{
    gainNode.gain.value = 0.1;
    oscillateur.frequency.value = Notes.A[4]
    // setTimeout
}



document.body.querySelector("p").addEventListener("click", ()=>{
    
    oscillateur.start(0);
    musique()

})
// document.body.addEventListener("keydown", play)