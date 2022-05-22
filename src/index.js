import {Notes} from "./getNotes.js"

let intervals = [];
let noteSerie = [];
let octave = 4;

let context;
let oscillateur;
let gainNode;
function synthInit()
{
    context = new AudioContext();
    oscillateur = context.createOscillator();
    gainNode = context.createGain();

    oscillateur.connect(gainNode);
    gainNode.connect(context.destination);

    oscillateur.type = 'triangle';

    gainNode.gain.value = 0;
    oscillateur.frequency.value = Notes.A[4];
    oscillateur.start(0);
    
}

function stopSound(e)
{
    console.log(e);
    // oscillateur.stop(0);
    gainNode.gain.value = 0;
}

function play(e)
{
    if (e.target.classList[1] === "k0" || e.key === "q")
    {
        oscillateur.frequency.value = Notes.C[octave]
        // console.log(document.body.querySelector(".k0").style)
        document.body.querySelector(".k0").style.backgroundColor = "black"
    }
    else if (e.target.classList[1] === "k1" || e.key === "z")
    {
        oscillateur.frequency.value = Notes.Db[octave]
    }
    else if (e.target.classList[1] === "k2" || e.key === "s")
    {
        oscillateur.frequency.value = Notes.D[octave]
    }
    else if (e.target.classList[1] === "k3" || e.key === "e")
    {
        oscillateur.frequency.value = Notes.Eb[octave]
    }
    else if (e.target.classList[1] === "k4" || e.key === "d")
    {
        oscillateur.frequency.value = Notes.E[octave]
    }
    else if (e.target.classList[1] === "k5" || e.key === "f")
    {
        oscillateur.frequency.value = Notes.F[octave]
    }
    else if (e.target.classList[1] === "k6" || e.key === "t")
    {
        oscillateur.frequency.value = Notes.Gb[octave]
    }
    else if (e.target.classList[1] === "k7" || e.key === "g")
    {
        oscillateur.frequency.value = Notes.G[octave]
    }
    else if (e.target.classList[1] === "k8" || e.key === "y")
    {
        oscillateur.frequency.value = Notes.Ab[octave]
    }
    else if (e.target.classList[1] === "k9" || e.key === "h")
    {
        oscillateur.frequency.value = Notes.A[octave]
    }
    else if (e.target.classList[1] === "k10" || e.key === "u")
    {
        oscillateur.frequency.value = Notes.Bb[octave]
    }
    else if (e.target.classList[1] === "k11" || e.key === "j")
    {
        oscillateur.frequency.value = Notes.B[octave]
    }
    else
        return;
    gainNode.gain.value = 0.05;
    // setTimeout(stop, 300)
}

function octaveModulation(e)
{
    if(e.code === "ArrowUp")
        octave++
    else if(e.code === "ArrowDown")
        octave--
    console.log(octave)
}

function synthDisplay()  
{
    let noteNumber = 0;
    document.querySelector(".synthStarter").remove();
    let board = document.querySelector("#board")
    document.body.addEventListener("keyup", (e)=>{stopSound(e)})
    for(let i = 0; i < 12; i++)
    {
        let div = document.createElement("div");
        board.appendChild(div);
        div.setAttribute("class", "key");
        div.classList.add( `k${noteNumber++}`);
        document.body.addEventListener("keydown", (e) =>{
            play(e)
        })
        document.body.addEventListener("keydown", octaveModulation)
        div.addEventListener("click", play)
    }
}

document.body.querySelector(".synthStarter").addEventListener("click", ()=>{
    synthInit();
    synthDisplay();
    
})
