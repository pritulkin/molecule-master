const molecules = [
  { id:'water', name:'Vesi', formula:'H₂O', hint:'Igapäevane aine, mida vajame eluks.', atoms:['O','H','H'], charges:[-2,1,1], bonds:[[0,1,1],[0,2,1]], bondTypes:['covalent','covalent'], fact:'Vesi on elu üks tähtsamaid aineid.', guide:'Hapnikul on mudelis −2 ja mõlemal vesinikul +1; kaks kovalentset sidet annavad kokku neutraalse vee.', difficulty:'easy', intermolecularForces:['hydrogen-bonding','dipole-dipole','london-dispersion'], primaryForce:'hydrogen-bonding', forceAnalysis:'Vesi on polaarne molekul tugevate vesiniksidemetega hapniku ja vesiniku vahel. See annab veele kõrge keemispunkti ja pindpinevuse.' },
  { id:'carbon-dioxide', name:'Süsinikdioksiid', formula:'CO₂', hint:'Taimed kasutavad seda fotosünteesis.', atoms:['C','O','O'], charges:[4,-2,-2], bonds:[[0,1,2],[0,2,2]], fact:'Süsinikdioksiid liigub süsinikiringes.', guide:'Süsinik on keskel ja iga hapnik on sellega seotud kahekordse sidemega.', difficulty:'easy', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'CO₂ on mittepolaarne lineaarne molekul. Ainukesed intermolekulaarsed jõud on Londoni dispersioonijõud, mis on nõrgad.' },
  { id:'methane', name:'Metaan', formula:'CH₄', hint:'Maagaasi peamine koostisosa.', atoms:['C','H','H','H','H'], charges:[-4,1,1,1,1], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], fact:'Metaan on kõige lihtsam alkaan.', guide:'Süsinikul on mudelis −4 ja neljal vesinikul +1; kogulaeng on null.', difficulty:'easy', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'Metaan on mittepolaarne tetraeedriline molekul. Ainukesed jõud on Londoni dispersioonijõud, mistõttu metaan on gaas toatemperatuuril.' },
  { id:'ammonia', name:'Ammoniaak', formula:'NH₃', hint:'Seda kasutatakse väetiste tootmisel.', atoms:['N','H','H','H'], charges:[-3,1,1,1], bonds:[[0,1,1],[0,2,1],[0,3,1]], fact:'Ammoniaagil on terav iseloomulik lõhn.', guide:'Lämmastikul on oksüdatsiooniaste −3 ja igal vesinikul +1; kolm üksiksidet moodustavad ammoniaagi struktuuri.', difficulty:'easy', intermolecularForces:['hydrogen-bonding','dipole-dipole','london-dispersion'], primaryForce:'hydrogen-bonding', forceAnalysis:'Ammoniaak on polaarne trigonaal-püramidaalne molekul tugevate vesiniksidemetega. See selgitab ammoniaagi kõrget keemispunkti.' },
  { id:'hydrogen', name:'Vesinik', formula:'H₂', hint:'Lihtsaim ja kõige kergem element.', atoms:['H','H'], bonds:[[0,1,1]], fact:'Vesinik on tähtede peamine ehitusplokk.', guide:'Kaks vesiniku aatomit on seotud ühe ühise sidemega.', difficulty:'easy', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'Vesinik on mittepolaarne diatomiline molekul. Ainukesed jõud on väga nõrgad Londoni dispersioonijõud.' },
  { id:'oxygen', name:'Hapnik', formula:'O₂', hint:'Hingamiseks vajalik gaas.', atoms:['O','O'], bonds:[[0,1,2]], fact:'Hapnik on meie hingamise puhul oluline.', guide:'Hapniku kaks aatomit on seotud kahekordse sidemega.', difficulty:'easy', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'Hapnik on mittepolaarne diatomiline molekul. Londoni dispersioonijõud on nõrgad, mistõttu hapnik on gaas toatemperatuuril.' },
  { id:'hydrogen-chloride', name:'Vesinikkloriidhape', formula:'HCl', hint:'Krõbe hape, millel on tugev lõhn.', atoms:['H','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['covalent'], fact:'Soolhape tekib HCl lahustamisel vees.', guide:'Vesinikul on oksüdatsiooniaste +1 ja klooril −1; H–Cl side on kovalentne.', difficulty:'medium', intermolecularForces:['dipole-dipole','london-dispersion'], primaryForce:'dipole-dipole', forceAnalysis:'HCl on polaarne molekul tugevate dipool-dipool jõududega. HCl on gaas toatemperatuuril, kuid kondenseerub madalal temperatuuril.' },
  { id:'sodium-chloride', name:'Naatriumkloriid', formula:'NaCl', hint:'Tuntud ka lauasoolana.', atoms:['Na','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['ionic'], fact:'Tavaline lauasool on ioniline ühend.', guide:'Naatrium ja kloor on ühendatud ühe sidemega.', difficulty:'medium', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'NaCl on ioniline ühend tugevate iooniliste jõududega. Need on palju tugevamad kui kõik intermolekulaarsed jõud, mistõttu NaCl on tahke toatemperatuuril.' },
  { id:'hydrogen-peroxide', name:'Vesinikperoksiid', formula:'H₂O₂', hint:'Kasutatakse desinfitseerimiseks ja pleegitamiseks.', atoms:['H','O','O','H'], bonds:[[0,1,1],[1,2,1],[2,3,1]], fact:'See on tugev oksüdeerija ja laguneb kiiresti.', guide:'Molekulis on O-O keskne ühend ja mõlemad otsad on H-ga seotud.', difficulty:'medium', intermolecularForces:['hydrogen-bonding','dipole-dipole','london-dispersion'], primaryForce:'hydrogen-bonding', forceAnalysis:'Vesinikperoksiid on polaarne molekul vesiniksidemetega. Kuid need on nõrgamad kui vees, mistõttu H₂O₂ on ebastabiilne.' },
  { id:'carbon-monoxide', name:'Süsinikmonooksiid', formula:'CO', hint:'Mürgine gaas, mis tekib mittetäielikul põlemisel.', atoms:['C','O'], bonds:[[0,1,3]], fact:'CO on väga mürgine, sest see seob hemoglobiini.', guide:'Süsinik ja hapnik on seotud kolmekordse sidemega.', difficulty:'medium', intermolecularForces:['dipole-dipole','london-dispersion'], primaryForce:'dipole-dipole', forceAnalysis:'CO on väga polaarne molekul tugevate dipool-dipool jõududega. See on gaas toatemperatuuril, kuid lahustub vees.' },
  { id:'sulfur-dioxide', name:'Sulfadioksiid', formula:'SO₂', hint:'Aine, mida moodustub koldes ja tööstuses.', atoms:['S','O','O'], charges:[4,-2,-2], bonds:[[0,1,2],[0,2,2]], fact:'Dioksiid on tugev reostaja ja tekitab kuivest lõhna.', guide:'Väävlil on oksüdatsiooniaste +4 ja kummalgi hapnikul −2; mõlemad hapnikud on väävliga kahekordse sidemega ühendatud.', difficulty:'medium', intermolecularForces:['dipole-dipole','london-dispersion'], primaryForce:'dipole-dipole', forceAnalysis:'SO₂ on polaarne bent molekul dipool-dipool jõududega. See on gaas toatemperatuuril, kuid kondenseerub kergesti.' },
  { id:'carbon-tetrachloride', name:'Süsiniktetrakloriid', formula:'CCl₄', hint:'Märkimisväärselt raske ja kloriga seotud ühend.', atoms:['C','Cl','Cl','Cl','Cl'], charges:[4,-1,-1,-1,-1], bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], bondTypes:['covalent','covalent','covalent','covalent'], fact:'CCl₄ on üldiselt ebapüsiv ja läheb kasutuselt välja.', guide:'Süsinikul on oksüdatsiooniaste +4 ja igal klooril −1; kõik neli sidet on kovalentsed.', difficulty:'hard', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'CCl₄ on mittepolaarne tetraeedriline molekul. Londoni dispersioonijõud on mõõdukad massi tõttu, mistõttu CCl₄ on vedelik toatemperatuuril.' },
  { id:'ozone', name:'Osoon', formula:'O₃', hint:'Kaitseb Maad UV-kiirguse eest.', atoms:['O','O','O'], bonds:[[0,1,1],[1,2,2]], fact:'Osoon on stratosfääris ülioluline.', guide:'Osoonis on üks O aatom keskel ja üks side on lihtne, teine kahekordne.', difficulty:'hard', intermolecularForces:['dipole-dipole','london-dispersion'], primaryForce:'dipole-dipole', forceAnalysis:'Osoon on polaarne bent molekul dipool-dipool jõududega. See on gaas toatemperatuuril, kuid on reaktiivsem kui hapnik.' },
  { id:'sodium-hydroxide', name:'Naatriumhüdroksiid', formula:'NaOH', hint:'Levinud base, tugev leelis.', atoms:['Na','O','H'], charges:[1,-2,1], bonds:[[0,1,1],[1,2,1]], bondTypes:['ionic','covalent'], fact:'NaOH lahuses moodustab leelise ja on tugev alus.', guide:'Naatriumi oksüdatsiooniaste on +1, hapnikul −2 ja vesinikul +1; Na–O side on ioonne ning O–H side kovalentne.', difficulty:'hard', intermolecularForces:['ionic','hydrogen-bonding'], primaryForce:'ionic', forceAnalysis:'NaOH on ioniline ühend tugevate iooniliste jõududega. Na⁺ ja OH⁻ ioonid on tugevalt seotud, mistõttu NaOH on tahke.' },
  { id:'magnesium-chloride', name:'Magneesiumkloriid', formula:'MgCl₂', hint:'Magneesiumi ja kloori iooniline sool.', atoms:['Mg','Cl','Cl'], charges:[2,-1,-1], bonds:[[0,1,1],[0,2,1]], bondTypes:['ionic','ionic'], fact:'Magneesiumkloriid on iooniline ühend.', guide:'Mg²⁺ vajab laengu tasakaalustamiseks kahte Cl⁻ iooni.', difficulty:'medium', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'Magneesiumkloriidis tasakaalustavad Mg²⁺ ja kaks Cl⁻ iooni teineteise laengu.' },
  { id:'calcium-sulfate', name:'Kaltsiumsulfaat', formula:'CaSO₄', hint:'Kipsi põhikomponent.', atoms:['Ca','S','O','O','O','O'], charges:[2,6,-2,-2,-2,-2], bonds:[[0,2,1],[1,2,2],[1,3,1],[1,4,1],[1,5,1]], bondTypes:['ionic','covalent','covalent','covalent','covalent'], fact:'Kaltsiumsulfaat esineb looduses muu hulgas kipsina.', guide:'Kaltsiumioon tasakaalustab sulfaatiooni kogulaengu.', difficulty:'medium', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'Kaltsiumsulfaat on iooniline sool, milles Ca²⁺ tasakaalustab SO₄²⁻ laengu.' },
  { id:'sodium-nitrate', name:'Naatriumnitraat', formula:'NaNO₃', hint:'Lämmastikku sisaldav iooniline sool.', atoms:['Na','N','O','O','O'], charges:[1,5,-2,-2,-2], bonds:[[0,2,1],[1,2,1],[1,3,2],[1,4,1]], bondTypes:['ionic','covalent','covalent','covalent'], fact:'Naatriumnitraati kasutatakse muu hulgas väetistes.', guide:'Naatriumioon tasakaalustab nitraatiooni kogulaengu.', difficulty:'medium', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'Naatriumnitraat koosneb Na⁺ ioonidest ja NO₃⁻ nitraatioonidest.' },
  { id:'sulfuric-acid', name:'Väävelhape', formula:'H₂SO₄', hint:'Tugev hape, mida kasutatakse tööstuses.', atoms:['H','H','S','O','O','O','O'], charges:[1,1,6,-2,-2,-2,-2], bonds:[[2,3,2],[2,4,2],[2,5,1],[2,6,1],[0,5,1],[1,6,1]], bondTypes:['covalent','covalent','covalent','covalent','covalent','covalent'], fact:'Väävelhape on üks tähtsamaid tööstuskemikaale.', guide:'Molekulis on kaks happelist vesinikku ja sulfaatne keskosa.', difficulty:'hard', intermolecularForces:['hydrogen-bonding','dipole-dipole'], primaryForce:'hydrogen-bonding', forceAnalysis:'Väävelhape on tugev polaarne hape, mis annab lahuses ära H⁺ ioone.' },
  { id:'hydrogen-sulfide', name:'Vesiniksulfiid', formula:'H₂S', hint:'Mürgine gaas, millel on ebameeldiv lõhn.', atoms:['H','S','H'], bonds:[[0,1,1],[1,2,1]], fact:'H₂S on mürgine ja seda leidub mõnedes geotermilistes allikates.', guide:'Väävel on keskel ja kaks vesinikku on temaga ühekordsete sidemetega seotud.', difficulty:'hard', intermolecularForces:['dipole-dipole','london-dispersion'], primaryForce:'dipole-dipole', forceAnalysis:'H₂S on polaarne bent molekul dipool-dipool jõududega. Kuid need on nõrgamad kui vees, mistõttu H₂S on gaas toatemperatuuril.' },
  { id:'nitrogen', name:'Lämmastik', formula:'N₂', hint:'Maa atmosfääris on see kõige levinum gaas.', atoms:['N','N'], bonds:[[0,1,3]], fact:'Lämmastikmolekul on väga stabiilne ja sisaldab kolmekordset sidet.', guide:'Lämmastiku kaks aatomit on ühendatud kolmekordse sidemega.', difficulty:'hard', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'Lämmastik on mittepolaarne diatomiline molekul väga nõrkade Londoni dispersioonijõududega. See on gaas väga madalal temperatuuril.' },
  { id:'chlorine', name:'Kloor', formula:'Cl₂', hint:'Kloor on üsna reaktiivne ja kasutusel desinfitseerimisel.', atoms:['Cl','Cl'], bonds:[[0,1,1]], fact:'Kloor on vajalik veepuhastuses ja tekib ka valgenditest.', guide:'Kaks klooriaatomit on ühendatud ühekordse sidemega.', difficulty:'hard', intermolecularForces:['london-dispersion'], primaryForce:'london-dispersion', forceAnalysis:'Kloor on mittepolaarne diatomiline molekul. Londoni dispersioonijõud on mõõdukad massi tõttu, mistõttu kloor on gaas toatemperatuuril.' },
  { id:'uranium-dioxide', name:'Uraani dioksiid', formula:'UO₂', hint:'Tuumakütuses kasutatav uraaniühend.', atoms:['U','O','O'], charges:[4,-2,-2], bonds:[[0,1,2],[0,2,2]], fact:'UO₂ on üks tavalisemaid tuumakütuse lähteaineid.', guide:'Uraan on keskel ja kaks hapnikku on seotud kahekordsete sidemetega.', difficulty:'hard', intermolecularForces:['ionic','london-dispersion'], primaryForce:'ionic', forceAnalysis:'Uraani dioksiid on tahke ioonilise iseloomuga ühend, milles uraani radioaktiivne isotoop võib aja jooksul laguneda.' },
  { id:'cesium-iodide', name:'Tseesiumjodiid', formula:'CsI', hint:'Radioaktiivse tseesiumi uurimisel kasutatav iooniline ühend.', atoms:['Cs','I'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['ionic'], fact:'CsI kristall sisaldab tseesiumi- ja jodiidioone.', guide:'Tseesium ja jood moodustavad vastasmärgiliste ioonidega ühendi.', difficulty:'hard', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'Tseesiumjodiid on iooniline kristall. Radioaktiivne tseesium võib laguneda beetalagunemise kaudu.' },
  { id:'radium-chloride', name:'Raadiumkloriid', formula:'RaCl₂', hint:'Raadiumi ja kloori iooniline ühend.', atoms:['Ra','Cl','Cl'], charges:[2,-1,-1], bonds:[[0,1,1],[0,2,1]], bondTypes:['ionic','ionic'], fact:'Raadiumkloriid on ajalooliselt tuntud raadiumiühend.', guide:'Raadiumi ioon seostub kahe kloriidiooniga.', difficulty:'hard', intermolecularForces:['ionic'], primaryForce:'ionic', forceAnalysis:'Raadiumkloriid on iooniline ühend. Raadiumi tuum laguneb alfakiirguse saatel.' },
  { id:'plutonium-dioxide', name:'Plutooniumi dioksiid', formula:'PuO₂', hint:'Tuumatehnoloogias tuntud plutooniumiühend.', atoms:['Pu','O','O'], charges:[4,-2,-2], bonds:[[0,1,2],[0,2,2]], fact:'PuO₂ on keraamiline ja kõrge sulamistemperatuuriga ühend.', guide:'Plutoonium on keskel ja kaks hapnikku on seotud kahekordsete sidemetega.', difficulty:'hard', intermolecularForces:['ionic','london-dispersion'], primaryForce:'ionic', forceAnalysis:'Plutooniumi dioksiid on tugevasti seotud tahke ühend, mille plutooniumi isotoobid lagunevad alfakiirguse kaudu.' }
];
molecules.find(molecule => molecule.id === 'hydrogen-peroxide').charges = [1,-1,-1,1];
molecules.find(molecule => molecule.id === 'hydrogen-peroxide').bondTypes = ['covalent','covalent','covalent'];
molecules.find(molecule => molecule.id === 'hydrogen-sulfide').charges = [1,-2,1];
molecules.find(molecule => molecule.id === 'hydrogen-sulfide').bondTypes = ['covalent','covalent'];
const levelConfigs = [
  { id:1, name:'Aatomid ja lihtmolekulid', nameEn:'Atoms and simple molecules', description:'Õpi valentsi, sidemete arvu ja molekuli ehitust.', descriptionEn:'Learn valence, bond order and molecular structure.', requiredMolecules:['hydrogen','oxygen','water','carbon-dioxide','methane','ammonia'], focusConcepts:['valents','üksik- ja kaksikside'], focusConceptsEn:['valence','single and double bonds'] },
  { id:2, name:'Ioonid ja lihtsamad ühendid', nameEn:'Ions and simple compounds', description:'Tasakaalusta laengud ja ehita järjest keerukamaid ühendeid.', descriptionEn:'Balance charges and build increasingly complex compounds.', requiredMolecules:['hydrogen-chloride','sodium-chloride','hydrogen-peroxide','carbon-monoxide'], focusConcepts:['laengutasakaal','kovalentne side'], focusConceptsEn:['charge balance','covalent bonding'] },
  { id:3, name:'Soolad ja polaarsus', nameEn:'Salts and polarity', description:'Võrdle ioonseid ühendeid ja polaarseid molekule.', descriptionEn:'Compare ionic compounds and polar molecules.', requiredMolecules:['sulfur-dioxide','magnesium-chloride','calcium-sulfate','sodium-nitrate'], focusConcepts:['iooniline side','polaarsus'], focusConceptsEn:['ionic bonding','polarity'] },
  { id:4, name:'Keerukamad molekulid', nameEn:'More complex molecules', description:'Uuri molekuli kuju, sidemete järku ja intermolekulaarseid jõude.', descriptionEn:'Explore molecular shape, bond order and intermolecular forces.', requiredMolecules:['carbon-tetrachloride','ozone','sodium-hydroxide','sulfuric-acid'], focusConcepts:['molekuli kuju','vesiniksidemed','Londoni jõud'], focusConceptsEn:['molecular shape','hydrogen bonding','London forces'] },
  { id:5, name:'Reaktsioonilabor', nameEn:'Reaction laboratory', description:'Lahenda suurema sidemete arvu ja reaktsioonivõimega ülesandeid.', descriptionEn:'Solve challenges with more bonds and greater reactivity.', requiredMolecules:['hydrogen-sulfide','nitrogen','chlorine'], focusConcepts:['reaktsioonivõime','sideme tugevus'], focusConceptsEn:['reactivity','bond strength'] },
  { id:6, name:'Kvanttase', nameEn:'Quantum level', description:'Seosta elektronkonfiguratsioon, radioaktiivsus ja keerukate ühendite ehitus.', descriptionEn:'Connect electron configuration, radioactivity and complex compound structure.', requiredMolecules:['uranium-dioxide','cesium-iodide','radium-chloride','plutonium-dioxide'], focusConcepts:['orbitaalid','radioaktiivsus'], focusConceptsEn:['orbitals','radioactivity'] }
];
levelConfigs.forEach(level => {
  level.avatudKui = level.id === 1 ? [] : [`level:${level.id - 1}`];
  level.vajalikudMolekulid = level.requiredMolecules;
  level.fookusKontseptsioonid = level.focusConcepts;
});
const elements = [
  {symbol:'H',name:'vesinik',className:'h',atomicNumber:1,group:1,period:1},
  {symbol:'He',name:'heelium',className:'he',atomicNumber:2,group:18,period:1},
  {symbol:'Li',name:'liitium',className:'li',atomicNumber:3,group:1,period:2},
  {symbol:'Be',name:'berüllium',className:'be',atomicNumber:4,group:2,period:2},
  {symbol:'B',name:'boor',className:'b',atomicNumber:5,group:13,period:2},
  {symbol:'C',name:'süsinik',className:'c',atomicNumber:6,group:14,period:2},
  {symbol:'N',name:'lämmastik',className:'n',atomicNumber:7,group:15,period:2},
  {symbol:'O',name:'hapnik',className:'o',atomicNumber:8,group:16,period:2},
  {symbol:'F',name:'fluor',className:'f',atomicNumber:9,group:17,period:2},
  {symbol:'Ne',name:'neoon',className:'ne',atomicNumber:10,group:18,period:2},
  {symbol:'Na',name:'naatrium',className:'na',atomicNumber:11,group:1,period:3},
  {symbol:'Mg',name:'magneesium',className:'mg',atomicNumber:12,group:2,period:3},
  {symbol:'Al',name:'alumiinium',className:'al',atomicNumber:13,group:13,period:3},
  {symbol:'Si',name:'ränik',className:'si',atomicNumber:14,group:14,period:3},
  {symbol:'P',name:'fosfor',className:'p',atomicNumber:15,group:15,period:3},
  {symbol:'S',name:'väävel',className:'s',atomicNumber:16,group:16,period:3},
  {symbol:'Cl',name:'kloor',className:'cl',atomicNumber:17,group:17,period:3},
  {symbol:'Ar',name:'argoon',className:'ar',atomicNumber:18,group:18,period:3},
  {symbol:'K',name:'kaalium',className:'k',atomicNumber:19,group:1,period:4},
  {symbol:'Ca',name:'kaltsium',className:'ca',atomicNumber:20,group:2,period:4},
  {symbol:'Sc',name:'skandium',className:'sc',atomicNumber:21,group:3,period:4},
  {symbol:'Ti',name:'titaan',className:'ti',atomicNumber:22,group:4,period:4},
  {symbol:'V',name:'vaanaadium',className:'v',atomicNumber:23,group:5,period:4},
  {symbol:'Cr',name:'kroom',className:'cr',atomicNumber:24,group:6,period:4},
  {symbol:'Mn',name:'mangaan',className:'mn',atomicNumber:25,group:7,period:4},
  {symbol:'Fe',name:'raud',className:'fe',atomicNumber:26,group:8,period:4},
  {symbol:'Co',name:'koobalt',className:'co',atomicNumber:27,group:9,period:4},
  {symbol:'Ni',name:'nikkel',className:'ni',atomicNumber:28,group:10,period:4},
  {symbol:'Cu',name:'vas',className:'cu',atomicNumber:29,group:11,period:4},
  {symbol:'Zn',name:'tsink',className:'zn',atomicNumber:30,group:12,period:4},
  {symbol:'Ga',name:'gallium',className:'ga',atomicNumber:31,group:13,period:4},
  {symbol:'Ge',name:'germaanium',className:'ge',atomicNumber:32,group:14,period:4},
  {symbol:'As',name:'arseen',className:'as',atomicNumber:33,group:15,period:4},
  {symbol:'Se',name:'selen',className:'se',atomicNumber:34,group:16,period:4},
  {symbol:'Br',name:'broom',className:'br',atomicNumber:35,group:17,period:4},
  {symbol:'Kr',name:'kripton',className:'kr',atomicNumber:36,group:18,period:4},
  {symbol:'Rb',name:'rubiidium',className:'rb',atomicNumber:37,group:1,period:5},
  {symbol:'Sr',name:'stroontium',className:'sr',atomicNumber:38,group:2,period:5},
  {symbol:'Y',name:'ütrium',className:'y',atomicNumber:39,group:3,period:5},
  {symbol:'Zr',name:'tsirkoonium',className:'zr',atomicNumber:40,group:4,period:5},
  {symbol:'Nb',name:'nioobium',className:'nb',atomicNumber:41,group:5,period:5},
  {symbol:'Mo',name:'molübdeen',className:'mo',atomicNumber:42,group:6,period:5},
  {symbol:'Tc',name:'tehneesium',className:'tc',atomicNumber:43,group:7,period:5,radioactive:true,halflife:5},
  {symbol:'Ru',name:'ruuteenium',className:'ru',atomicNumber:44,group:8,period:5},
  {symbol:'Rh',name:'roodium',className:'rh',atomicNumber:45,group:9,period:5},
  {symbol:'Pd',name:'pallaadium',className:'pd',atomicNumber:46,group:10,period:5},
  {symbol:'Ag',name:'hõbe',className:'ag',atomicNumber:47,group:11,period:5},
  {symbol:'Cd',name:'kadmium',className:'cd',atomicNumber:48,group:12,period:5},
  {symbol:'In',name:'indium',className:'in',atomicNumber:49,group:13,period:5},
  {symbol:'Sn',name:'tin',className:'sn',atomicNumber:50,group:14,period:5},
  {symbol:'Sb',name:'antimon',className:'sb',atomicNumber:51,group:15,period:5},
  {symbol:'Te',name:'telluur',className:'te',atomicNumber:52,group:16,period:5},
  {symbol:'I',name:'jood',className:'i',atomicNumber:53,group:17,period:5,radioactive:true,halflife:8},
  {symbol:'Xe',name:'ksenon',className:'xe',atomicNumber:54,group:18,period:5},
  {symbol:'Cs',name:'tseesium',className:'cs',atomicNumber:55,group:1,period:6,radioactive:true,halflife:15},
  {symbol:'Ba',name:'baarium',className:'ba',atomicNumber:56,group:2,period:6},
  {symbol:'La',name:'lantaan',className:'la',atomicNumber:57,group:3,period:6},
  {symbol:'Ce',name:'tseerium',className:'ce',atomicNumber:58,group:3,period:6},
  {symbol:'Pr',name:'praseodüüm',className:'pr',atomicNumber:59,group:3,period:6},
  {symbol:'Nd',name:'neodüüm',className:'nd',atomicNumber:60,group:3,period:6},
  {symbol:'Pm',name:'promeetium',className:'pm',atomicNumber:61,group:3,period:6,radioactive:true,halflife:3},
  {symbol:'Sm',name:'samaarium',className:'sm',atomicNumber:62,group:3,period:6},
  {symbol:'Eu',name:'europium',className:'eu',atomicNumber:63,group:3,period:6},
  {symbol:'Gd',name:'gadoliinium',className:'gd',atomicNumber:64,group:3,period:6},
  {symbol:'Tb',name:'terbium',className:'tb',atomicNumber:65,group:3,period:6},
  {symbol:'Dy',name:'düsproosium',className:'dy',atomicNumber:66,group:3,period:6},
  {symbol:'Ho',name:'holmium',className:'ho',atomicNumber:67,group:3,period:6},
  {symbol:'Er',name:'erbuim',className:'er',atomicNumber:68,group:3,period:6},
  {symbol:'Tm',name:'tuulium',className:'tm',atomicNumber:69,group:3,period:6},
  {symbol:'Yb',name:'üterbium',className:'yb',atomicNumber:70,group:3,period:6},
  {symbol:'Lu',name:'luteetsium',className:'lu',atomicNumber:71,group:3,period:6},
  {symbol:'Hf',name:'hafnium',className:'hf',atomicNumber:72,group:4,period:6},
  {symbol:'Ta',name:'tantaal',className:'ta',atomicNumber:73,group:5,period:6},
  {symbol:'W',name:'volfram',className:'w',atomicNumber:74,group:6,period:6},
  {symbol:'Re',name:'reenium',className:'re',atomicNumber:75,group:7,period:6},
  {symbol:'Os',name:'osmium',className:'os',atomicNumber:76,group:8,period:6},
  {symbol:'Ir',name:'iridium',className:'ir',atomicNumber:77,group:9,period:6},
  {symbol:'Pt',name:'plaatina',className:'pt',atomicNumber:78,group:10,period:6},
  {symbol:'Au',name:'kuld',className:'au',atomicNumber:79,group:11,period:6},
  {symbol:'Hg',name:'elavhõbe',className:'hg',atomicNumber:80,group:12,period:6},
  {symbol:'Tl',name:'taallium',className:'tl',atomicNumber:81,group:13,period:6},
  {symbol:'Pb',name:'pli',className:'pb',atomicNumber:82,group:14,period:6},
  {symbol:'Bi',name:'vismut',className:'bi',atomicNumber:83,group:15,period:6},
  {symbol:'Po',name:'poloonium',className:'po',atomicNumber:84,group:16,period:6,radioactive:true,halflife:4},
  {symbol:'At',name:'astaat',className:'at',atomicNumber:85,group:17,period:6,radioactive:true,halflife:2},
  {symbol:'Rn',name:'radon',className:'rn',atomicNumber:86,group:18,period:6,radioactive:true,halflife:6},
  {symbol:'Fr',name:'frantsium',className:'fr',atomicNumber:87,group:1,period:7,radioactive:true,halflife:3},
  {symbol:'Ra',name:'raadium',className:'ra',atomicNumber:88,group:2,period:7,radioactive:true,halflife:20},
  {symbol:'Ac',name:'aktiinium',className:'ac',atomicNumber:89,group:3,period:7,radioactive:true,halflife:12},
  {symbol:'Th',name:'toorium',className:'th',atomicNumber:90,group:3,period:7,radioactive:true,halflife:25},
  {symbol:'Pa',name:'protaktiinium',className:'pa',atomicNumber:91,group:3,period:7,radioactive:true,halflife:18},
  {symbol:'U',name:'uraan',className:'u',atomicNumber:92,group:3,period:7,radioactive:true,halflife:30},
  {symbol:'Np',name:'neptuunium',className:'np',atomicNumber:93,group:3,period:7,radioactive:true,halflife:7},
  {symbol:'Pu',name:'plutoonium',className:'pu',atomicNumber:94,group:3,period:7,radioactive:true,halflife:10},
  {symbol:'Am',name:'ameeritsium',className:'am',atomicNumber:95,group:3,period:7,radioactive:true,halflife:5},
  {symbol:'Cm',name:'kuurium',className:'cm',atomicNumber:96,group:3,period:7,radioactive:true,halflife:8},
  {symbol:'Bk',name:'berkeelium',className:'bk',atomicNumber:97,group:3,period:7,radioactive:true,halflife:6},
  {symbol:'Cf',name:'kalifornium',className:'cf',atomicNumber:98,group:3,period:7,radioactive:true,halflife:5},
  {symbol:'Es',name:'einsteinium',className:'es',atomicNumber:99,group:3,period:7,radioactive:true,halflife:4},
  {symbol:'Fm',name:'fermium',className:'fm',atomicNumber:100,group:3,period:7,radioactive:true,halflife:3},
  {symbol:'Md',name:'mendeleevium',className:'md',atomicNumber:101,group:3,period:7,radioactive:true,halflife:3},
  {symbol:'No',name:'nobelium',className:'no',atomicNumber:102,group:3,period:7,radioactive:true,halflife:2},
  {symbol:'Lr',name:'loorensium',className:'lr',atomicNumber:103,group:3,period:7,radioactive:true,halflife:2},
  {symbol:'Rf',name:'rutherfordium',className:'rf',atomicNumber:104,group:4,period:7,radioactive:true,halflife:2},
  {symbol:'Db',name:'dubnium',className:'db',atomicNumber:105,group:5,period:7,radioactive:true,halflife:2},
  {symbol:'Sg',name:'seaborgium',className:'sg',atomicNumber:106,group:6,period:7,radioactive:true,halflife:2},
  {symbol:'Bh',name:'boorium',className:'bh',atomicNumber:107,group:7,period:7,radioactive:true,halflife:2},
  {symbol:'Hs',name:'hassium',className:'hs',atomicNumber:108,group:8,period:7,radioactive:true,halflife:2},
  {symbol:'Mt',name:'meitneerium',className:'mt',atomicNumber:109,group:9,period:7,radioactive:true,halflife:2},
  {symbol:'Ds',name:'darmstadtium',className:'ds',atomicNumber:110,group:10,period:7,radioactive:true,halflife:2},
  {symbol:'Rg',name:'röntgeenium',className:'rg',atomicNumber:111,group:11,period:7,radioactive:true,halflife:2},
  {symbol:'Cn',name:'koperniitsium',className:'cn',atomicNumber:112,group:12,period:7,radioactive:true,halflife:2},
  {symbol:'Nh',name:'nihonium',className:'nh',atomicNumber:113,group:13,period:7,radioactive:true,halflife:2},
  {symbol:'Fl',name:'flerovium',className:'fl',atomicNumber:114,group:14,period:7,radioactive:true,halflife:2},
  {symbol:'Mc',name:'moskoovium',className:'mc',atomicNumber:115,group:15,period:7,radioactive:true,halflife:2},
  {symbol:'Lv',name:'livermoorium',className:'lv',atomicNumber:116,group:16,period:7,radioactive:true,halflife:2},
  {symbol:'Ts',name:'tennessiin',className:'ts',atomicNumber:117,group:17,period:7,radioactive:true,halflife:2},
  {symbol:'Og',name:'oganeessoon',className:'og',atomicNumber:118,group:18,period:7,radioactive:true,halflife:2}
];
const elementReactionCards = elements.map(element => {
  let equation;
  let detail;
  if (element.group === 18) {
    equation = 'Tavatingimustes puudub levinud reaktsioon';
    detail = 'Väärisgaasi väliskest on stabiilne; reaktsioonivõime on väga väike.';
  } else if (element.symbol === 'H') {
    equation = '2H₂ + O₂ → 2H₂O';
    detail = 'Vesinik põleb hapnikus ja moodustab vett.';
  } else if (element.symbol === 'O') {
    equation = 'C + O₂ → CO₂';
    detail = 'Hapnik toetab põlemist; näites oksüdeerub süsinik süsinikdioksiidiks.';
  } else if (element.group === 1) {
    equation = `4${element.symbol} + O₂ → 2${element.symbol}₂O`;
    detail = 'Leelismetalli tüüpiline reaktsioon hapnikuga; tegelik saadus sõltub tingimustest.';
  } else if (element.group === 2) {
    equation = `2${element.symbol} + O₂ → 2${element.symbol}O`;
    detail = 'Leelismuldmetall moodustab hapnikuga tüüpilise metallioksiidi.';
  } else if ([17].includes(element.group)) {
    equation = `2Na + ${element.symbol}₂ → 2Na${element.symbol}`;
    detail = 'Halogeen reageerib naatriumiga ja moodustab ioonse halogeniidi.';
  } else if (element.radioactive) {
    equation = `${element.symbol} → lagunemisproduktid`;
    detail = 'Sellel elemendil pole stabiilseid isotoope; reaktsioonikaart rõhutab radioaktiivset lagunemist, mitte tavalist laborireaktsiooni.';
  } else if (element.symbol === 'C') {
    equation = 'C + O₂ → CO₂';
    detail = 'Süsinik põleb hapnikus ja moodustab süsinikdioksiidi.';
  } else {
    equation = `${element.symbol} + O₂ → ${element.symbol}Oₙ`;
    detail = 'Näide on üldistatud oksiidi moodustumine; täpne oksiidi valem sõltub elemendi oksüdatsiooniastmest.';
  }
  return { ...element, equation, detail };
});
const saltChallenges = [
  { id:'salt-nacl', name:'Naatriumkloriid', formula:'NaCl', atoms:['Na','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['ionic'] },
  { id:'salt-mgcl2', name:'Magneesiumkloriid', formula:'MgCl₂', atoms:['Mg','Cl','Cl'], charges:[2,-1,-1], bonds:[[0,1,1],[0,2,1]], bondTypes:['ionic','ionic'] },
  { id:'salt-alf3', name:'Alumiiniumfluoriid', formula:'AlF₃', atoms:['Al','F','F','F'], charges:[3,-1,-1,-1], bonds:[[0,1,1],[0,2,1],[0,3,1]], bondTypes:['ionic','ionic','ionic'] },
  { id:'salt-cao', name:'Kaltsiumoksiid', formula:'CaO', atoms:['Ca','O'], charges:[2,-2], bonds:[[0,1,1]], bondTypes:['ionic'] }
];
const baseChallenges = [
  { id:'base-naoh', name:'Naatriumhüdroksiid', formula:'NaOH', atoms:['Na','O','H'], charges:[1,-2,1], bonds:[[0,1,1],[1,2,1]], bondTypes:['ionic','covalent'] },
  { id:'base-caoh2', name:'Kaltsiumhüdroksiid', formula:'Ca(OH)₂', atoms:['Ca','O','H','O','H'], charges:[2,-1,0,-1,0], bonds:[[0,1,1],[1,2,1],[0,3,1],[3,4,1]], bondTypes:['ionic','covalent','ionic','covalent'] }
];

const reactions = [
  {
    id:'water-formation',
    name:'Vee moodustamine',
    equation:'2H₂ + O₂ → 2H₂O',
    reactants:['hydrogen','oxygen'],
    products:['water'],
    stoichiometry:{ hydrogen:2, oxygen:1, water:2 },
    energyChange:-286,
    activationEnergy:242,
    conditions:{ minTemp:500, catalyst:'platinum' },
    hint:'Vesinik ja hapnik reageerivad, moodustades vett.',
    fact:'See on eksotermiline reaktsioon, eraldab soojust.',
    difficulty:'easy'
  },
  {
    id:'combustion-methane',
    name:'Metaani põlemine',
    equation:'CH₄ + 2O₂ → CO₂ + 2H₂O',
    reactants:['methane','oxygen'],
    products:['carbon-dioxide','water'],
    stoichiometry:{ methane:1, oxygen:2, 'carbon-dioxide':1, water:2 },
    energyChange:-890,
    activationEnergy:630,
    conditions:{ minTemp:600 },
    hint:'Metaan põleb hapnikus, moodustades süsinikdioksiidi ja vett.',
    fact:'See on loodusliku gaasi põlemisreaktsioon.',
    difficulty:'easy'
  },
  {
    id:'ammonia-synthesis',
    name:'Ammoniaagi süntees',
    equation:'N₂ + 3H₂ → 2NH₃',
    reactants:['nitrogen','hydrogen'],
    products:['ammonia'],
    stoichiometry:{ nitrogen:1, hydrogen:3, ammonia:2 },
    energyChange:-92,
    activationEnergy:335,
    conditions:{ minTemp:400, pressure:200, catalyst:'iron' },
    hint:'Lämmastik ja vesinik moodustavad ammoniaaki.',
    fact:'Haberi protsess on oluline väetiste tootmisel.',
    difficulty:'medium'
  },
  {
    id:'neutralization',
    name:'Neutralisatsioon',
    equation:'HCl + NaOH → NaCl + H₂O',
    reactants:['hydrogen-chloride','sodium-hydroxide'],
    products:['sodium-chloride','water'],
    stoichiometry:{ 'hydrogen-chloride':1, 'sodium-hydroxide':1, 'sodium-chloride':1, water:1 },
    energyChange:-57,
    activationEnergy:20,
    conditions:{ minTemp:25 },
    hint:'Hape ja alus reageerivad, moodustades soola ja vett.',
    fact:'See on klassikaline happe-aluse reaktsioon.',
    difficulty:'medium'
  },
  {
    id:'atp-synthesis',
    name:'ATP süntees',
    equation:'ADP + Pi → ATP',
    reactants:['adp','phosphate'],
    products:['atp'],
    stoichiometry:{ adp:1, phosphate:1, atp:1 },
    energyChange:+30,
    activationEnergy:50,
    conditions:{ ph:7.5, catalyst:'atp-synthase' },
    hint:'ADP ja fosfaat moodustavad ATP energiamolekuli.',
    fact:'ATP on rakkude peamine energiatransportija.',
    difficulty:'hard',
    isBiochemical:true
  },
  {
    id:'glucose-breakdown',
    name:'Glükoosi lagunemine',
    equation:'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
    reactants:['glucose','oxygen'],
    products:['carbon-dioxide','water'],
    stoichiometry:{ glucose:1, oxygen:6, 'carbon-dioxide':6, water:6 },
    energyChange:-2800,
    activationEnergy:1200,
    conditions:{ ph:7.2, catalyst:'enzymes' },
    hint:'Glükoos laguneb rakulise hingamise käigus.',
    fact:'See on peamine energiaallikas rakkudele.',
    difficulty:'hard',
    isBiochemical:true
  },
  {
    id:'iron-thiocyanate-equilibrium',
    name:'Raud(III)-tiotsüanaadi tasakaal',
    equation:'Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺',
    reactants:['iron(iii)-ion','thiocyanate-ion'],
    products:['iron-thiocyanate-complex'],
    stoichiometry:{ 'iron(iii)-ion':1, 'thiocyanate-ion':1, 'iron-thiocyanate-complex':1 },
    energy:'exo',
    energyChange:-12,
    activationEnergy:45,
    conditions:{ ph:2, pressure:1 },
    hint:'Verepunane FeSCN²⁺ kompleks moodustub pöörduvas ioonreaktsioonis.',
    fact:'FeSCN²⁺ värvuse tugevus näitab tasakaalu nihkumist kompleksi suunas.',
    difficulty:'hard'
  },
  {
    id:'haber-equilibrium',
    name:'Ammoniaagi tasakaalusüntees',
    equation:'N₂ + 3H₂ ⇌ 2NH₃',
    reactants:['nitrogen','hydrogen'],
    products:['ammonia'],
    stoichiometry:{ nitrogen:1, hydrogen:3, ammonia:2 },
    energy:'exo',
    energyChange:-92,
    activationEnergy:335,
    conditions:{ minTemp:400, pressure:200, catalyst:'iron' },
    hint:'Kõrge rõhk ja sobiv temperatuur nihutavad tasakaalu ammoniaagi suunas.',
    fact:'Raua katalüsaator kiirendab tasakaalu saavutamist, kuid ei muuda tasakaaluasendit.',
    difficulty:'hard'
  },
  {
    id:'peroxide-catalytic-decomposition',
    name:'Vesinikperoksiidi katalüütiline lagunemine',
    equation:'2H₂O₂ → 2H₂O + O₂',
    reactants:['hydrogen-peroxide'],
    products:['water','oxygen'],
    stoichiometry:{ 'hydrogen-peroxide':2, water:2, oxygen:1 },
    energy:'exo',
    energyChange:-98,
    activationEnergy:75,
    conditions:{ minTemp:25, catalyst:'manganese-dioxide' },
    hint:'MnO₂ vähendab aktiveerumisenergiat ja kiirendab peroksiidi lagunemist.',
    fact:'Katalüsaator ei kulu reaktsioonis ära, kuid muudab reaktsiooni palju kiiremaks.',
    difficulty:'hard'
  }
];

const intermolecularForces = [
  {
    id:'dipole-dipole',
    name:'Dipool–dipool',
    strength:'medium',
    molecules:['water','ammonia','hydrogen-chloride'],
    energyRange:'5-20 kJ/mol',
    description:'Polaarsete molekulide vahelised jõud. Positiivne ots tõmbab negatiivset otsa.',
    example:'Vees (H₂O) on hapnik negatiivne ja vesinikud positiivsed, mistõttu molekulid orienteeruvad vastasmärgiste otsad vastu.',
    factors:'Polaarsus, molekuli kuju, temperatuur',
    comparison:'Tugevam kui Londoni jõud, nõrgem kui vesiniksidemed'
  },
  {
    id:'hydrogen-bonding',
    name:'Vesiniksidemed',
    strength:'strong',
    molecules:['water','ammonia','hydrogen-fluoride'],
    energyRange:'10-40 kJ/mol',
    description:'Eriline dipool-dipool jõud, kus vesinik on seotud väga elektronegatiivse elemendiga (N, O, F).',
    example:'Vees moodustavad H-atomid sidemed O-aatomitega naabermolekulides, andes veele kõrke keemispunkti.',
    factors:'Elektronegatiivsus, suund, molekulide vaheline kaugus',
    comparison:'Tugevamad kui tavalised dipool-dipool jõud'
  },
  {
    id:'london-dispersion',
    name:'Londoni dispersioonijõud',
    strength:'weak',
    molecules:['all'], // Works for all molecules
    energyRange:'0.1-10 kJ/mol',
    description:'Ajutised dipoolid, mis tekivad elektronide kõikumisest. Kõikides molekulides olevad nõrgad jõud.',
    example:'Süsinikdioksiidis (CO₂) ja klooris (Cl₂) on need ainukesed intermolekulaarsed jõud.',
    factors:'Molekuli mass, kuju, polaarisus',
    comparison:'Nõrgaimad intermolekulaarsed jõud, kuid olemas kõigis molekulides'
  }
];
const acidChallenges = [
  { id:'acid-hcl', name:'Vesinikkloriidhape', formula:'HCl', atoms:['H','Cl'], charges:[1,-1], bonds:[[0,1,1]], bondTypes:['covalent'] },
  { id:'acid-h2s', name:'Vesiniksulfiidhape', formula:'H₂S', atoms:['H','S','H'], charges:[1,-2,1], bonds:[[0,1,1],[1,2,1]], bondTypes:['covalent','covalent'] },
  { id:'acid-hno3', name:'Lämmastikhape', formula:'HNO₃', atoms:['H','N','O','O','O'], charges:[1,5,-2,-2,-2], bonds:[[0,2,1],[1,2,1],[1,3,2],[1,4,1]], bondTypes:['covalent','covalent','covalent','covalent'] }
];
const buildChallenges = { salt: saltChallenges, base: baseChallenges, acid: acidChallenges };
const reactionCopy = {
  et: {
  labLabel:'REAKTSIOONILABOR', labTitle:'Happed, alused ja energia', elementLabLabel:'ELEMENTIDE REAKTSIOONID', elementLabTitle:'Õpi iga elemendi reaktsioonivõimet', elementSearch:'Otsi sümboli, nime või aatomnumbri järgi', ready:'Valmis', catalyst:'Katalüsaator', noCatalyst:'Ilma katalüsaatorita', manganese:'MnO₂ · mangaan(IV)oksiid', platinum:'Pt · plaatina', run:'Käivita reaktsioon', exoTag:'EKSOTERMILINE', endoTag:'ENDOTERMILINE', heatReleased:'Soojust eraldub', energyAbsorbed:'Energiat neeldub', running:'Reaktsioon käib', speedsUp:'Kiireneb', lowersBarrier:'Katalüsaator vähendab aktiveerumisbarjääri; valmib', withoutCatalyst:'Ilma katalüsaatorita valmib see', seconds:'sekundiga.', readyHeat:'Valmis · soojus eraldus', readyEnergy:'Valmis · energia neeldus', catalystNotConsumed:'ei kulu reaktsioonis ära, kuid muutis selle kiiremaks.', compareSpeed:'Katse valmis. Lisa katalüsaator ja võrdle reaktsiooni kiirust.', exoToast:'Eksotermiline efekt: tööala soojeneb.', endoToast:'Endotermiline efekt: tööala jahtub.'
  },
  en: {
    labLabel:'REACTION LAB', labTitle:'Acids, bases and energy', elementLabLabel:'ELEMENT REACTIONS', elementLabTitle:'Learn the reactivity of every element', elementSearch:'Search by symbol, name or atomic number', ready:'Ready', catalyst:'Catalyst', noCatalyst:'Without a catalyst', manganese:'MnO₂ · manganese(IV) oxide', platinum:'Pt · platinum', run:'Run reaction', exoTag:'EXOTHERMIC', endoTag:'ENDOTHERMIC', heatReleased:'Heat is released', energyAbsorbed:'Energy is absorbed', running:'Reaction running', speedsUp:'Faster', lowersBarrier:'The catalyst lowers the activation barrier; complete in', withoutCatalyst:'Without a catalyst, this completes in', seconds:'seconds.', readyHeat:'Complete · heat released', readyEnergy:'Complete · energy absorbed', catalystNotConsumed:'is not used up, but made the reaction faster.', compareSpeed:'Experiment complete. Add a catalyst to compare the reaction speed.', exoToast:'Exothermic effect: the lab warms up.', endoToast:'Endothermic effect: the lab cools down.'
  }
};
let target = molecules[0], atoms = [], bonds = [], selected = null, score = 0, completed = new Set(), bestScore = 0;
let selectedCharge = 0;
let saltMode = false;
let buildMode = 'salt';
let dragState = null;
let pointerMoved = false;
let timerEnabled = false;
let timerInterval = null;
let timeRemaining = 60;
let tutorialShown = false;
let actionHistory = [];
let currentLang = 'et';
let audioContext = null;
let selectedReaction = reactions[0];
let selectedForce = intermolecularForces[0];
let selectedElementReaction = elementReactionCards[0];
let elementReactionFilter = '';
let currentLevelId = 1;
let completedLevelTasks = new Set();
let replayingCompletedLevel = false;

// Radioactive decay data (expanded)
const radioactiveDecay = {
  'Tc': { products: ['Ru'], halfLife: 5, decayType: 'beta' },
  'Pm': { products: ['Nd'], halfLife: 3, decayType: 'beta' },
  'Po': { products: ['Pb', 'He'], halfLife: 4, decayType: 'alpha' },
  'At': { products: ['Bi'], halfLife: 2, decayType: 'alpha' },
  'Rn': { products: ['Po', 'He'], halfLife: 6, decayType: 'alpha' },
  'Fr': { products: ['Ra'], halfLife: 3, decayType: 'alpha' },
  'Ra': { products: ['Rn', 'He'], halfLife: 20, decayType: 'alpha' },
  'Ac': { products: ['Th'], halfLife: 12, decayType: 'beta' },
  'Th': { products: ['Pa'], halfLife: 25, decayType: 'alpha' },
  'Pa': { products: ['U'], halfLife: 18, decayType: 'beta' },
  'U': { products: ['Th', 'He'], halfLife: 30, decayType: 'alpha' },
  'Np': { products: ['Pu'], halfLife: 7, decayType: 'beta' },
  'Pu': { products: ['U', 'He'], halfLife: 10, decayType: 'alpha' },
  'Am': { products: ['Np'], halfLife: 5, decayType: 'alpha' },
  'Cm': { products: ['Pu'], halfLife: 8, decayType: 'alpha' },
  'I': { products: ['Xe'], halfLife: 8, decayType: 'beta' },
  'Cs': { products: ['Ba'], halfLife: 15, decayType: 'beta' }
};

let radioactiveAtoms = []; // Track radioactive atoms with their creation time
let decayInterval = null;
let reactionTimer = null;
const STORAGE_KEY = 'chemistry-game-best-score';
const COMPLETED_KEY = 'chemistry-game-completed';
const LANG_KEY = 'chemistry-game-language';
const LEVEL_TASKS_KEY = 'chemistry-game-level-tasks';

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
    toggle3D: '🎨 3D',
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
    capacity: 'Selles prototüübis mahub kaheksa aatomit.',
    hintPrefix: 'Vihje:',
    shownStructure: 'Näidatud õige struktuur. Vajuta "Võta tagasi", et taastada.',
    statusSelect: 'Vali aatom',
    statusNext: 'Vali teine aatom',
    reactants: 'Reaktandid',
    activationEnergy: 'Aktiveerimisenergia',
    products: 'Tooted',
    speed: 'Kiirus',
    selectReactionFirst: 'Vali esmalt reaktsioon!',
    show: 'Näita',
    hide: 'Peida',
    addAtomsForOrbitals: 'Lisa aatomid, et näha nende orbitaale.',
    orbitalsInfo: '{count} aatomit. Kliki aatomil tööruumis, et näha detailseid orbitaale.',
    supportLabel: 'Toetamise info',
    supportText: 'Kui soovid mind toetada, siis saab seda teha arveldusarvega:',
    contact: 'Kontakt:',
    quantumSectionLabel: 'KVANTTASE',
    quantumSectionTitle: 'Elektronorbitaalid',
    quantumPrompt: 'Vali aatom, et näha selle orbitaale.',
    sOrbitalTitle: 's-Orbitaal',
    sOrbitalDesc: 'Kera, elektronid on võrdselt tõenäoliselt kõikides suundades. Igal energiatasemel on üks s-orbitaal (maks 2 elektroni).',
    pOrbitalTitle: 'p-Orbitaal',
    pOrbitalDesc: 'Kellukujuline, 3 orientatsiooni (px, py, pz). Igal p-orbitaalil on 2 elektroni, kokku 6 elektroni p-alamkihis.',
    electronFillingTitle: 'Elektronide täitmine',
    electronFillingDesc: 'Elektronid täidavad orbitaale vastavalt Aufbau printsiibile: alates madalaimast energiatasemest, kuni jõuab kõrgematele. Iga orbitaal saab maksimaalselt 2 elektroni vastassuunaliste spinidega.',
    forcesLabel: 'INTERMOLEKULAARSED JÕUD',
    forcesTitle: 'Molekulidevahelised jõud',
    selectForce: 'Vali jõud',
    forceDescription: 'Vali intermolekulaarne jõud, et näha üksikasju.',
    strength: 'Tugevus',
    energyRange: 'Energia vahemik',
    factors: 'Mõjutavad tegurid',
    comparison: 'Võrdlus',
    example: 'Näide',
    strong: 'Tugev',
    medium: 'Keskmine',
    weak: 'Nõrk',
    moleculeForcesTitle: 'Intermolekulaarsed jõud',
    primaryForce: 'Peamine jõud',
    moleculeInfoTitle: 'Molekuli info',
    factLabel: 'Fakt',
    hintLabel: 'Vihje',
    saltModeLabel: 'REŽIIM',
    saltModeTitle: 'Ehita sool',
    saltModeButton: 'Ehita sool',
    saltModeStart: 'Alusta',
    saltModeClose: 'Sulge',
    saltModeDescription: 'Tasakaalusta ioonid ja ehita neutraalne ühend.',
    saltModePrompt: 'Vali näidatud laengud ja ühenda vastasmärgid.',
    baseModeTitle: 'Ehita alus',
    baseModeButton: 'Ehita alus',
    baseModeDescription: 'Koosta alus õigetest ioonidest ja kovalentsetest sidemetest.',
    baseModePrompt: 'Vali näidatud laengud ja ühenda aatomid õigete sidemetega.',
    acidModeTitle: 'Ehita hape',
    acidModeButton: 'Ehita hape',
    acidModeDescription: 'Koosta hape õigetest aatomitest, laengutest ja sidemetest.',
    acidModePrompt: 'Vali näidatud laengud ja ühenda aatomid õigete sidemetega.',
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
    toggle3D: '🎨 3D',
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
    capacity: 'This prototype supports up to eight atoms.',
    hintPrefix: 'Hint:',
    shownStructure: 'Correct structure shown. Press "Undo" to restore.',
    statusSelect: 'Select an atom',
    statusNext: 'Select the second atom',
    reactants: 'Reactants',
    activationEnergy: 'Activation energy',
    products: 'Products',
    speed: 'Speed',
    selectReactionFirst: 'Select a reaction first!',
    show: 'Show',
    hide: 'Hide',
    addAtomsForOrbitals: 'Add atoms to view their orbitals.',
    orbitalsInfo: '{count} atoms. Click an atom in the workspace to see its detailed orbitals.',
    supportLabel: 'Support information',
    supportText: 'If you would like to support me, you can do so by bank transfer:',
    contact: 'Contact:',
    quantumSectionLabel: 'QUANTUM LEVEL',
    quantumSectionTitle: 'Electron orbitals',
    quantumPrompt: 'Select an atom to view its orbitals.',
    sOrbitalTitle: 's-Orbital',
    sOrbitalDesc: 'Sphere, electrons are equally likely in all directions. Each energy level has one s-orbital (max 2 electrons).',
    pOrbitalTitle: 'p-Orbital',
    pOrbitalDesc: 'Dumbbell-shaped, 3 orientations (px, py, pz). Each p-orbital holds 2 electrons, total 6 electrons in p-subshell.',
    electronFillingTitle: 'Electron filling',
    electronFillingDesc: 'Electrons fill orbitals according to the Aufbau principle: starting from the lowest energy level up to higher ones. Each orbital can hold maximum 2 electrons with opposite spins.',
    forcesLabel: 'INTERMOLECULAR FORCES',
    forcesTitle: 'Intermolecular forces',
    selectForce: 'Select a force',
    forceDescription: 'Select an intermolecular force to see details.',
    strength: 'Strength',
    energyRange: 'Energy range',
    factors: 'Factors',
    comparison: 'Comparison',
    example: 'Example',
    strong: 'Strong',
    medium: 'Medium',
    weak: 'Weak',
    moleculeForcesTitle: 'Intermolecular forces',
    primaryForce: 'Primary force',
    moleculeInfoTitle: 'Molecule info',
    factLabel: 'Fact',
    hintLabel: 'Hint',
    saltModeLabel: 'MODE',
    saltModeTitle: 'Build salt',
    saltModeButton: 'Build salt',
    saltModeStart: 'Start',
    saltModeClose: 'Close',
    saltModeDescription: 'Balance the ions and build a neutral compound.',
    saltModePrompt: 'Choose the shown charges and connect opposite signs.',
    baseModeTitle: 'Build base',
    baseModeButton: 'Build base',
    baseModeDescription: 'Assemble a base from the correct ions and covalent bonds.',
    baseModePrompt: 'Choose the shown charges and connect the atoms with the correct bonds.',
    acidModeTitle: 'Build acid',
    acidModeButton: 'Build acid',
    acidModeDescription: 'Assemble an acid from the correct atoms, charges, and bonds.',
    acidModePrompt: 'Choose the shown charges and connect the atoms with the correct bonds.',
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
  et: { H:'vesinik', O:'hapnik', C:'süsinik', N:'lämmastik', Cl:'kloor', Na:'naatrium', S:'väävel', Mg:'magneesium', Ca:'kaltsium', Al:'alumiinium', F:'fluor', U:'uraan', Cs:'tseesium', Ra:'raadium', Pu:'plutoonium', I:'jood' },
  en: { H:'hydrogen', O:'oxygen', C:'carbon', N:'nitrogen', Cl:'chlorine', Na:'sodium', S:'sulfur', Mg:'magnesium', Ca:'calcium', Al:'aluminium', F:'fluorine', U:'uranium', Cs:'cesium', Ra:'radium', Pu:'plutonium', I:'iodine' }
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
    chlorine: ['Chlorine', 'A reactive element used for disinfection.'],
    'uranium-dioxide': ['Uranium dioxide', 'A uranium compound used in nuclear fuel.'],
    'cesium-iodide': ['Cesium iodide', 'An ionic compound used in radioactive cesium studies.'],
    'radium-chloride': ['Radium chloride', 'An ionic compound of radium and chlorine.'],
    'plutonium-dioxide': ['Plutonium dioxide', 'A well-known plutonium compound in nuclear technology.']
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
    chlorine: 'Chlorine is used in water treatment and can form from bleach.',
    'uranium-dioxide': 'Uranium dioxide is a common nuclear fuel compound.',
    'cesium-iodide': 'Cesium iodide forms an ionic crystal lattice.',
    'radium-chloride': 'Radium chloride is a historically known radium compound.',
    'plutonium-dioxide': 'Plutonium dioxide is a stable ceramic compound.'
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

function getTargetSignature(targetMolecule = target) {
  if (!targetMolecule || !targetMolecule.bonds || !targetMolecule.atoms) {
    return '';
  }

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
  const targetBondIndex = target.bonds.findIndex((bond, bondIndex) => {
    const firstSymbol = target.atoms[bond[0]];
    const secondSymbol = target.atoms[bond[1]];
    return ((firstSymbol === firstAtom.symbol && secondSymbol === secondAtom.symbol) ||
      (firstSymbol === secondAtom.symbol && secondSymbol === firstAtom.symbol)) &&
      target.bondTypes?.[bondIndex] === 'ionic';
  });
  if (targetBondIndex >= 0 && target.bondTypes?.[targetBondIndex]) {
    return target.bondTypes[targetBondIndex] === 'ionic';
  }
  const metals = ['Na', 'Mg', 'Ca', 'Al', 'Fe', 'Cu', 'Zn'];
  return metals.includes(firstAtom.symbol) && secondAtom.charge < 0 || metals.includes(secondAtom.symbol) && firstAtom.charge < 0;
}

function getTargetChargeSignature(targetMolecule = target) {
  if (!targetMolecule || !targetMolecule.atoms) {
    return '';
  }

  const charges = targetMolecule.charges || targetMolecule.atoms.map(() => 0);
  return charges
    .map((charge, index) => `${targetMolecule.atoms[index]}:${charge}`)
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

function loadCompletedLevelTasks() {
  try {
    const storedValue = localStorage.getItem(LEVEL_TASKS_KEY);
    completedLevelTasks = storedValue ? new Set(JSON.parse(storedValue)) : new Set();
  } catch (error) {
    completedLevelTasks = new Set();
  }
}

function saveCompletedLevelTasks() {
  try {
    localStorage.setItem(LEVEL_TASKS_KEY, JSON.stringify([...completedLevelTasks]));
  } catch (error) {
    // Ignore storage failures in browsers that block localStorage.
  }
}

function getLevelConfig(levelId = currentLevelId) {
  return levelConfigs.find(level => level.id === levelId) || levelConfigs[0];
}

function getLevelTaskKey(levelId, moleculeId) {
  return `${levelId}:${moleculeId}`;
}

function isLevelUnlocked(levelId) {
  return levelId === 1 || completedLevelTasks.has(`level:${levelId - 1}`);
}

function isLevelComplete(level) {
  return level.requiredMolecules.every(moleculeId => completedLevelTasks.has(getLevelTaskKey(level.id, moleculeId)));
}

function getLevelMolecules(level = getLevelConfig()) {
  return level.requiredMolecules.map(moleculeId => molecules.find(molecule => molecule.id === moleculeId)).filter(Boolean);
}

function renderLevelProgress() {
  const level = getLevelConfig();
  const conceptLabels = currentLang === 'en' ? level.focusConceptsEn : level.focusConcepts;
  const completedCount = level.requiredMolecules.filter(moleculeId => completedLevelTasks.has(getLevelTaskKey(level.id, moleculeId))).length;
  $('level-grid').innerHTML = levelConfigs.map(config => {
    const unlocked = isLevelUnlocked(config.id);
    const complete = isLevelComplete(config);
    const configCompleted = config.requiredMolecules.filter(moleculeId => completedLevelTasks.has(getLevelTaskKey(config.id, moleculeId))).length;
    const configName = currentLang === 'en' ? config.nameEn : config.name;
    return `<button class="level-choice ${config.id === currentLevelId ? 'active' : ''} ${complete ? 'completed' : ''} ${unlocked ? '' : 'locked'}" data-level-id="${config.id}" type="button" ${unlocked ? '' : 'disabled'}><span class="level-choice-number">${String(config.id).padStart(2, '0')}</span><strong>${configName}</strong><small>${unlocked ? `${configCompleted}/${config.requiredMolecules.length}` : (currentLang === 'en' ? 'Locked' : 'Lukus')}</small></button>`;
  }).join('');
  document.querySelectorAll('.level-choice:not(:disabled)').forEach(button => button.addEventListener('click', () => selectLevel(Number(button.dataset.levelId))));
  $('level-focus').textContent = `${currentLang === 'en' ? 'Focus' : 'Fookus'}: ${conceptLabels.join(' · ')} · ${completedCount}/${level.requiredMolecules.length}`;
  $('level-description').textContent = currentLang === 'en' ? level.descriptionEn : level.description;
}

function selectLevel(levelId) {
  if (!isLevelUnlocked(levelId)) return;
  currentLevelId = levelId;
  const level = getLevelConfig();
  replayingCompletedLevel = isLevelComplete(level);
  const levelMolecules = getLevelMolecules(level);
  const nextMolecule = levelMolecules.find(molecule => !completedLevelTasks.has(getLevelTaskKey(level.id, molecule.id))) || levelMolecules[0];
  renderLevelProgress();
  selectTarget(nextMolecule.id);
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

function getReactionCopy(reaction) {
  const localized = reactionCopy[currentLang];
  const englishNames = {
    'water-formation': ['Water formation', 'Hydrogen and oxygen react to form water.'],
    'combustion-methane': ['Methane combustion', 'Methane burns in oxygen, producing carbon dioxide and water.'],
    'ammonia-synthesis': ['Ammonia synthesis', 'Nitrogen and hydrogen combine to produce ammonia.'],
    neutralization: ['Neutralization', 'An acid and a base neutralize each other, forming salt and water.'],
    'atp-synthesis': ['ATP synthesis', 'ADP and phosphate combine to form ATP, storing chemical energy.'],
    'glucose-breakdown': ['Glucose breakdown', 'Cellular respiration converts glucose into carbon dioxide and water.'],
    'iron-thiocyanate-equilibrium': ['Iron(III) thiocyanate equilibrium', 'Iron(III) and thiocyanate ions form the red FeSCN²⁺ complex.'],
    'haber-equilibrium': ['Ammonia equilibrium synthesis', 'Pressure, temperature and an iron catalyst affect ammonia formation.'],
    'peroxide-catalytic-decomposition': ['Catalytic hydrogen peroxide decomposition', 'Manganese dioxide lowers the activation energy for peroxide decomposition.'],
    peroxide: ['Hydrogen peroxide decomposition', 'A catalyst helps peroxide decompose faster.'],
    photosynthesis: ['Photosynthesis', 'The plant stores light energy as chemical energy in glucose.']
  };
  const english = englishNames[reaction.id] || [reaction.name || reaction.id, reaction.fact || reaction.hint || ''];
  return currentLang === 'en'
    ? { ...reaction, name: english[0], detail: english[1], tag: reaction.energy === 'exo' ? localized.exoTag : localized.endoTag }
    : { ...reaction, tag: reaction.energy === 'exo' ? localized.exoTag : localized.endoTag };
}

function renderReactionLab() {
  $('reaction-grid').innerHTML = reactions.map((reaction, index) => { const localized = getReactionCopy(reaction); return `<button class="reaction-card ${reaction.energy === 'endo' ? 'endothermic' : ''} ${reaction.id === selectedReaction.id ? 'active' : ''}" data-reaction-index="${index}" type="button"><strong>${localized.name}</strong><small>${localized.equation}</small><span class="reaction-tag">${localized.tag}</span></button>`; }).join('');
  document.querySelectorAll('.reaction-card').forEach(button => button.addEventListener('click', () => {
    selectedReaction = reactions[Number(button.dataset.reactionIndex)];
    updateReactionUI();
  }));
  updateReactionUI();
}

function renderElementReactionCards() {
  const query = elementReactionFilter.trim().toLocaleLowerCase();
  const visibleCards = elementReactionCards.filter(element =>
    !query || `${element.symbol} ${element.name} ${element.atomicNumber}`.toLocaleLowerCase().includes(query)
  );
  $('element-reaction-grid').innerHTML = visibleCards.map(element => `
    <button class="element-reaction-card ${element.symbol === selectedElementReaction.symbol ? 'active' : ''}" data-symbol="${element.symbol}" type="button">
      <span class="element-reaction-number">${element.atomicNumber}</span>
      <strong>${element.symbol}</strong>
      <small>${element.name}</small>
    </button>
  `).join('');
  document.querySelectorAll('.element-reaction-card').forEach(button => button.addEventListener('click', () => {
    selectedElementReaction = elementReactionCards.find(element => element.symbol === button.dataset.symbol);
    updateElementReactionDetail();
    renderElementReactionCards();
  }));
  updateElementReactionDetail();
}

function updateElementReactionDetail() {
  if (!selectedElementReaction) return;
  $('element-reaction-equation').textContent = selectedElementReaction.equation;
  $('element-reaction-detail').textContent = `${selectedElementReaction.name} (${selectedElementReaction.symbol}, Z=${selectedElementReaction.atomicNumber}): ${selectedElementReaction.detail}`;
}

function renderForces() {
  $('forces-grid').innerHTML = intermolecularForces.map((force, index) => {
    const strengthClass = force.strength === 'strong' ? 'strong' : force.strength === 'medium' ? 'medium' : 'weak';
    const strengthText = t(force.strength);
    return `<button class="force-card ${force.id === selectedForce.id ? 'active' : ''}" data-force-index="${index}" type="button">
      <strong>${force.name}</strong>
      <span class="force-strength ${strengthClass}">${strengthText}</span>
    </button>`;
  }).join('');
  
  document.querySelectorAll('.force-card').forEach(button => button.addEventListener('click', () => {
    selectedForce = intermolecularForces[Number(button.dataset.forceIndex)];
    updateForcesUI();
  }));
  
  updateForcesUI();
}

function updateForcesUI() {
  document.querySelectorAll('.force-card').forEach(button => {
    button.classList.toggle('active', Number(button.dataset.forceIndex) === intermolecularForces.indexOf(selectedForce));
  });
  
  const strengthClass = selectedForce.strength === 'strong' ? 'strong' : selectedForce.strength === 'medium' ? 'medium' : 'weak';
  const strengthText = t(selectedForce.strength);
  
  $('forces-detail').innerHTML = `
    <strong>${selectedForce.name}</strong>
    <p>${selectedForce.description}</p>
    <p><strong>${t('example')}:</strong> ${selectedForce.example}</p>
    <div class="force-meta">
      <span><strong>${t('strength')}:</strong> <span class="force-strength ${strengthClass}">${strengthText}</span></span>
      <span><strong>${t('energyRange')}:</strong> ${selectedForce.energyRange}</span>
    </div>
    <div class="force-meta">
      <span><strong>${t('factors')}:</strong> ${selectedForce.factors}</span>
    </div>
    <div class="force-meta">
      <span><strong>${t('comparison')}:</strong> ${selectedForce.comparison}</span>
    </div>
  `;
}

function updateMoleculeForcesInfo() {
  const forcesDetail = $('molecule-forces-detail');

  if (!target || !target.intermolecularForces) {
    forcesDetail.hidden = true;
    return;
  }

  forcesDetail.hidden = false;
  const moleculeDisplay = getMoleculeText(target);
  $('molecule-forces-title').textContent = `${target.name} — ${t('moleculeInfoTitle')}`;

  const forceTags = target.intermolecularForces.map(forceId => {
    const force = intermolecularForces.find(f => f.id === forceId);
    if (!force) return '';
    const forceNameEt = { 'hydrogen-bonding': 'Vesiniksidemed', 'dipole-dipole': 'Dipool-dipool', 'london-dispersion': 'Londoni jõud', 'ionic': 'Ioonilised jõud' };
    const forceNameEn = { 'hydrogen-bonding': 'Hydrogen bonding', 'dipole-dipole': 'Dipole-dipole', 'london-dispersion': 'London dispersion', 'ionic': 'Ionic forces' };
    const forceName = currentLang === 'et' ? forceNameEt[forceId] : forceNameEn[forceId];
    return `<span class="force-tag ${forceId}">${forceName}</span>`;
  }).join('');

  const primaryForce = intermolecularForces.find(f => f.id === target.primaryForce);
  const primaryForceNameEt = { 'hydrogen-bonding': 'Vesiniksidemed', 'dipole-dipole': 'Dipool-dipool', 'london-dispersion': 'Londoni jõud', 'ionic': 'Ioonilised jõud' };
  const primaryForceNameEn = { 'hydrogen-bonding': 'Hydrogen bonding', 'dipole-dipole': 'Dipole-dipole', 'london-dispersion': 'London dispersion', 'ionic': 'Ionic forces' };
  const primaryForceName = currentLang === 'et' ? primaryForceNameEt[target.primaryForce] : primaryForceNameEn[target.primaryForce];
  const moleculeFact = getMoleculeFact(target);

  $('molecule-forces-content').innerHTML = `
    <p><strong>${target.formula}</strong></p>
    <p><strong>${t('hintLabel')}:</strong> ${moleculeDisplay[1]}</p>
    <p><strong>${t('factLabel')}:</strong> ${moleculeFact}</p>
    <p>${target.forceAnalysis}</p>
    <div class="force-tags">${forceTags}</div>
    <div class="primary-force">
      <strong>${t('primaryForce')}:</strong> ${primaryForceName}
    </div>
  `;
}

function updateReactionUI() {
  const section = document.querySelector('.reaction-section');
  section.classList.remove('exothermic', 'endothermic');
  section.classList.add(selectedReaction.energy === 'exo' ? 'exothermic' : 'endothermic');
  document.querySelectorAll('.reaction-card').forEach(button => button.classList.toggle('active', Number(button.dataset.reactionIndex) === reactions.indexOf(selectedReaction)));
  const localized = getReactionCopy(selectedReaction);
  $('reaction-state').textContent = selectedReaction.energy === 'exo' ? reactionCopy[currentLang].heatReleased : reactionCopy[currentLang].energyAbsorbed;
  $('reaction-equation').textContent = selectedReaction.equation;
  $('reaction-detail').textContent = localized.detail;
  drawEnergyDiagram();
}

function drawEnergyDiagram() {
  const curve = $('energy-curve');
  if (!selectedReaction) {
    curve.innerHTML = '';
    return;
  }
  
  const energyChange = selectedReaction.energyChange || 0;
  const activationEnergy = selectedReaction.activationEnergy || 100;
  const isExothermic = energyChange < 0;
  
  const startX = 60;
  const endX = 340;
  const baseY = 80;
  const peakY = baseY - (activationEnergy / 10);
  const finalY = isExothermic ? baseY + (Math.abs(energyChange) / 10) : baseY - (energyChange / 10);
  
  const path = `M ${startX} ${baseY} Q ${startX + 50} ${peakY} ${startX + 100} ${peakY} L ${endX - 50} ${finalY} L ${endX} ${finalY}`;
  const reactantsLabel = translations[currentLang].reactants;
  const activationEnergyLabel = translations[currentLang].activationEnergy;
  const productsLabel = translations[currentLang].products;
  const energyUnits = currentLang === 'en' ? ' kJ' : ' kJ';
  
  curve.innerHTML = `
    <path d="${path}" fill="none" stroke="${isExothermic ? '#ef8354' : '#8dc5e8'}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="${startX}" cy="${baseY}" r="4" fill="#102a43"/>
    <circle cx="${startX + 100}" cy="${peakY}" r="4" fill="#ef8354"/>
    <circle cx="${endX}" cy="${finalY}" r="4" fill="#102a43"/>
    <text x="${startX}" y="${baseY + 15}" font-size="9" fill="#627d98" text-anchor="middle">${reactantsLabel}</text>
    <text x="${startX + 100}" y="${peakY - 10}" font-size="9" fill="#ef8354" text-anchor="middle">${activationEnergyLabel}</text>
    <text x="${endX}" y="${finalY + 15}" font-size="9" fill="#627d98" text-anchor="middle">${productsLabel}</text>
    <text x="${endX + 10}" y="${(baseY + finalY) / 2}" font-size="9" fill="${isExothermic ? '#ef8354' : '#8dc5e8'}">${isExothermic ? '−' : '+'}${Math.abs(energyChange)}${energyUnits}</text>
  `;
}

function runReaction() {
  clearTimeout(reactionTimer);
  const catalyst = $('catalyst-select').value;
  const temperature = Number($('temperature-slider').value);
  const pressure = Number($('pressure-slider').value);
  const ph = Number($('ph-slider').value);
  const catalystNames = { 'manganese-dioxide':'MnO₂', platinum:'Pt' };
  const copy = reactionCopy[currentLang];
  const hasCatalyst = catalyst !== 'none';
  
  // Calculate reaction rate based on environmental factors
  const baseDuration = 2400;
  const tempFactor = Math.exp((temperature - 25) / 100); // Temperature effect (Arrhenius)
  const pressureFactor = 1 / Math.sqrt(pressure); // Pressure effect (higher pressure = faster for gas reactions)
  const phFactor = ph >= 6 && ph <= 8 ? 1 : 0.7; // pH effect (neutral pH is optimal)
  const catalystFactor = hasCatalyst ? 0.3 : 1; // Catalyst effect
  const duration = baseDuration * tempFactor * pressureFactor * phFactor * catalystFactor;
  
  const section = document.querySelector('.reaction-section');
  section.classList.add('reacting');
  
  let statusText = copy.running;
  if (hasCatalyst) {
    statusText += ` · ${catalystNames[catalyst]}`;
  }
  if (temperature > 100) {
    statusText += ` · ${temperature}°C`;
  }
  
  $('reaction-state').textContent = statusText;
  const speedText = translations[currentLang].speed;
  $('reaction-detail').textContent = `${speedText}: ${(1000/duration).toFixed(1)}x · T:${temperature}°C · P:${pressure}atm · pH:${ph}`;
  
  reactionTimer = setTimeout(() => {
    section.classList.remove('reacting');
    $('reaction-state').textContent = selectedReaction.energy === 'exo' ? copy.readyHeat : copy.readyEnergy;
    $('reaction-detail').textContent = hasCatalyst ? `${catalystNames[catalyst]} ${copy.catalystNotConsumed}` : copy.compareSpeed;
    toast(selectedReaction.energy === 'exo' ? copy.exoToast : copy.endoToast);
    
    score += Math.floor(50 * tempFactor * phFactor);
    updateScoreUI();
  }, duration);
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
  $('3d-toggle').textContent = `${lang.toggle3D} ${is3DView ? '2D' : '3D'}`;
  $('check-button').innerHTML = `${lang.checkMolecule} <span>→</span>`;
  document.querySelector('.elements-section h3').textContent = lang.selectBlock;
  document.querySelector('.molecules-section .section-kicker').textContent = lang.collection;
  document.querySelector('.molecules-section h3').textContent = lang.learnMolecules;
  document.querySelector('.quantum-section .section-kicker').textContent = lang.quantumSectionLabel;
  document.querySelector('.quantum-section h3').textContent = lang.quantumSectionTitle;
  $('quantum-toggle').textContent = $('quantum-view').hidden ? lang.show : lang.hide;
  document.querySelector('.salt-section .section-kicker').textContent = lang.saltModeLabel;
  document.querySelector('.salt-section h3').textContent = lang[`${buildMode}ModeTitle`];
  document.querySelectorAll('.build-mode-choice').forEach(button => {
    const mode = button.dataset.buildMode;
    button.textContent = lang[`${mode}ModeButton`];
  });
  document.querySelector('.connection-tip').textContent = lang.connectionTip;
  document.querySelector('.support-banner').setAttribute('aria-label', lang.supportLabel);
  document.querySelector('.workspace').setAttribute('aria-label', lang.yourMolecule);
  document.querySelector('.formula-card').setAttribute('aria-label', lang.formulaLabel);
  document.querySelector('.support-lead').textContent = lang.supportText;
  document.querySelector('.support-contact').textContent = lang.contact;
  $('salt-mode-toggle').textContent = saltMode ? lang.saltModeClose : lang.saltModeStart;
  $('salt-mode-description').textContent = lang[`${buildMode}ModeDescription`] || lang.saltModeDescription;
  document.querySelectorAll('.build-mode-choice').forEach(button => button.classList.toggle('active', button.dataset.buildMode === buildMode));
  document.querySelector('#target-hint').textContent = moleculeDisplay[1];

  const quantumInfo = document.querySelector('#quantum-info p');
  if (quantumInfo) {
    quantumInfo.textContent = atoms.length ? translations[currentLang].orbitalsInfo.replace('{count}', atoms.length) : translations[currentLang].quantumPrompt;
  }
  document.querySelectorAll('.element-choice small').forEach((el, index) => {
    el.textContent = elementNames[currentLang][elements[index].symbol] || elements[index].name;
  });
  
  renderMoleculeList();
  renderLevelProgress();
  
  // Update completion overlay
  document.querySelector('.completion-card .eyebrow').textContent = lang.allLevelsCompleted;
  document.querySelector('.completion-card h2').textContent = lang.gameComplete;
  document.querySelector('.completion-card > p:not(.eyebrow)').textContent = lang.builtAllMolecules;
  document.querySelector('.completion-score').innerHTML = `<span id="final-score">${score}</span> ${lang.pointsScore}`;
  document.querySelector('.completion-count').innerHTML = `<span id="completed-count">${completed.size}</span> ${lang.moleculesSolved}`;
  $('restart-button').innerHTML = `${lang.restart} <span>↻</span>`;
  $('charge-label').textContent = currentLang === 'et' ? 'Laeng / oksüdatsiooniaste' : 'Charge / oxidation state';
  $('salt-mode-description').textContent = translations[currentLang][`${buildMode}ModeDescription`] || translations[currentLang].saltModeDescription;
  const reactionLabels = reactionCopy[currentLang];
  $('reaction-lab-label').textContent = reactionLabels.labLabel;
  $('reaction-lab-title').textContent = reactionLabels.labTitle;
  $('element-reaction-label').textContent = reactionLabels.elementLabLabel;
  $('element-reaction-title').textContent = reactionLabels.elementLabTitle;
  $('element-reaction-search').placeholder = reactionLabels.elementSearch;
  $('reaction-state').textContent = reactionLabels.ready;
  $('catalyst-label').textContent = reactionLabels.catalyst;
  $('catalyst-none').textContent = reactionLabels.noCatalyst;
  $('catalyst-manganese').textContent = reactionLabels.manganese;
  $('catalyst-platinum').textContent = reactionLabels.platinum;
  $('run-reaction-button').innerHTML = `${reactionLabels.run} <span>→</span>`;
  
  // Update quantum educational section
  $('s-orbital-title').textContent = t('sOrbitalTitle');
  $('s-orbital-desc').textContent = t('sOrbitalDesc');
  $('p-orbital-title').textContent = t('pOrbitalTitle');
  $('p-orbital-desc').textContent = t('pOrbitalDesc');
  $('electron-filling-title').textContent = t('electronFillingTitle');
  $('electron-filling-desc').textContent = t('electronFillingDesc');
  
  // Update forces section
  $('forces-label').textContent = t('forcesLabel');
  $('forces-title').textContent = t('forcesTitle');
  
  renderReactionLab();
  renderElementReactionCards();
  renderForces();
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
  loadCompletedLevelTasks();
  currentLevelId = Math.max(...levelConfigs.filter(level => isLevelUnlocked(level.id)).map(level => level.id));
  loadLanguage();
  $('element-grid').innerHTML = elements.map(element => `<button class="element-choice" data-symbol="${element.symbol}" type="button"><strong>${element.symbol}</strong><small>${element.name}</small></button>`).join('');
  renderMoleculeList();
  document.querySelectorAll('.element-choice').forEach(button => button.addEventListener('click', () => addAtom(button.dataset.symbol)));
  document.querySelectorAll('.charge-choice').forEach(button => button.addEventListener('click', () => {
    selectedCharge = Number(button.dataset.charge);
    document.querySelectorAll('.charge-choice').forEach(choice => choice.classList.toggle('active', choice === button));
  }));
  $('salt-mode-toggle').addEventListener('click', toggleSaltMode);
  document.querySelectorAll('.build-mode-choice').forEach(button => button.addEventListener('click', () => selectBuildMode(button.dataset.buildMode)));
  $('undo-button').addEventListener('click', undo);
  $('hint-button').addEventListener('click', showHint);
  $('show-structure-button').addEventListener('click', showStructure);
  $('timer-toggle').addEventListener('click', toggleTimer);
  $('3d-toggle').addEventListener('click', toggle3DView);
  $('lang-toggle').addEventListener('click', toggleLanguage);
  $('check-button').addEventListener('click', checkMolecule);
  $('restart-button').addEventListener('click', restartGame);
  $('run-reaction-button').addEventListener('click', runReaction);
  $('element-reaction-search').addEventListener('input', event => {
    elementReactionFilter = event.target.value;
    renderElementReactionCards();
  });
  $('temperature-slider').addEventListener('input', () => {
    $('temperature-value').textContent = `${$('temperature-slider').value}°C`;
  });
  $('pressure-slider').addEventListener('input', () => {
    $('pressure-value').textContent = `${$('pressure-slider').value} atm`;
  });
  $('ph-slider').addEventListener('input', () => {
    const ph = $('ph-slider').value;
    $('ph-value').textContent = ph;
    $('ph-value').style.color = ph < 7 ? '#ef8354' : ph > 7 ? '#8dc5e8' : '#102a43';
  });
  $('quantum-toggle').addEventListener('click', toggleQuantumView);
  renderReactionLab();
  updateScoreUI();
  updateLanguageUI();
  renderLevelProgress();
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
function selectTarget(id) { saltMode = false; $('salt-challenges').hidden = true; $('salt-mode-toggle').textContent = currentLang === 'et' ? 'Alusta' : 'Start'; stopDecayTimer(); radioactiveAtoms = []; target = molecules.find(molecule => molecule.id === id); atoms = []; bonds = []; selected = null; actionHistory = []; renderMoleculeList(); const moleculeDisplay = getMoleculeText(target); $('level').textContent = String(currentLevelId).padStart(2,'0'); $('target-name').textContent = moleculeDisplay[0]; $('target-formula').textContent = target.formula; $('target-hint').textContent = moleculeDisplay[1]; updateMoleculeForcesInfo(); render(); }
function selectBuildMode(mode) { buildMode = mode; saltMode = true; $('salt-challenges').hidden = false; $('salt-mode-toggle').textContent = t('saltModeClose'); const challenges = buildChallenges[buildMode]; $('salt-challenges').innerHTML = challenges.map((challenge, index) => `<button class="salt-challenge ${index === 0 ? 'active' : ''}" data-index="${index}" type="button">${challenge.formula}</button>`).join(''); document.querySelectorAll('.salt-challenge').forEach(button => button.addEventListener('click', () => selectBuildChallenge(Number(button.dataset.index)))); updateLanguageUI(); selectBuildChallenge(0); }
function selectBuildChallenge(index) { saltMode = true; stopDecayTimer(); radioactiveAtoms = []; target = buildChallenges[buildMode][index]; atoms = []; bonds = []; selected = null; actionHistory = []; document.querySelectorAll('.salt-challenge').forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index)); $('level').textContent = `${buildMode === 'salt' ? 'S' : buildMode === 'base' ? 'B' : 'H'}${index + 1}`; $('target-name').textContent = target.name; $('target-formula').textContent = target.formula; $('target-hint').textContent = t(`${buildMode}ModePrompt`); updateMoleculeForcesInfo(); render(); }
function toggleSaltMode() { saltMode = !saltMode; $('salt-challenges').hidden = !saltMode; $('salt-mode-toggle').textContent = saltMode ? t('saltModeClose') : t('saltModeStart'); if (saltMode) selectBuildMode(buildMode); }
function addAtom(symbol) {
  if (atoms.length >= 8) return toast(t('capacity'));
  const nextIndex = atoms.length;
  const element = elements.find(e => e.symbol === symbol);
  
  atoms.push({ symbol, charge: selectedCharge, x: 50, y: 50 });
  
  // Track radioactive atoms
  if (element && element.radioactive) {
    radioactiveAtoms.push({
      atom: atoms[nextIndex],
      symbol: symbol,
      createdAt: Date.now(),
      halfLife: element.halflife
    });
    startDecayTimer();
  }
  
  snapAtomToLayout(nextIndex);
  actionHistory.push({ type: 'addAtom', symbol, index: nextIndex });
  initAudio();
  playSound('addAtom');
  if (is3DView) {
    render3DMolecule();
  } else {
    render();
  }
}
function showHint() {
  const hintText = getMoleculeText(target)[1];
  $('target-hint').textContent = `${t('hintPrefix')} ${hintText}`;
  toast(hintText);
}
function showStructure() {
  const originalAtoms = [...atoms];
  const originalBonds = [...bonds];
  const was3DView = is3DView;
  
  atoms = target.atoms.map((symbol, index) => ({ symbol, charge: target.charges?.[index] || 0, x: 50, y: 50 }));
  bonds = target.bonds.map((bond, index) => [...bond, target.bondTypes?.[index] || 'covalent']);
  atoms.forEach((_, index) => snapAtomToLayout(index));
  
  if (was3DView) {
    render3DMolecule();
  } else {
    render();
  }
  
  toast(t('shownStructure'));
  setTimeout(() => {
    atoms = originalAtoms;
    bonds = originalBonds;
    if (was3DView) {
      render3DMolecule();
    } else {
      render();
    }
  }, 3000);
}
function advanceLevel() {
  const level = getLevelConfig();
  if (target && target.id) {
    completed.add(target.id);
    completedLevelTasks.add(getLevelTaskKey(level.id, target.id));
  }
  saveCompletedLevels();
  saveCompletedLevelTasks();

  if (replayingCompletedLevel) {
    const levelMolecules = getLevelMolecules(level);
    const currentIndex = levelMolecules.findIndex(molecule => molecule.id === target.id);
    const nextMolecule = levelMolecules[(currentIndex + 1) % levelMolecules.length];
    selectTarget(nextMolecule.id);
    toast(currentLang === 'en' ? 'Replay complete. Choose another challenge.' : 'Kordusmäng tehtud. Vali järgmine ülesanne.');
    return;
  }

  const nextUnfinished = getLevelMolecules(level).find(molecule => !completedLevelTasks.has(getLevelTaskKey(level.id, molecule.id)));
  if (!nextUnfinished) {
    completedLevelTasks.add(`level:${level.id}`);
    saveCompletedLevelTasks();
    if (level.id < levelConfigs.length) {
      currentLevelId = level.id + 1;
      replayingCompletedLevel = false;
      renderLevelProgress();
      selectTarget(getLevelMolecules(getLevelConfig())[0].id);
      toast(currentLang === 'en' ? `Level ${currentLevelId} unlocked!` : `Tase ${currentLevelId} avanes!`);
      return;
    }
    showCompletion();
    return;
  }
  selectTarget(nextUnfinished.id);
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
function restartGame() {
  score = 0;
  completed = new Set();
  completedLevelTasks = new Set();
  currentLevelId = 1;
  replayingCompletedLevel = false;
  saveCompletedLevels();
  saveCompletedLevelTasks();
  updateScoreUI();
  $('completion-overlay').hidden = true;
  renderLevelProgress();
  selectTarget(getLevelMolecules()[0].id);
}
function renderMoleculeList() {
  const level = getLevelConfig();
  const levelMolecules = getLevelMolecules(level);
  $('molecule-list').innerHTML = levelMolecules.map(molecule => `<button class="molecule-item ${target?.id === molecule.id ? 'active' : ''} ${completedLevelTasks.has(getLevelTaskKey(level.id, molecule.id)) ? 'completed' : ''}" data-id="${molecule.id}" data-difficulty="${molecule.difficulty}" type="button"><span class="molecule-symbol">${molecule.formula}</span><span><strong>${molecule.name}</strong><small>${molecule.difficulty === 'easy' ? 'Lihtne' : molecule.difficulty === 'medium' ? 'Keskmine' : 'Raske'}</small></span></button>`).join('');
  document.querySelectorAll('.molecule-item').forEach(button => button.addEventListener('click', () => selectTarget(button.dataset.id)));
}
function render() {
  updateMoleculeForcesInfo();

  if (is3DView) {
    render3DMolecule();
    return;
  }
  
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
    if (is3DView) {
      render3DMolecule();
    } else {
      render();
    }
    return;
  }
  if (selected === index) {
    selected = null;
    if (is3DView) {
      render3DMolecule();
    } else {
      render();
    }
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
  if (is3DView) {
    render3DMolecule();
  } else {
    render();
  }
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
  if (is3DView) {
    render3DMolecule();
  } else {
    render();
  }
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
        const challenges = buildChallenges[buildMode];
        const nextChallenge = (challenges.findIndex(challenge => challenge.id === target.id) + 1) % challenges.length;
        selectBuildChallenge(nextChallenge);
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

function startDecayTimer() {
  if (decayInterval) return;
  
  decayInterval = setInterval(() => {
    const now = Date.now();
    const atomsToRemove = [];
    
    radioactiveAtoms.forEach((radioAtom, radioIndex) => {
      const elapsedSeconds = (now - radioAtom.createdAt) / 1000;
      const decayData = radioactiveDecay[radioAtom.symbol];
      
      if (decayData && elapsedSeconds >= decayData.halfLife) {
        // Atom has decayed
        atomsToRemove.push(radioAtom);
        
        // Remove original atom
        const atomIndex = atoms.indexOf(radioAtom.atom);
        if (atomIndex >= 0) {
          atoms.splice(atomIndex, 1);
        }
        
        // Add decay products
        decayData.products.forEach((productSymbol, i) => {
          if (atoms.length < 6) {
            const productElement = elements.find(e => e.symbol === productSymbol);
            const productAtom = { 
              symbol: productSymbol, 
              charge: 0, 
              x: (atomIndex >= 0 ? atomIndex : 0) * 10 + 20 + (i * 10), 
              y: 50 
            };
            atoms.push(productAtom);
            
            // If product is also radioactive, track it
            if (productElement && productElement.radioactive) {
              radioactiveAtoms.push({
                atom: productAtom,
                symbol: productSymbol,
                createdAt: Date.now(),
                halfLife: productElement.halflife
              });
            }
          }
        });
        
        // Show decay notification
        const decayMessage = currentLang === 'et' 
          ? `${radioAtom.symbol} lagunes ${decayData.products.join(' → ')}!`
          : `${radioAtom.symbol} decayed to ${decayData.products.join(' → ')}!`;
        toast(decayMessage);
        playSound('error'); // Use error sound for decay
      }
    });
    
    // Remove decayed atoms from tracking
    radioactiveAtoms = radioactiveAtoms.filter(r => !atomsToRemove.includes(r));
    
    // Stop timer if no radioactive atoms left
    if (radioactiveAtoms.length === 0) {
      clearInterval(decayInterval);
      decayInterval = null;
    }
    
    // Re-render if atoms changed
    if (atomsToRemove.length > 0) {
      if (is3DView) {
        render3DMolecule();
      } else {
        render();
      }
    }
  }, 1000); // Check every second
}

function stopDecayTimer() {
  if (decayInterval) {
    clearInterval(decayInterval);
    decayInterval = null;
  }
}

function toggleQuantumView() {
  const view = $('quantum-view');
  view.hidden = !view.hidden;
  $('quantum-toggle').textContent = view.hidden ? translations[currentLang].show : translations[currentLang].hide;
  
  if (!view.hidden) {
    drawOrbitals();
  }
}

const electronConfigurations = {
  'H': { shells: [1], electrons: 1, orbitals: ['1s¹'] },
  'O': { shells: [2, 6], electrons: 8, orbitals: ['1s²', '2s²', '2p⁴'] },
  'C': { shells: [2, 4], electrons: 6, orbitals: ['1s²', '2s²', '2p²'] },
  'N': { shells: [2, 5], electrons: 7, orbitals: ['1s²', '2s²', '2p³'] },
  'Cl': { shells: [2, 8, 7], electrons: 17, orbitals: ['1s²', '2s²', '2p⁶', '3s²', '3p⁵'] },
  'Na': { shells: [2, 8, 1], electrons: 11, orbitals: ['1s²', '2s²', '2p⁶', '3s¹'] },
  'S': { shells: [2, 8, 6], electrons: 16, orbitals: ['1s²', '2s²', '2p⁶', '3s²', '3p⁴'] },
  'F': { shells: [2, 7], electrons: 9, orbitals: ['1s²', '2s²', '2p⁵'] },
  'Mg': { shells: [2, 8, 2], electrons: 12, orbitals: ['1s²', '2s²', '2p⁶', '3s²'] },
  'Ca': { shells: [2, 8, 8, 2], electrons: 20, orbitals: ['1s²', '2s²', '2p⁶', '3s²', '3p⁶', '4s²'] },
  'Al': { shells: [2, 8, 3], electrons: 13, orbitals: ['1s²', '2s²', '2p⁶', '3s²', '3p¹'] }
};

function drawOrbitals() {
  const orbitalsGroup = $('orbitals');
  const info = $('quantum-info');
  
  if (atoms.length === 0) {
    info.innerHTML = `<p>${translations[currentLang].addAtomsForOrbitals}</p>`;
    orbitalsGroup.innerHTML = '';
    return;
  }
  
  const centerX = 200;
  const centerY = 125;
  let html = '';
  
  atoms.forEach((atom, index) => {
    const config = electronConfigurations[atom.symbol];
    if (!config) return;
    
    const offsetX = (index * 90) - ((atoms.length - 1) * 45);
    const atomX = centerX + offsetX;
    
    // Draw orbital shells with better visualization
    config.shells.forEach((electronCount, shellIndex) => {
      const radius = 25 + shellIndex * 18;
      
      // Draw orbital shell
      html += `<circle cx="${atomX}" cy="${centerY}" r="${radius}" fill="url(#orbital-gradient)" stroke="#8dc5e8" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.7"/>`;
      
      // Draw electrons in orbital positions
      for (let i = 0; i < electronCount; i++) {
        const angle = (i / electronCount) * Math.PI * 2;
        const electronX = atomX + Math.cos(angle) * radius;
        const electronY = centerY + Math.sin(angle) * radius;
        
        // Add electron with spin indication
        const spinOffset = i % 2 === 0 ? -2 : 2;
        html += `<circle cx="${electronX + spinOffset}" cy="${electronY}" r="4" fill="#ef8354" stroke="#fff" stroke-width="1"/>`;
      }
    });
    
    // Draw nucleus
    const atomColors = {
      'H': '#b9e5d4', 'O': '#ef8354', 'C': '#8dc5e8', 'N': '#eeb6c9',
      'Cl': '#e6f3ff', 'Na': '#f5d6a5', 'S': '#d9d4ff', 'Mg': '#c7d8e5',
      'Ca': '#c7d8e5', 'Al': '#c7d8e5', 'F': '#c9e8d3'
    };
    html += `<circle cx="${atomX}" cy="${centerY}" r="8" fill="${atomColors[atom.symbol] || '#8dc5e8'}" stroke="#fff" stroke-width="2"/>`;
    
    // Draw atom symbol
    html += `<text x="${atomX}" y="${centerY + 3}" font-size="10" fill="#fff" font-weight="700" text-anchor="middle" dominant-baseline="middle">${atom.symbol}</text>`;
    
    // Draw orbital notation below
    if (config.orbitals) {
      const orbitalText = config.orbitals.join(' ');
      html += `<text x="${atomX}" y="${centerY + 50}" font-size="9" fill="#627d98" text-anchor="middle">${orbitalText}</text>`;
    }
  });
  
  orbitalsGroup.innerHTML = html;
  
  // Enhanced educational info
  const orbitalExplanation = currentLang === 'et' 
    ? `<p><strong>Orbitaalid näitavad elektroni paiknemist:</strong> Iga ring tähistab energiataset, punktid on elektronid. Elektronid täidavad orbitaale vastavalt Aufbau printsiibile - alates madalaimast energiatasemest. s-orbitaalid on sfäärilised (maks 2e⁻), p-orbitaalid kellukujulised (maks 6e⁻).</p>`
    : `<p><strong>Orbitals show electron arrangement:</strong> Each ring represents an energy level, dots are electrons. Electrons fill orbitals according to the Aufbau principle - starting from the lowest energy level. s-orbitals are spherical (max 2e⁻), p-orbitals are dumbbell-shaped (max 6e⁻).</p>`;
  
  info.innerHTML = orbitalExplanation;
}

// 3D Molecule Renderer
class Molecule3DRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.rotationX = 0.3;
    this.rotationY = 0.5;
    this.zoom = 1.0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    
    // VSEPR angles and bond lengths (in Angstroms, scaled for display)
    this.bondLengths = {
      'H-H': 0.74, 'H-O': 0.96, 'H-C': 1.09, 'H-N': 1.01, 'H-Cl': 1.27,
      'O-O': 1.21, 'C-C': 1.54, 'C-O': 1.43, 'C-N': 1.47, 'C-Cl': 1.77,
      'N-N': 1.45, 'N-O': 1.40, 'O-Cl': 1.69, 'Cl-Cl': 1.99,
      'Na-Cl': 2.82, 'Na-O': 2.31, 'O-S': 1.43, 'S-O': 1.43,
      'C-S': 1.82, 'H-S': 1.34, 'S-Cl': 2.00
    };
    
    // Atom radii (in Angstroms, scaled for display)
    this.atomRadii = {
      'H': 0.31, 'C': 0.77, 'N': 0.75, 'O': 0.73, 'F': 0.71,
      'Cl': 0.99, 'Na': 1.54, 'Mg': 1.36, 'Al': 1.18, 'S': 1.02,
      'Ca': 1.76
    };
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.canvas.addEventListener('mousedown', (e) => this.startDrag(e));
    this.canvas.addEventListener('mousemove', (e) => this.handleDrag(e));
    this.canvas.addEventListener('mouseup', () => this.stopDrag());
    this.canvas.addEventListener('mouseleave', () => this.stopDrag());
    
    // Touch support
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDrag(e.touches[0]);
    });
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.handleDrag(e.touches[0]);
    });
    this.canvas.addEventListener('touchend', () => this.stopDrag());
  }
  
  startDrag(e) {
    this.isDragging = true;
    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
  }
  
  handleDrag(e) {
    if (!this.isDragging) return;
    
    const deltaX = e.clientX - this.lastMouseX;
    const deltaY = e.clientY - this.lastMouseY;
    
    this.rotationY += deltaX * 0.01;
    this.rotationX += deltaY * 0.01;
    
    // Clamp rotation X to prevent flipping
    this.rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotationX));
    
    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
    
    this.render();
  }
  
  stopDrag() {
    this.isDragging = false;
  }
  
  project3D(point, width, height) {
    const { x, y, z } = point;
    
    // Apply rotation
    const cosX = Math.cos(this.rotationX);
    const sinX = Math.sin(this.rotationX);
    const cosY = Math.cos(this.rotationY);
    const sinY = Math.sin(this.rotationY);
    
    // Rotate around Y axis
    let x1 = x * cosY - z * sinY;
    let z1 = x * sinY + z * cosY;
    
    // Rotate around X axis
    let y1 = y * cosX - z1 * sinX;
    let z2 = y * sinX + z1 * cosX;
    
    // Perspective projection
    const fov = 400;
    const scale = fov / (fov + z2) * this.zoom;
    
    return {
      x: width / 2 + x1 * scale,
      y: height / 2 + y1 * scale,
      z: z2,
      scale: scale
    };
  }
  
  calculateVSEPRGeometry(atoms, bonds) {
    if (atoms.length === 0) return [];
    
    if (atoms.length === 1) return [{ x: 0, y: 0, z: 0 }];
    
    // Build adjacency list
    const adjacency = atoms.map(() => []);
    bonds.forEach(([from, to]) => {
      adjacency[from].push(to);
      adjacency[to].push(from);
    });
    
    // Find central atom (most connected)
    let centralIndex = 0;
    let maxConnections = 0;
    adjacency.forEach((connections, index) => {
      if (connections.length > maxConnections) {
        maxConnections = connections.length;
        centralIndex = index;
      }
    });
    
    // Initialize positions
    const positions = atoms.map(() => ({ x: 0, y: 0, z: 0 }));
    positions[centralIndex] = { x: 0, y: 0, z: 0 };
    
    // Get neighbors of central atom
    const neighbors = adjacency[centralIndex];
    const coordination = neighbors.length;
    
    // Special handling for common molecules with lone pairs
    const getSpecificGeometry = (centralSymbol, neighborSymbols) => {
      // Water (H2O): bent with 104.5°
      if (centralSymbol === 'O' && neighborSymbols.filter(s => s === 'H').length === 2) {
        return 'bent-water';
      }
      // Ammonia (NH3): trigonal pyramidal with 107°
      if (centralSymbol === 'N' && neighborSymbols.filter(s => s === 'H').length === 3) {
        return 'trigonal-pyramidal';
      }
      // Sulfur dioxide (SO2): bent with 119°
      if (centralSymbol === 'S' && neighborSymbols.filter(s => s === 'O').length === 2) {
        return 'bent-so2';
      }
      return null;
    };
    
    const neighborSymbols = neighbors.map(n => atoms[n].symbol);
    const specificGeometry = getSpecificGeometry(atoms[centralIndex].symbol, neighborSymbols);
    
    // Define VSEPR geometries with ideal bond angles
    const getGeometryPositions = (coordination, bondLength, geometryType) => {
      switch (geometryType) {
        case 'bent-water': // Water: 104.5°
          const waterAngle = (104.5 * Math.PI) / 180;
          return [
            { x: bondLength * Math.sin(waterAngle / 2), y: bondLength * Math.cos(waterAngle / 2), z: 0 },
            { x: -bondLength * Math.sin(waterAngle / 2), y: bondLength * Math.cos(waterAngle / 2), z: 0 }
          ];
        case 'trigonal-pyramidal': // Ammonia: 107°
          const ammoniaAngle = (107 * Math.PI) / 180;
          return [
            { x: bondLength, y: 0, z: 0 },
            { x: -bondLength * Math.cos(ammoniaAngle), y: bondLength * Math.sin(ammoniaAngle), z: 0 },
            { x: -bondLength * Math.cos(ammoniaAngle), y: -bondLength * Math.sin(ammoniaAngle) * Math.cos(Math.PI / 3), z: bondLength * Math.sin(ammoniaAngle) * Math.sin(Math.PI / 3) }
          ];
        case 'bent-so2': // SO2: 119°
          const so2Angle = (119 * Math.PI) / 180;
          return [
            { x: bondLength * Math.sin(so2Angle / 2), y: bondLength * Math.cos(so2Angle / 2), z: 0 },
            { x: -bondLength * Math.sin(so2Angle / 2), y: bondLength * Math.cos(so2Angle / 2), z: 0 }
          ];
        default:
          // Standard VSEPR geometries
          switch (coordination) {
            case 1:
              return [{ x: bondLength, y: 0, z: 0 }];
            case 2: // Linear (180°)
              return [
                { x: bondLength, y: 0, z: 0 },
                { x: -bondLength, y: 0, z: 0 }
              ];
            case 3: // Trigonal planar (120°)
              return [
                { x: bondLength, y: 0, z: 0 },
                { x: -bondLength * Math.cos(Math.PI / 3), y: bondLength * Math.sin(Math.PI / 3), z: 0 },
                { x: -bondLength * Math.cos(Math.PI / 3), y: -bondLength * Math.sin(Math.PI / 3), z: 0 }
              ];
            case 4: // Tetrahedral (109.5°)
              const tetraAngle = Math.acos(-1 / 3);
              return [
                { x: bondLength, y: 0, z: 0 },
                { x: -bondLength * Math.cos(tetraAngle), y: bondLength * Math.sin(tetraAngle), z: 0 },
                { x: -bondLength * Math.cos(tetraAngle), y: -bondLength * Math.sin(tetraAngle) * Math.cos(Math.PI / 3), z: bondLength * Math.sin(tetraAngle) * Math.sin(Math.PI / 3) },
                { x: -bondLength * Math.cos(tetraAngle), y: -bondLength * Math.sin(tetraAngle) * Math.cos(Math.PI / 3), z: -bondLength * Math.sin(tetraAngle) * Math.sin(Math.PI / 3) }
              ];
            case 5: // Trigonal bipyramidal (90°, 120°)
              return [
                { x: bondLength, y: 0, z: 0 }, // Axial
                { x: -bondLength, y: 0, z: 0 }, // Axial
                { x: 0, y: bondLength, z: 0 }, // Equatorial
                { x: 0, y: -bondLength * Math.cos(Math.PI / 3), z: bondLength * Math.sin(Math.PI / 3) }, // Equatorial
                { x: 0, y: -bondLength * Math.cos(Math.PI / 3), z: -bondLength * Math.sin(Math.PI / 3) } // Equatorial
              ];
            case 6: // Octahedral (90°)
              return [
                { x: bondLength, y: 0, z: 0 },
                { x: -bondLength, y: 0, z: 0 },
                { x: 0, y: bondLength, z: 0 },
                { x: 0, y: -bondLength, z: 0 },
                { x: 0, y: 0, z: bondLength },
                { x: 0, y: 0, z: -bondLength }
              ];
            default:
              // Fallback to circular arrangement
              return Array.from({ length: coordination }, (_, i) => {
                const angle = (i * 2 * Math.PI) / coordination;
                return {
                  x: bondLength * Math.cos(angle),
                  y: bondLength * Math.sin(angle),
                  z: 0
                };
              });
          }
      }
    };
    
    // Calculate average bond length for this molecule
    const avgBondLength = neighbors.reduce((sum, neighborIndex) => {
      const bondKey = [atoms[centralIndex].symbol, atoms[neighborIndex].symbol].sort().join('-');
      return sum + (this.bondLengths[bondKey] || 1.5);
    }, 0) / (neighbors.length || 1) * 50; // Scale for display
    
    // Position neighbors around central atom
    const geometryPositions = getGeometryPositions(coordination, avgBondLength, specificGeometry);
    neighbors.forEach((neighborIndex, i) => {
      positions[neighborIndex] = geometryPositions[i] || { x: avgBondLength, y: 0, z: 0 };
    });
    
    // Position remaining atoms using simple extension
    const visited = new Set([centralIndex, ...neighbors]);
    const queue = [...neighbors];
    
    while (queue.length > 0) {
      const current = queue.shift();
      const currentNeighbors = adjacency[current].filter(n => !visited.has(n));
      
      currentNeighbors.forEach(neighborIndex => {
        visited.add(neighborIndex);
        queue.push(neighborIndex);
        
        const bondKey = [atoms[current].symbol, atoms[neighborIndex].symbol].sort().join('-');
        const bondLength = (this.bondLengths[bondKey] || 1.5) * 50;
        
        // Simple extension: continue in same direction from central atom
        const currentPos = positions[current];
        const centralPos = positions[centralIndex];
        
        const dirX = currentPos.x - centralPos.x;
        const dirY = currentPos.y - centralPos.y;
        const dirZ = currentPos.z - centralPos.z;
        const length = Math.hypot(dirX, dirY, dirZ) || 1;
        
        positions[neighborIndex] = {
          x: currentPos.x + (dirX / length) * bondLength,
          y: currentPos.y + (dirY / length) * bondLength,
          z: currentPos.z + (dirZ / length) * bondLength
        };
      });
    }
    
    return positions;
  }
  
  renderMolecule(moleculeData) {
    const { atoms, bonds } = moleculeData;
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    // Clear canvas
    this.ctx.clearRect(0, 0, width, height);
    
    if (atoms.length === 0) return;
    
    // Calculate 3D positions using VSEPR
    const positions3D = this.calculateVSEPRGeometry(atoms, bonds);
    
    // Project to 2D
    const projected = positions3D.map(pos => this.project3D(pos, width, height));
    
    // Create renderable objects (atoms and bonds)
    const renderables = [];
    
    // Add bonds
    bonds.forEach(([from, to, order]) => {
      const start = projected[from];
      const end = projected[to];
      const avgZ = (start.z + end.z) / 2;
      
      renderables.push({
        type: 'bond',
        start,
        end,
        z: avgZ,
        order
      });
    });
    
    // Add atoms
    atoms.forEach((atom, index) => {
      const projectedPos = projected[index];
      const radius = (this.atomRadii[atom.symbol] || 0.5) * 20 * projectedPos.scale;
      
      renderables.push({
        type: 'atom',
        position: projectedPos,
        z: projectedPos.z,
        radius,
        symbol: atom.symbol,
        color: this.getAtomColor(atom.symbol)
      });
    });
    
    // Sort by Z (depth) for proper rendering
    renderables.sort((a, b) => b.z - a.z);
    
    // Render sorted objects
    renderables.forEach(obj => {
      if (obj.type === 'bond') {
        this.renderBond(obj);
      } else {
        this.renderAtom(obj);
      }
    });
  }
  
  renderBond(bond) {
    const { start, end, order } = bond;
    const ctx = this.ctx;
    
    ctx.strokeStyle = '#82968e';
    ctx.lineWidth = 3 * start.scale;
    ctx.lineCap = 'round';
    
    // Draw multiple lines for bond order
    for (let i = 0; i < order; i++) {
      const offset = (i - (order - 1) / 2) * 4;
      
      // Calculate perpendicular offset
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const length = Math.hypot(dx, dy) || 1;
      const perpX = -dy / length * offset;
      const perpY = dx / length * offset;
      
      ctx.beginPath();
      ctx.moveTo(start.x + perpX, start.y + perpY);
      ctx.lineTo(end.x + perpX, end.y + perpY);
      ctx.stroke();
    }
  }
  
  renderAtom(atom) {
    const { position, radius, symbol, color } = atom;
    const ctx = this.ctx;
    
    // Draw sphere with gradient for 3D effect
    const gradient = ctx.createRadialGradient(
      position.x - radius * 0.3,
      position.y - radius * 0.3,
      radius * 0.1,
      position.x,
      position.y,
      radius
    );
    
    gradient.addColorStop(0, this.lightenColor(color, 40));
    gradient.addColorStop(0.5, color);
    gradient.addColorStop(1, this.darkenColor(color, 30));
    
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw symbol
    ctx.fillStyle = this.getContrastColor(color);
    ctx.font = `bold ${radius * 0.8}px 'Space Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, position.x, position.y);
  }
  
  getAtomColor(symbol) {
    const colors = {
      'H': '#b9e5d4', 'O': '#ef8354', 'C': '#8dc5e8', 'N': '#eeb6c9',
      'Cl': '#e6f3ff', 'Na': '#f5d6a5', 'S': '#d9d4ff', 'Mg': '#c7d8e5',
      'Ca': '#c7d8e5', 'Al': '#c7d8e5', 'F': '#c9e8d3'
    };
    return colors[symbol] || '#8dc5e8';
  }
  
  lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  }
  
  darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  }
  
  getContrastColor(hexcolor) {
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#0a1f2e' : '#ffffff';
  }
  
  render() {
    // This will be called when we need to re-render
    // The actual rendering happens in renderMolecule
  }
}

// Initialize 3D renderer
let molecule3DRenderer = null;

function init3DRenderer() {
  const canvas = document.createElement('canvas');
  canvas.id = 'molecule-3d-canvas';
  canvas.style.cssText = 'width: 100%; height: 100%; border-radius: 25px; background: #fbfcf8;';
  
  const workspace = $('workspace');
  workspace.insertBefore(canvas, workspace.firstChild);
  
  molecule3DRenderer = new Molecule3DRenderer(canvas);
  
  // Resize canvas to match workspace
  function resizeCanvas() {
    canvas.width = workspace.clientWidth;
    canvas.height = workspace.clientHeight;
    if (molecule3DRenderer) {
      molecule3DRenderer.render();
    }
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  return molecule3DRenderer;
}

function render3DMolecule() {
  if (!molecule3DRenderer) {
    molecule3DRenderer = init3DRenderer();
  }
  
  // Make sure canvas is visible
  const canvas = document.getElementById('molecule-3d-canvas');
  if (canvas) {
    canvas.style.display = '';
  }
  
  // Hide 2D layers when showing 3D
  $('bond-layer').style.display = 'none';
  $('atom-layer').style.display = 'none';
  $('empty-state').style.display = 'none';
  
  // Convert current molecule data to 3D format
  const moleculeData = {
    atoms: atoms.map(atom => ({ symbol: atom.symbol })),
    bonds: bonds.map(([from, to, order]) => [from, to, order])
  };
  
  molecule3DRenderer.renderMolecule(moleculeData);
}

function render2DMolecule() {
  // Hide 3D canvas
  const canvas3D = document.getElementById('molecule-3d-canvas');
  if (canvas3D) {
    canvas3D.style.display = 'none';
  }
  
  // Show 2D layers
  $('bond-layer').style.display = '';
  $('atom-layer').style.display = '';
  $('empty-state').style.display = atoms.length ? 'none' : 'flex';
  
  // Render 2D
  render();
}

// Toggle between 2D and 3D views
let is3DView = false;

function toggle3DView() {
  is3DView = !is3DView;
  
  // Update button text
  $('3d-toggle').textContent = `${t('toggle3D')} ${is3DView ? '2D' : '3D'}`;
  
  if (is3DView) {
    render3DMolecule();
  } else {
    render2DMolecule();
  }
}

window.addEventListener('resize', drawBonds); init();
