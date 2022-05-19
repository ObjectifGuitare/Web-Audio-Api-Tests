let context = new AudioContext();
let oscillateur = context.createOscillator();
let gainNode = context.createGain();

oscillateur.connect(gainNode);


gainNode.connect(context.destination);


oscillateur.type = 'square';
oscillateur.frequency.value = 880;
oscillateur.start(0);

gainNode.gain.value = 1;
console.log(context)