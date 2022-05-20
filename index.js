let wellTemperedNotes = {
    'C': 16.35,
    'Db': 17.32,
    'D': 18.35,
    'Eb': 19.45,
    'E': 20.6,
    'F': 21.83,
    'Gb': 23.12,
    'G': 24.5,
    'Ab': 25.96,
    'A': 27.5,
    'Bb': 29.1352,
    'B': 30.8677,
}

function square2(exp)
{
    let x = 2;
    if (exp < 0)
    {
        console.log("exp is negative")
        return ;
    }
    if(exp == 0)
        return 1;
    for (let i = 1; i < exp; i++)
         x *= 2;
    return x;
}

function getNotes(baseSet)
{
    let allNotes = {
    'C':  [],
    'Db': [],
    'D': [],
    'Eb':  [],
    'E':  [],
    'F':  [],
    'Gb':  [],
    'G':  [],
    'Ab':  [],
    'A':  [],
    'Bb':  [],
    'B':  []
};
    for(let [note, value] of Object.entries(baseSet))
    {
        for(let i = 0;  i < 8; i++)
        {   
            allNotes[note][i] = value * square2(i);
        }
    }
    return allNotes;
}

//notes can be accessed by doing Notes.C[1] for C1
const Notes = getNotes(wellTemperedNotes);



let context = new AudioContext();
let oscillateur = context.createOscillator();
let gainNode = context.createGain();

oscillateur.connect(gainNode);


gainNode.connect(context.destination);


oscillateur.type = 'square';
oscillateur.frequency.value = 440;
oscillateur.start(0);

gainNode.gain.value = 1;
console.log(context)

function musique()
{
    oscillateur.frequency.value = 880
}

setTimeout(musique,1000)

document.body.addEventListener("keydown", play)