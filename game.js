const molecules = [
  { id:'water', name:'Vesi', formula:'H₂O', hint:'Igapäevane aine, mida vajame eluks.', atoms:['O','H','H'], charges:[-2,1,1], bonds:[[0,1,1],[0,2,1]], bondTypes:['covalent','covalent'], fact:'Vesi on elu üks tähtsamaid aineid.', guide:'Hapnikul on mudelis −2 ja mõlemal vesinikul +1; kaks kovalentset sidet annavad kokku neutraalse vee.', difficulty:'easy' },
  { id:'carbon-dioxide', name:'Süsinikdioksiid', formula:'CO₂', hint:'Taimed kasutavad seda fotosünteesis.', atoms:['C','O','O'], bonds:[[0,1,2],[0,2,2]], fact:'Süsinikdioksiid liigub süsinikuringes.', guide:'Süsinik on keskel ja iga hapnik on sellega seotud kahekordse sidemega.', difficulty:'easy' },
  { id:'methane', name:'Metaan', formula:'CH₄', hint:'Maagaasi peamine koostisosa.', atoms:['C','H','H','H','H'], charges:[-4,1,1,1,1], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], fact:'Metaan on kõige lihtsam alkaan.', guide:'Süsinikul on mudelis −4 ja neljal vesinikul +1; kogulaeng on null.', difficulty:'easy' },
  { id:'ammonia', name:'Ammoniaak', formula:'NH₃', hint:'Seda kasutatakse väetiste tootmisel.', atoms:['N','H','H','H'], bonds:[[0,1,1],[0,2,1],[0,3,1]], fact:'Ammoniaagil on terav iseloomulik lõhn.', guide:'Lämmastik on keskel ja kolm vesinikku on temaga üksikute sidemetega seotud.', difficulty:'easy' },
  { id:'hydrogen', name:'Vesinik', formula:'H₂', hint:'Lihtsaim ja kõige kergem element.', atoms:['H','H'], bonds:[[0,1,1]], fact:'Vesinik on tähtede peamine ehitusplokk.', guide:'Kaks vesiniku aatomit on seotud ühe ühise sidemega.', difficulty:'easy' },
  { id:'oxygen', name:'Hapnik', formula:'O₂', hint:'Hingamiseks vajalik gaas.', atoms:['O','O'], bonds:[[0,1,2]], fact:'Hapnik on meie hingamise puhul oluline.', guide:'Hapniku kaks aatomit on seotud kahekordse sidemega.', difficulty:'easy' },
  { id:'hydrogen-chloride', name:'Vesinikkloriidhape', formula:'HCl', hint:'Krõbe hape, millel on tugev lõhn.', atoms:['H','Cl'], bonds:[[0,1,1]], fact:'Soolhape tekib HCl lahustamisel vees.', guide:'Vesinik ja kloor on ühinenud ühe singliga.', difficulty:'medium' },
  { id:'sodium-chloride', name:'Naatriumkloriid', formula:'NaCl', hint:'Tuntud ka lauasoolana.', atoms:['Na','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['ionic'], fact:'Tavaline lauasool on ioniline ühend.', guide:'Naatrium ja kloor on ühendatud ühe sidemega.', difficulty:'medium' },
  { id:'hydrogen-peroxide', name:'Vesinikperoksiid', formula:'H₂O₂', hint:'Kasutatakse desinfitseerimiseks ja pleegitamiseks.', atoms:['H','O','O','H'], bonds:[[0,1,1],[1,2,1],[2,3,1]], fact:'See on tugev oksüdeerija ja laguneb kiiresti.', guide:'Molekulis on O-O keskne ühend ja mõlemad otsad on H-ga seotud.', difficulty:'medium' },
  { id:'carbon-monoxide', name:'Süsinikmonooksiid', formula:'CO', hint:'Mürgine gaas, mis tekib mittetäielikul põlemisel.', atoms:['C','O'], bonds:[[0,1,3]], fact:'CO on väga mürgine, sest see seob hemoglobiini.', guide:'Süsinik ja hapnik on seotud kolmekordse sidemega.', difficulty:'medium' },
  { id:'sulfur-dioxide', name:'Sulfardioksiid', formula:'SO₂', hint:'Aine, mida moodustub koldes ja tööstuses.', atoms:['S','O','O'], bonds:[[0,1,2],[0,2,2]], fact:'Dioksiid on tugev reostaja ja tekitab kuivest lõhna.', guide:'Väävel on keskel ja mõlemad hapnikud on temaga kahekordsete sidemetega ühendatud.', difficulty:'medium' },
  { id:'carbon-tetrachloride', name:'Süsiniktetrakloriid', formula:'CCl₄', hint:'Märkimisväärselt raske ja kloriga seotud ühend.', atoms:['C','Cl','Cl','Cl','Cl'], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], fact:'CCl₄ on üldiselt ebapüsiv ja läheb kasutuselt välja.', guide:'Süsinik on keskel ja kõik neli klori aatomit on temaga üksikute sidemetega ühendatud.', difficulty:'hard' },
  { id:'ozone', name:'Osoon', formula:'O₃', hint:'Kaitseb Maad UV-kiirguse eest.', atoms:['O','O','O'], bonds:[[0,1,1],[1,2,2]], fact:'Osoon on stratosfääris ülioluline.', guide:'Osoonis on üks O aatom keskel ja üks side on lihtne, teine kahekordne.', difficulty:'hard' },
  { id:'sodium-hydroxide', name:'Naatriumhüdroksiid', formula:'NaOH', hint:'Levinud base, tugev leelis.', atoms:['Na','O','H'], charges:[1,-1,0], bonds:[[0,1,1],[1,2,1]], bondTypes:['ionic','covalent'], fact:'NaOH lahuses moodustab leelise ja on tugev alus.', guide:'Naatrium ja hapnik on ühendatud ühe ioonse sidemega, hapnik ja vesinik ühe kovalentse sidemega.', difficulty:'hard' },
  { id:'hydrogen-sulfide', name:'Vesiniksulfiid', formula:'H₂S', hint:'Mürgine gaas, millel on ebameeldiv lõhn.', atoms:['H','S','H'], bonds:[[0,1,1],[1,2,1]], fact:'H₂S on mürgine ja seda leidub mõnedes geotermilistes allikates.', guide:'Väävel on keskel ja kaks vesinikku on temaga ühekordsete sidemetega seotud.', difficulty:'hard' },
  { id:'nitrogen', name:'Lämmastik', formula:'N₂', hint:'Maa atmosfääris on see kõige levinum gaas.', atoms:['N','N'], bonds:[[0,1,3]], fact:'Lämmastikmolekul on väga stabiilne ja sisaldab kolmekordset sidet.', guide:'Lämmastiku kaks aatomit on ühendatud kolmekordse sidemega.', difficulty:'hard' },
  { id:'chlorine', name:'Kloor', formula:'Cl₂', hint:'Kloor on üsna reaktiivne ja kasutusel desinfitseerimisel.', atoms:['Cl','Cl'], bonds:[[0,1,1]], fact:'Kloor on vajalik veepuhastuses ja tekib ka valgenditest.', guide:'Kaks klooriaatomit on ühendatud ühekordse sidemega.', difficulty:'hard' }
];
const elements = [{symbol:'H',name:'vesinik',className:'h'},{symbol:'O',name:'hapnik',className:'o'},{symbol:'C',name:'süsinik',className:'c'},{symbol:'N',name:'lämmastik',className:'n'},{symbol:'Cl',name:'kloor',className:'cl'},{symbol:'Na',name:'naatrium',className:'na'},{symbol:'S',name:'väävel',className:'s'},{symbol:'Mg',name:'magneesium',className:'mg'},{symbol:'Ca',name:'kaltsium',className:'ca'},{symbol:'Al',name:'alumiinium',className:'al'},{symbol:'F',name:'fluor',className:'f'}];
const saltChallenges = [
  { id:'salt-nacl', name:'Naatriumkloriid', formula:'NaCl', atoms:['Na','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['ionic'] },
  { id:'salt-mgcl2', name:'Magneesiumkloriid', formula:'MgCl₂', atoms:['Mg','Cl','Cl'], charges:[2,-1,-1], bonds:[[0,1,1],[0,2,1]], bondTypes:['ionic','ionic'] },
  { id:'salt-alf3', name:'Alumiiniumfluoriid', formula:'AlF₃', atoms:['Al','F','F','F'], charges:[3,-1,-1,-1], bonds:[[0,1,1],[0,2,1],[0,3,1]], bondTypes:['ionic','ionic','ionic'] },
  { id:'salt-cao', name:'Kaltsiumoksiid', formula:'CaO', atoms:['Ca','O'], charges:[2,-2], bonds:[[0,1,1]], bondTypes:['ionic'] }
];
let target = molecules[0], atoms = [], bonds = [], selected = null, score = 0, completed = new Set(), bestScore = 0;
let selectedCharge = 0;
let saltMode = false;
let dragState = null;
let pointerMoved = false;
let timerEnabled = false;
let timerInterval = null;
let timeRemaining = 60;
let tutorialShown = false;
let actionHistory = [];
let currentLang = 'et';
let audioContext = null;
const STORAGE_KEY = 'chemistry-game-best-score';
const COMPLETED_KEY = 'chemistry-game-completed';
const LANG_KEY = 'chemistry-game-language';

const translations = {
  et: {
    title: 'Molekulimeister',
    formulaLabel: 'Sihtmolekuli valem',
    eyebrow: 'KEEMIA PUZZLE',
    points: 'punkti',
    best: 'parim',
    level: 'TASE',
    build: 'Ehita',
    lab: 'LABOR',
    yourMolecule: 'Sinu molekul',
    selectAtom: 'Vali aatom',
    startHere: 'Alusta siit',
    selectAtomBelow: 'Vali alt aatom, et see lisada',
    hint: 'Vihje',
    showStructure: 'Näita struktuuri',
    undo: 'Võta tagasi',
    timer: 'Ajapiirang',
    stopTimer: 'Peata taimer',
    checkMolecule: 'Kontrolli molekuli',
    atoms: 'AATOMID',
    selectBlock: 'Vali ehitusklots',
    collection: 'KOGUMIK',
    learnMolecules: 'Õpitavad molekulid',
    easy: 'Lihtne',
    medium: 'Keskmine',
    hard: 'Raske',
    connectionTip: 'Ühendamiseks puuduta järjest kahte aatomit. Vastasmärgiga ioonid ühenduvad automaatselt.',
    correct: 'Õige!',
    completed: 'valmis',
    needAtoms: 'Vaja on',
    atomsWord: 'aatomit',
    have: 'aga on',
    isReady: 'on valmis.',
    atomsBut: 'aatomit, aga on',
    atomCountMismatch: 'Aatomite arv ei klappi:',
    atomsCorrect: 'Aatomid on õigesti, kuid sidemed ei klapi molekuli struktuuriga.',
    moleculeNotReady: 'Molekul ei ole veel õigesti kokku pandud. Kontrolli aatomite ühendusi.',
    allLevelsCompleted: 'KÕIK TASEMED LAHENDATUD',
    gameComplete: 'Molekulimeister valmis!',
    builtAllMolecules: 'Sa ehitasid läbi kogu molekulikogu.',
    pointsScore: 'punkti',
    moleculesSolved: 'molekuli lahendatud',
    restart: 'Alusta uuesti',
    timeUp: 'Aeg sai otsa! Proovi uuesti.',
    capacity: 'Selles prototüübis mahub kuus aatomit.',
    hintPrefix: 'Vihje:',
    shownStructure: 'Näidatud õige struktuur. Vajuta "Võta tagasi", et taastada.',
    statusSelect: 'Vali aatom',
    statusNext: 'Vali teine aatom',
    supportLabel: 'Toetamise info',
    supportText: 'Kui soovid mind toetada, siis saab seda teha arveldusarvega:',
    contact: 'Kontakt:',
    saltModeLabel: 'REŽIIM',
    saltModeTitle: 'Ehita sool',
    saltModeStart: 'Alusta',
    saltModeClose: 'Sulge',
    saltModeDescription: 'Tasakaalusta ioonid ja ehita neutraalne ühend.',
    saltModePrompt: 'Vali näidatud laengud ja ühenda vastasmärgid.',
    tutorial: [
      'Tere tulemast Molekulimeistri!',
      'Vali alt aatomid, et neid lisada.',
      'Klõpsi kahte aatomit, et need ühendada.',
      'Sama paari uuesti klõpsates muudad sideme järku.',
      'Kui oled valmis, vajuta "Kontrolli molekuli".'
    ]
  },
  en: {
    title: 'Molecule Master',
    formulaLabel: 'Target molecule formula',
    eyebrow: 'CHEMISTRY PUZZLE',
    points: 'points',
    best: 'best',
    level: 'LEVEL',
    build: 'Build',
    lab: 'LAB',
    yourMolecule: 'Your molecule',
    selectAtom: 'Select atom',
    startHere: 'Start here',
    selectAtomBelow: 'Select an atom below to add it',
    hint: 'Hint',
    showStructure: 'Show structure',
    undo: 'Undo',
    timer: 'Timer',
    stopTimer: 'Stop timer',
    checkMolecule: 'Check molecule',
    atoms: 'ATOMS',
    selectBlock: 'Select building block',
    collection: 'COLLECTION',
    learnMolecules: 'Molecules to learn',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    connectionTip: 'Touch two atoms in sequence. Oppositely charged ions connect automatically.',
    correct: 'Correct!',
    completed: 'completed',
    needAtoms: 'Need',
    atomsWord: 'atoms',
    have: 'but have',
    isReady: 'is ready.',
    atomsBut: 'atoms, but have',
    atomCountMismatch: 'Atom count mismatch:',
    atomsCorrect: 'Atoms are correct, but bonds do not match the molecule structure.',
    moleculeNotReady: 'Molecule is not correctly assembled yet. Check atom connections.',
    allLevelsCompleted: 'ALL LEVELS COMPLETED',
    gameComplete: 'Molecule Master complete!',
    builtAllMolecules: 'You have built the entire molecule collection.',
    pointsScore: 'points',
    moleculesSolved: 'molecules solved',
    restart: 'Start over',
    timeUp: 'Time is up! Try again.',
    capacity: 'This prototype supports up to six atoms.',
    hintPrefix: 'Hint:',
    shownStructure: 'Correct structure shown. Press "Undo" to restore.',
    statusSelect: 'Select an atom',
    statusNext: 'Select the second atom',
    supportLabel: 'Support information',
    supportText: 'If you would like to support me, you can do so by bank transfer:',
    contact: 'Contact:',
    saltModeLabel: 'MODE',
    saltModeTitle: 'Build salt',
    saltModeStart: 'Start',
    saltModeClose: 'Close',
    saltModeDescription: 'Balance the ions and build a neutral compound.',
    saltModePrompt: 'Choose the shown charges and connect opposite signs.',
    tutorial: [
      'Welcome to Molecule Master!',
      'Select atoms below to add them.',
      'Click two atoms to connecting them.',
      'Clicking the same pair again changes bond order.',
      'When ready, click "Check molecule".'
    ]
  }
};
const elementNames = {
  et: { H:'vesinik', O:'hapnik', C:'süsinik', N:'lämmastik', Cl:'kloor', Na:'naatrium', S:'väävel', Mg:'magneesium', Ca:'kaltsium', Al:'alumiinium', F:'fluor' },
  en: { H:'hydrogen', O:'oxygen', C:'carbon', N:'nitrogen', Cl:'chlorine', Na:'sodium', S:'sulfur', Mg:'magnesium', Ca:'calcium', Al:'aluminium', F:'fluorine' }
};
const moleculeText = {
  en: {
    water: ['Water', 'An everyday substance essential for life.'],
    'carbon-dioxide': ['Carbon dioxide', 'Plants use it in photosynthesis.'],
    methane: ['Methane', 'The main component of natural gas.'],
    ammonia: ['Ammonia', 'Used in the production of fertilizers.'],
    hydrogen: ['Hydrogen', 'The simplest and lightest element.'],
    oxygen: ['Oxygen', 'A gas necessary for breathing.'],
    'hydrogen-chloride': ['Hydrogen chloride', 'A sharp-smelling acid.'],
    'sodium-chloride': ['Sodium chloride', 'Also known as table salt.'],
    'hydrogen-peroxide': ['Hydrogen peroxide', 'Used for disinfection and bleaching.'],
    'carbon-monoxide': ['Carbon monoxide', 'A poisonous gas from incomplete combustion.'],
    'sulfur-dioxide': ['Sulfur dioxide', 'A pollutant formed in combustion and industry.'],
    'carbon-tetrachloride': ['Carbon tetrachloride', 'A heavy compound containing chlorine.'],
    ozone: ['Ozone', 'Protects Earth from ultraviolet radiation.'],
    'sodium-hydroxide': ['Sodium hydroxide', 'A common strong base.'],
    'hydrogen-sulfide': ['Hydrogen sulfide', 'A poisonous gas with an unpleasant smell.'],
    nitrogen: ['Nitrogen', 'The most abundant gas in Earth’s atmosphere.'],
    chlorine: ['Chlorine', 'A reactive element used for disinfection.']
  }
};
const moleculeFacts = {
  en: {
    water: 'Water is one of the most important substances for life.',
    'carbon-dioxide': 'Carbon dioxide moves through the carbon cycle.',
    methane: 'Methane is the simplest alkane.',
    ammonia: 'Ammonia has a sharp, characteristic smell.',
    hydrogen: 'Hydrogen is the main building block of stars.',
    oxygen: 'Oxygen is essential for breathing.',
    'hydrogen-chloride': 'Hydrochloric acid forms when HCl dissolves in water.',
    'sodium-chloride': 'Common table salt is an ionic compound.',
    'hydrogen-peroxide': 'Hydrogen peroxide is a strong oxidizer and decomposes quickly.',
    'carbon-monoxide': 'Carbon monoxide is highly poisonous because it binds to hemoglobin.',
    'sulfur-dioxide': 'Sulfur dioxide is a major pollutant.',
    'carbon-tetrachloride': 'Carbon tetrachloride is a heavy chlorine-containing compound.',
    ozone: 'Ozone is essential in the stratosphere.',
    'sodium-hydroxide': 'Sodium hydroxide is a strong base.',
    'hydrogen-sulfide': 'Hydrogen sulfide is poisonous and has an unpleasant smell.',
    nitrogen: 'Nitrogen molecules are very stable because of their triple bond.',
    chlorine: 'Chlorine is used in water treatment and can form from bleach.'
  }
};
const $ = id => document.getElementById(id);

function getMoleculeText(molecule) {
  return moleculeText[currentLang]?.[molecule.id] || [molecule.name, molecule.hint];
}

function getMoleculeFact(molecule) {
  return moleculeFacts[currentLang]?.[molecule.id] || molecule.fact || molecule.hint || '';
}

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playSound(type) {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  switch(type) {
    case 'addAtom':
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
    case 'addBond':
      oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(659, audioContext.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
      break;
    case 'removeBond':
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(523, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      break;
    case 'success':
      oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
      break;
    case 'error':
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
      break;
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getAtomLayoutPositions(count) {
  if (count <= 0) return [];

  const layouts = {
    1: [{ x: 50, y: 50 }],
    2: [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    3: [{ x: 50, y: 50 }, { x: 28, y: 34 }, { x: 72, y: 34 }],
    4: [{ x: 50, y: 50 }, { x: 30, y: 32 }, { x: 70, y: 32 }, { x: 50, y: 72 }],
    5: [{ x: 50, y: 25 }, { x: 71, y: 42 }, { x: 62, y: 72 }, { x: 38, y: 72 }, { x: 29, y: 42 }],
    6: [{ x: 50, y: 20 }, { x: 72, y: 34 }, { x: 72, y: 66 }, { x: 50, y: 80 }, { x: 28, y: 66 }, { x: 28, y: 34 }]
  };

  return layouts[count] || Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (index * (Math.PI * 2)) / count;
    return {
      x: 50 + Math.cos(angle) * 18,
      y: 50 + Math.sin(angle) * 18
    };
  });
}

function getTextbookLayoutForMolecule() {
  const buildCircularLayout = (angles, radius = 22, centerX = 50, centerY = 50) => angles.map((angleDeg) => {
    const angle = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    };
  });

  const mapping = {
    water: [
      { x: 50, y: 50 },
      { x: 63, y: 35 },
      { x: 37, y: 35 }
    ],
    'carbon-dioxide': [
      { x: 50, y: 50 },
      { x: 24, y: 50 },
      { x: 76, y: 50 }
    ],
    methane: buildCircularLayout([90, 210, 330, 150, 30]),
    ammonia: [
      { x: 50, y: 50 },
      { x: 63, y: 35 },
      { x: 37, y: 35 },
      { x: 50, y: 72 }
    ],
    hydrogen: [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    oxygen: [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    'hydrogen-chloride': [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    'sodium-chloride': [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    'hydrogen-peroxide': [
      { x: 28, y: 50 },
      { x: 42, y: 50 },
      { x: 58, y: 50 },
      { x: 72, y: 50 }
    ],
    'carbon-monoxide': [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    'sulfur-dioxide': [
      { x: 50, y: 50 },
      { x: 33, y: 36 },
      { x: 67, y: 36 }
    ],
    'carbon-tetrachloride': buildCircularLayout([90, 210, 330, 150, 30]),
    ozone: [
      { x: 50, y: 50 },
      { x: 35, y: 38 },
      { x: 66, y: 38 }
    ],
    'sodium-hydroxide': [
      { x: 26, y: 50 },
      { x: 50, y: 50 },
      { x: 74, y: 50 }
    ],
    'hydrogen-sulfide': [
      { x: 50, y: 50 },
      { x: 64, y: 35 },
      { x: 36, y: 35 }
    ],
    nitrogen: [{ x: 35, y: 50 }, { x: 65, y: 50 }],
    chlorine: [{ x: 35, y: 50 }, { x: 65, y: 50 }]
  };

  const result = mapping[target.id];
  if (result) {
    return result;
  }

  return getAtomLayoutPositions(atoms.length);
}

function snapAtomToLayout(index) {
  const positions = getTextbookLayoutForMolecule();
  const targetPosition = positions[index] || { x: 50, y: 50 };
  const compactWorkspace = $('workspace').clientWidth <= 400;
  const spreadX = compactWorkspace ? 1.35 : 1;
  const spreadY = compactWorkspace ? 1.15 : 1;
  atoms[index].x = clamp(50 + (targetPosition.x - 50) * spreadX, 8, 92);
  atoms[index].y = clamp(50 + (targetPosition.y - 50) * spreadY, 10, 90);
}

function getTargetSignature(targetMolecule) {
  return targetMolecule.bonds
    .map(([leftIndex, rightIndex, order, type], bondIndex) => {
      const leftSymbol = targetMolecule.atoms[leftIndex];
      const rightSymbol = targetMolecule.atoms[rightIndex];
      return [leftSymbol, rightSymbol].sort().join('-') + ':' + order + ':' + (type || targetMolecule.bondTypes?.[bondIndex] || 'covalent');
    })
    .sort()
    .join('|');
}

function getCurrentSignature() {
  return bonds
    .map(([leftIndex, rightIndex, order, type]) => {
      const leftSymbol = atoms[leftIndex].symbol;
      const rightSymbol = atoms[rightIndex].symbol;
      return [leftSymbol, rightSymbol].sort().join('-') + ':' + order + ':' + (type || 'covalent');
    })
    .sort()
    .join('|');
}

function getBondType(bond) {
  return bond[3] || 'covalent';
}

function shouldUseIonicBond(firstAtom, secondAtom) {
  const targetBondIndex = target.bonds.findIndex(bond =>
    (bond[0] === atoms.indexOf(firstAtom) && bond[1] === atoms.indexOf(secondAtom)) ||
    (bond[0] === atoms.indexOf(secondAtom) && bond[1] === atoms.indexOf(firstAtom))
  );
  if (targetBondIndex >= 0 && target.bondTypes?.[targetBondIndex]) {
    return target.bondTypes[targetBondIndex] === 'ionic';
  }
  const metals = ['Na', 'Mg', 'Ca', 'Al', 'Fe', 'Cu', 'Zn'];
  return metals.includes(firstAtom.symbol) && secondAtom.charge < 0 || metals.includes(secondAtom.symbol) && firstAtom.charge < 0;
}

function getTargetChargeSignature() {
  return (target.charges || target.atoms.map(() => 0))
    .map((charge, index) => `${target.atoms[index]}:${charge}`)
    .sort()
    .join('|');
}

function getCurrentChargeSignature() {
  return atoms.map(atom => `${atom.symbol}:${atom.charge || 0}`).sort().join('|');
}

function getTotalCharge() {
  return atoms.reduce((total, atom) => total + (atom.charge || 0), 0);
}

function getBondCountsByElement(symbolList) {
  return symbolList.reduce((counts, symbol) => {
    counts[symbol] = (counts[symbol] || 0) + 1;
    return counts;
  }, {});
}

function getValidationMessage() {
  const expectedCounts = getBondCountsByElement(target.atoms);
  const selectedCounts = getBondCountsByElement(atoms.map(atom => atom.symbol));
  const currentSignature = getCurrentSignature();
  const targetSignature = getTargetSignature(target);

  if (atoms.length !== target.atoms.length) {
    return `${t('needAtoms')} ${target.atoms.length} ${t('atomsWord')}, ${t('have')} ${atoms.length}.`;
  }

  const missingAtoms = Object.entries(expectedCounts).filter(([symbol, count]) => (selectedCounts[symbol] || 0) !== count);
  if (missingAtoms.length) {
    const details = missingAtoms.map(([symbol, count]) => `${symbol}: ${count}`).join(', ');
    return `${t('atomCountMismatch')} ${details}.`;
  }

  if (getTotalCharge() !== 0) {
    return `${currentLang === 'et' ? 'Kogulaeng peab olema 0, praegu on' : 'Total charge must be 0, currently'} ${getTotalCharge()}.`;
  }

  if (getCurrentChargeSignature() !== getTargetChargeSignature()) {
    return currentLang === 'et' ? 'Aatomid on õiged, kuid laengud ei sobi sihtühendiga.' : 'Atoms are correct, but the charges do not match the target compound.';
  }

  if (currentSignature !== targetSignature) {
    const extra = Object.entries(getBondCountsByElement(atoms.map(atom => atom.symbol))).filter(([symbol, count]) => (expectedCounts[symbol] || 0) !== count);
    if (!extra.length) {
      return t('atomsCorrect');
    }
    return t('moleculeNotReady');
  }

  return `${t('correct')} ${getMoleculeText(target)[0]} ${t('isReady')}`;
}

function loadBestScore() {
  try {
    const storedValue = Number(localStorage.getItem(STORAGE_KEY));
    bestScore = Number.isFinite(storedValue) ? storedValue : 0;
  } catch (error) {
    bestScore = 0;
  }
}

function saveBestScore() {
  try {
    localStorage.setItem(STORAGE_KEY, String(bestScore));
  } catch (error) {
    // Ignore storage failures in browsers that block localStorage.
  }
}

function loadCompletedLevels() {
  try {
    const storedValue = localStorage.getItem(COMPLETED_KEY);
    if (storedValue) {
      const completedArray = JSON.parse(storedValue);
      completed = new Set(completedArray);
    }
  } catch (error) {
    completed = new Set();
  }
}

function loadLanguage() {
  try {
    const storedLang = localStorage.getItem(LANG_KEY);
    if (storedLang && (storedLang === 'et' || storedLang === 'en')) {
      currentLang = storedLang;
    }
  } catch (error) {
    currentLang = 'et';
  }
}

function saveLanguage() {
  try {
    localStorage.setItem(LANG_KEY, currentLang);
  } catch (error) {
    // Ignore storage failures
  }
}

function t(key) {
  return translations[currentLang][key] || key;
}

function updateLanguageUI() {
  const lang = translations[currentLang];
  const moleculeDisplay = getMoleculeText(target);
  document.documentElement.lang = currentLang;
  document.title = lang.title;
  document.querySelector('.eyebrow').textContent = lang.eyebrow;
  document.querySelector('h1').textContent = lang.title;
  $('lang-toggle').textContent = currentLang === 'et' ? '🌐 EN' : '🌐 ET';
  document.querySelector('.score-chip small').textContent = lang.points;
  document.querySelector('.score-chip.secondary small').textContent = lang.best;
  document.querySelector('.level-badge').innerHTML = `${lang.level} <span id="level">01</span>`;
  document.querySelector('.mission-copy h2').innerHTML = `${lang.build} <strong id="target-name">${moleculeDisplay[0]}</strong>`;
  document.querySelector('.elements-section .section-kicker').textContent = lang.atoms;
  document.querySelector('.workspace-section .section-kicker').textContent = lang.lab;
  document.querySelector('.workspace-section h3').textContent = lang.yourMolecule;
  document.querySelector('.status').textContent = atoms.length ? lang.statusNext : lang.statusSelect;
  document.querySelector('.empty-state strong').textContent = lang.startHere;
  document.querySelector('.empty-state small').textContent = lang.selectAtomBelow;
  $('hint-button').textContent = `💡 ${lang.hint}`;
  $('show-structure-button').textContent = `🔍 ${lang.showStructure}`;
  $('undo-button').textContent = `↶ ${lang.undo}`;
  $('timer-toggle').textContent = timerEnabled ? `⏱️ ${lang.stopTimer}` : `⏱️ ${lang.timer}`;
  $('check-button').innerHTML = `${lang.checkMolecule} <span>→</span>`;
  document.querySelector('.elements-section h3').textContent = lang.selectBlock;
  document.querySelector('.molecules-section .section-kicker').textContent = lang.collection;
  document.querySelector('.molecules-section h3').textContent = lang.learnMolecules;
  document.querySelector('.salt-section .section-kicker').textContent = lang.saltModeLabel;
  document.querySelector('.salt-section h3').textContent = lang.saltModeTitle;
  document.querySelector('.connection-tip').textContent = lang.connectionTip;
  document.querySelector('.support-banner').setAttribute('aria-label', lang.supportLabel);
  document.querySelector('.workspace').setAttribute('aria-label', lang.yourMolecule);
  document.querySelector('.formula-card').setAttribute('aria-label', lang.formulaLabel);
  document.querySelector('.support-lead').textContent = lang.supportText;
  document.querySelector('.support-contact').textContent = lang.contact;
  $('salt-mode-toggle').textContent = saltMode ? lang.saltModeClose : lang.saltModeStart;
  $('salt-mode-description').textContent = lang.saltModeDescription;
  document.querySelector('#target-hint').textContent = moleculeDisplay[1];
  document.querySelectorAll('.element-choice small').forEach((el, index) => {
    el.textContent = elementNames[currentLang][elements[index].symbol];
  });
  
  // Update molecule list difficulty labels
  document.querySelectorAll('.molecule-item small').forEach((el, index) => {
    const diff = molecules[index].difficulty;
    el.textContent = diff === 'easy' ? lang.easy : diff === 'medium' ? lang.medium : lang.hard;
  });
  document.querySelectorAll('.molecule-item strong').forEach((el, index) => {
    el.textContent = getMoleculeText(molecules[index])[0];
  });
  
  // Update completion overlay
  document.querySelector('.completion-card .eyebrow').textContent = lang.allLevelsCompleted;
  document.querySelector('.completion-card h2').textContent = lang.gameComplete;
  document.querySelector('.completion-card > p:not(.eyebrow)').textContent = lang.builtAllMolecules;
  document.querySelector('.completion-score').innerHTML = `<span id="final-score">${score}</span> ${lang.pointsScore}`;
  document.querySelector('.completion-count').innerHTML = `<span id="completed-count">${completed.size}</span> ${lang.moleculesSolved}`;
  $('restart-button').innerHTML = `${lang.restart} <span>↻</span>`;
  $('charge-label').textContent = currentLang === 'et' ? 'Laeng' : 'Charge';
  $('salt-mode-description').textContent = currentLang === 'et' ? 'Tasakaalusta ioonid ja ehita neutraalne ühend.' : 'Balance the ions and build a neutral compound.';
}

function toggleLanguage() {
  currentLang = currentLang === 'et' ? 'en' : 'et';
  saveLanguage();
  updateLanguageUI();
  render();
}

function saveCompletedLevels() {
  try {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify([...completed]));
  } catch (error) {
    // Ignore storage failures in browsers that block localStorage.
  }
}

function updateScoreUI() {
  $('score').textContent = score;
  $('best-score').textContent = bestScore;
}

function updateTimerUI() {
  if (!timerEnabled) return;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  const timerDisplay = document.getElementById('timer-display') || createTimerDisplay();
  timerDisplay.textContent = display;
  timerDisplay.style.color = timeRemaining <= 10 ? '#ef8354' : '#102a43';
}

function createTimerDisplay() {
  const display = document.createElement('span');
  display.id = 'timer-display';
  display.style.cssText = 'font-size: 14px; font-weight: 700; margin-left: 10px;';
  document.querySelector('.workspace-actions').appendChild(display);
  return display;
}

function toggleTimer() {
  timerEnabled = !timerEnabled;
  const button = $('timer-toggle');
  button.textContent = timerEnabled ? `⏱️ ${t('stopTimer')}` : `⏱️ ${t('timer')}`;
  button.style.color = timerEnabled ? '#ef8354' : '#627d98';
  
  if (timerEnabled) {
    timeRemaining = 60;
    updateTimerUI();
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerUI();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerEnabled = false;
        toast(t('timeUp'));
        button.textContent = `⏱️ ${t('timer')}`;
        button.style.color = '#627d98';
      }
    }, 1000);
  } else {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) timerDisplay.remove();
  }
}

function init() {
  loadBestScore();
  loadCompletedLevels();
  loadLanguage();
  $('element-grid').innerHTML = elements.map(element => `<button class="element-choice" data-symbol="${element.symbol}" type="button"><strong>${element.symbol}</strong><small>${element.name}</small></button>`).join('');
  $('molecule-list').innerHTML = molecules.map((molecule, index) => `<button class="molecule-item ${index === 0 ? 'active' : ''} ${completed.has(molecule.id) ? 'completed' : ''}" data-id="${molecule.id}" data-difficulty="${molecule.difficulty}" type="button"><span class="molecule-symbol">${molecule.formula}</span><span><strong>${molecule.name}</strong><small>${molecule.difficulty === 'easy' ? 'Lihtne' : molecule.difficulty === 'medium' ? 'Keskmine' : 'Raske'}</small></span></button>`).join('');
  document.querySelectorAll('.element-choice').forEach(button => button.addEventListener('click', () => addAtom(button.dataset.symbol)));
  document.querySelectorAll('.charge-choice').forEach(button => button.addEventListener('click', () => {
    selectedCharge = Number(button.dataset.charge);
    document.querySelectorAll('.charge-choice').forEach(choice => choice.classList.toggle('active', choice === button));
  }));
  document.querySelectorAll('.molecule-item').forEach(button => button.addEventListener('click', () => selectTarget(button.dataset.id)));
  $('salt-mode-toggle').addEventListener('click', toggleSaltMode);
  $('undo-button').addEventListener('click', undo);
  $('hint-button').addEventListener('click', showHint);
  $('show-structure-button').addEventListener('click', showStructure);
  $('timer-toggle').addEventListener('click', toggleTimer);
  $('lang-toggle').addEventListener('click', toggleLanguage);
  $('check-button').addEventListener('click', checkMolecule);
  $('restart-button').addEventListener('click', restartGame);
  updateScoreUI();
  updateLanguageUI();
  render();
  
  if (!tutorialShown && completed.size === 0) {
    setTimeout(() => showTutorial(), 1000);
    tutorialShown = true;
  }
}

function showTutorial() {
  const tutorialSteps = translations[currentLang].tutorial;
  
  let stepIndex = 0;
  const showNextStep = () => {
    if (stepIndex < tutorialSteps.length) {
      toast(tutorialSteps[stepIndex]);
      stepIndex++;
      setTimeout(showNextStep, 3500);
    }
  };
  
  showNextStep();
}
function selectTarget(id) { saltMode = false; $('salt-challenges').hidden = true; $('salt-mode-toggle').textContent = currentLang === 'et' ? 'Alusta' : 'Start'; target = molecules.find(molecule => molecule.id === id); atoms = []; bonds = []; selected = null; actionHistory = []; document.querySelectorAll('.molecule-item').forEach(button => button.classList.toggle('active', button.dataset.id === id)); const moleculeDisplay = getMoleculeText(target); $('level').textContent = String(molecules.indexOf(target) + 1).padStart(2,'0'); $('target-name').textContent = moleculeDisplay[0]; $('target-formula').textContent = target.formula; $('target-hint').textContent = moleculeDisplay[1]; render(); }
function selectSaltChallenge(index) { saltMode = true; target = saltChallenges[index]; atoms = []; bonds = []; selected = null; actionHistory = []; document.querySelectorAll('.salt-challenge').forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index)); $('level').textContent = `S${index + 1}`; $('target-name').textContent = target.name; $('target-formula').textContent = target.formula; $('target-hint').textContent = t('saltModePrompt'); render(); }
function toggleSaltMode() { saltMode = !saltMode; $('salt-challenges').hidden = !saltMode; $('salt-mode-toggle').textContent = saltMode ? t('saltModeClose') : t('saltModeStart'); if (saltMode) { $('salt-challenges').innerHTML = saltChallenges.map((challenge, index) => `<button class="salt-challenge ${index === 0 ? 'active' : ''}" data-index="${index}" type="button">${challenge.formula}</button>`).join(''); document.querySelectorAll('.salt-challenge').forEach(button => button.addEventListener('click', () => selectSaltChallenge(Number(button.dataset.index)))); selectSaltChallenge(0); } }
function addAtom(symbol) {
  if (atoms.length >= 6) return toast(t('capacity'));
  const nextIndex = atoms.length;
  atoms.push({ symbol, charge: selectedCharge, x: 50, y: 50 });
  snapAtomToLayout(nextIndex);
  actionHistory.push({ type: 'addAtom', symbol, index: nextIndex });
  initAudio();
  playSound('addAtom');
  render();
}
function showHint() {
  const hintText = getMoleculeText(target)[1];
  $('target-hint').textContent = `${t('hintPrefix')} ${hintText}`;
  toast(hintText);
}
function showStructure() {
  const originalAtoms = [...atoms];
  const originalBonds = [...bonds];
  atoms = target.atoms.map((symbol, index) => ({ symbol, charge: target.charges?.[index] || 0, x: 50, y: 50 }));
  bonds = target.bonds.map((bond, index) => [...bond, target.bondTypes?.[index] || 'covalent']);
  atoms.forEach((_, index) => snapAtomToLayout(index));
  render();
  toast(t('shownStructure'));
  setTimeout(() => {
    atoms = originalAtoms;
    bonds = originalBonds;
    render();
  }, 3000);
}
function advanceLevel() {
  const currentIndex = molecules.findIndex(molecule => molecule.id === target.id);
  completed.add(target.id);
  saveCompletedLevels();
  if (completed.size === molecules.length) {
    showCompletion();
    return;
  }
  let nextIndex = (currentIndex + 1) % molecules.length;
  while (completed.has(molecules[nextIndex].id)) {
    nextIndex = (nextIndex + 1) % molecules.length;
  }
  selectTarget(molecules[nextIndex].id);
}
function showCompletion() {
  if (score > bestScore) {
    bestScore = score;
    saveBestScore();
  }
  $('final-score').textContent = score;
  $('completed-count').textContent = completed.size;
  $('best-score').textContent = bestScore;
  $('completion-overlay').hidden = false;
}
function restartGame() { score = 0; completed = new Set(); updateScoreUI(); $('completion-overlay').hidden = true; selectTarget(molecules[0].id); }
function render() {
  $('atom-count').textContent = atoms.length;
  $('empty-state').style.display = atoms.length ? 'none' : 'flex';
  $('status').textContent = selected === null ? (atoms.length ? t('statusNext') : t('statusSelect')) : t('statusNext');
  $('atom-layer').innerHTML = atoms.map((atom, index) => `<button class="atom atom-${atom.symbol.toLowerCase()} ${selected === index ? 'selected' : ''} ${dragState && dragState.index === index ? 'dragging' : ''}" data-index="${index}" style="left:${atom.x}%;top:${atom.y}%" type="button">${atom.symbol}<span class="atom-charge">${atom.charge > 0 ? '+' + atom.charge : atom.charge < 0 ? '−' + Math.abs(atom.charge) : '0'}</span></button>`).join('');
  document.querySelectorAll('.atom').forEach(atom => {
    const index = Number(atom.dataset.index);
    atom.addEventListener('pointerdown', event => startDragAtom(event, index));
  });
  drawBonds();
}

function startDragAtom(event, index) {
  if (event.button !== undefined && event.button !== 0) return;

  dragState = { index, moved: false, startX: event.clientX, startY: event.clientY };
  pointerMoved = false;
  event.preventDefault();

  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', stopDragAtom, { once: true });
  window.addEventListener('pointercancel', stopDragAtom, { once: true });
}

function handlePointerMove(event) {
  if (!dragState) return;

  if (!dragState.moved) {
    const distance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
    if (distance < 8) return;
  }

  const workspace = $('workspace');
  const rect = workspace.getBoundingClientRect();
  const percentX = ((event.clientX - rect.left) / rect.width) * 100;
  const percentY = ((event.clientY - rect.top) / rect.height) * 100;

  const snappedX = clamp(percentX, 8, 92);
  const snappedY = clamp(percentY, 12, 88);
  atoms[dragState.index].x = snappedX;
  atoms[dragState.index].y = snappedY;
  dragState.moved = true;
  pointerMoved = true;
  render();
}

function stopDragAtom(event) {
  const wasMoved = !!dragState && dragState.moved;
  const selectedIndex = dragState ? dragState.index : null;
  if (dragState) {
    snapAtomToLayout(selectedIndex);
  }
  window.removeEventListener('pointermove', handlePointerMove);
  dragState = null;
  pointerMoved = wasMoved;
  render();
  if (event?.type !== 'pointercancel' && !wasMoved && selectedIndex !== null) {
    selectAtom(selectedIndex);
  }
}

function selectAtom(index) {
  if (selected === null) {
    selected = index;
    render();
    return;
  }
  if (selected === index) {
    selected = null;
    render();
    return;
  }

  const existingBondIndex = bonds.findIndex(bond => (bond[0] === selected && bond[1] === index) || (bond[0] === index && bond[1] === selected));

  if (existingBondIndex >= 0) {
    const currentBond = bonds[existingBondIndex];
    if (currentBond[2] >= 3) {
      actionHistory.push({ type: 'removeBond', bond: [...currentBond], index: existingBondIndex });
      bonds.splice(existingBondIndex, 1);
      initAudio();
      playSound('removeBond');
    } else {
      actionHistory.push({ type: 'changeBond', bond: [...currentBond], index: existingBondIndex, newOrder: currentBond[2] + 1 });
      currentBond[2] = currentBond[2] + 1;
      initAudio();
      playSound('addBond');
    }
  } else {
    const firstAtom = atoms[selected];
    const secondAtom = atoms[index];
    const ionic = firstAtom.charge !== 0 && secondAtom.charge !== 0 && Math.sign(firstAtom.charge) !== Math.sign(secondAtom.charge) && shouldUseIonicBond(firstAtom, secondAtom);
    const bond = [selected, index, 1, ionic ? 'ionic' : 'covalent'];
    actionHistory.push({ type: 'addBond', bond });
    bonds.push(bond);
    initAudio();
    playSound('addBond');
  }

  selected = null;
  render();
}
function drawBonds() { const layer = $('bond-layer'); const workspace = $('workspace'); const width = workspace.clientWidth; const height = workspace.clientHeight; layer.setAttribute('viewBox',`0 0 ${width} ${height}`); layer.innerHTML = bonds.map(bond => {
  const first = atoms[bond[0]], second = atoms[bond[1]];
  if (!first || !second) return '';
  const x1 = first.x * width / 100;
  const y1 = first.y * height / 100;
  const x2 = second.x * width / 100;
  const y2 = second.y * height / 100;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  const normalX = -dy / length;
  const normalY = dx / length;
  const lines = [];
  for (let i = 0; i < bond[2]; i += 1) {
    const offset = (i - (bond[2] - 1) / 2) * 6;
    const x1Offset = x1 + normalX * offset;
    const y1Offset = y1 + normalY * offset;
    const x2Offset = x2 + normalX * offset;
    const y2Offset = y2 + normalY * offset;
    lines.push(`<line class="bond-line ${getBondType(bond)}" x1="${x1Offset}" y1="${y1Offset}" x2="${x2Offset}" y2="${y2Offset}" />`);
  }
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  lines.push(`<text x="${midX}" y="${midY}" class="bond-order" text-anchor="middle" dominant-baseline="middle">${bond[3] === 'ionic' ? '⋯' : bond[2]}</text>`);
  return lines.join('');
}).join(''); }
function undo() {
  if (actionHistory.length === 0) {
    if (bonds.length) {
      actionHistory.push({ type: 'removeBond', bond: [...bonds[bonds.length - 1]], index: bonds.length - 1 });
      bonds.pop();
    } else if (atoms.length) {
      actionHistory.push({ type: 'addAtom', symbol: atoms[atoms.length - 1].symbol, index: atoms.length - 1 });
      atoms.pop();
    }
  } else {
    const lastAction = actionHistory.pop();
    if (lastAction.type === 'addAtom') {
      atoms.splice(lastAction.index, 1);
    } else if (lastAction.type === 'addBond') {
      const bondIndex = bonds.findIndex(b => b[0] === lastAction.bond[0] && b[1] === lastAction.bond[1]);
      if (bondIndex >= 0) bonds.splice(bondIndex, 1);
    } else if (lastAction.type === 'removeBond') {
      bonds.splice(lastAction.index, 0, lastAction.bond);
    } else if (lastAction.type === 'changeBond') {
      bonds[lastAction.index][2] = lastAction.bond[2];
    }
  }
  selected = null;
  render();
}
function checkMolecule() {
  const validationMessage = getValidationMessage();
  const workspace = $('workspace');

  workspace.classList.remove('success', 'shake');
  void workspace.offsetWidth;

  if (validationMessage.startsWith(t('correct'))) {
    score += 100 + target.atoms.length * 15;
    if (score > bestScore) {
      bestScore = score;
      saveBestScore();
    }
    updateScoreUI();
    workspace.classList.add('success');
    initAudio();
    playSound('success');
    toast(validationMessage + ` ${getMoleculeFact(target)}`);
    setTimeout(() => {
      if (saltMode) {
        const nextSalt = (saltChallenges.findIndex(challenge => challenge.id === target.id) + 1) % saltChallenges.length;
        selectSaltChallenge(nextSalt);
      } else {
        advanceLevel();
      }
      workspace.classList.remove('success');
    }, 900);
  } else {
    workspace.classList.add('shake');
    initAudio();
    playSound('error');
    toast(validationMessage);
  }

  setTimeout(() => workspace.classList.remove('success', 'shake'), 480);
}
function toast(message) { const element=$('toast'); element.textContent=message; element.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(() => element.classList.remove('show'),3200); }
window.addEventListener('resize', drawBonds); init();
