# ChemistryGame

See on väikese keemia-puzzle mängu kogumik, mille eesmärk on aidata mängijal õppida põhimolekulide ehitust, valemeid ja sidemeid. Projekt sisaldab nii terminalipõhist C# versiooni kui ka mobiilset graafilist prototüüpi, mis on mõeldud kiireks ja lihtsaks mänguks internetibrauseris.

## Mis selles mängus toimub?

Mängija valib sihtmolekuli, lisab selleks vajalikke aatomeid ja koostab neile õiged keemilised sidemed. Kui valem ja sidemed sobivad, näeb mängija õiget lahendust ja mõne põneva faktiga täiendatud vihjet.

## Projektide ülevaade

- C# versioon: terminalimäng `Program.cs` failis
- Graafiline versioon: `index.html`, `styles.css`, `game.js`
- Molekulikataloog: olemas üksikutes mängufailides, kus on erinevad tasemed ja tegelikud aatomistringid

## Kuidas mängu käivitada

### C# versioon

```powershell
dotnet run
```

### Graafiline veebiversioon

1. ava kaustas olev `index.html` brauseris;
2. või käivita lokaalne server näiteks järgmiselt:

```powershell
python -m http.server 8000
```

3. ava siis veebibrauseris aadress `http://localhost:8000`.

## Mängu reeglid

1. Vali tasemel soovitud molekul.
2. Lisa vajalikud aatomid.
3. Ühenda aatomid järjestikuste klikidega.
4. Vajuta "Kontrolli molekuli".
5. Kui kõik aatomid ja sidemed on õigesti paika pandud, võidad taseme.

## Õppetasemed

Graafiline mäng kasutab `LevelConfig` konfiguratsiooni, kus iga tase avatakse eelmise taseme läbimisel. Tasemed liiguvad kontseptsioonide kaupa:

1. aatomid ja lihtmolekulid;
2. ioonid ja soolad;
3. happed ja alused;
4. polaarsus ja molekulidevahelised jõud;
5. reaktsioonilabor ehk energia ja kineetika;
6. kvanttase ehk orbitaalid ja valentselektronid.

Iga taseme ülesannete edenemine salvestatakse brauseri `localStorage`-isse võtmega `chemistry-game-level-tasks`, mistõttu järgmine tase avaneb alles pärast eelneva kõigi ülesannete lahendamist.

### Ioonide, aluste ja hapete režiimid

- Enne aatomi lisamist vali selle laeng: neutraalne, positiivne või negatiivne.
- Vastasmärgiga ioonide ühendamisel tekib automaatselt sinine ioonne side.
- Kontroll arvestab aatomite laenguid, kogulaeng peab olema null ja sihtühendi laengud peavad sobima.
- Jaotises "Ehita sool" saab harjutada NaCl, MgCl₂, AlF₃ ja CaO tasakaalustamist.
- Jaotises "Ehita alus" saab harjutada NaOH ja Ca(OH)₂ ehitamist.
- Jaotises "Ehita hape" saab harjutada HCl, H₂S ja HNO₃ ehitamist.

## Praegused molekulid

Mängus on välja pakutud järgmised näited:

- vesi (H₂O)
- süsinikdioksiid (CO₂)
- metaan (CH₄)
- ammoniaak (NH₃)
- vesinik (H₂)
- hapnik (O₂)
- vesinikkloriidhape (HCl)
- vesinikperoksiid (H₂O₂)

Graafilises veebiversioonis on nüüd kõik 118 elementi. Elementide all kuvatakse eraldi
õppevaade, kus saab otsida sümboli, nime või aatomnumbri järgi ning vaadata iga elemendi
representatiivset reaktsiooni või selgitust, kui tavatingimustes levinud reaktsiooni ei ole.

## Sisestusvorm C# versioonis

Terminali versioonis tuleb sisestada:

1. aatomid ükshaaval;
2. sidemed kujul `esimene-aatom teine-aatom sideme-järk`;
3. väärtuslikud näited:
   - vesi: `1 2 1` ja `1 3 1`;
   - süsinikdioksiid: `1 2 2` ja `1 3 2`.

Tühi rida lõpetab aatomite või sidemete lisamise.

## Miks see projekt on kasulik?

Projekt sobib hästi:

- keemia põhimõistete õppimiseks;
- C# ja JavaScripti harjutamiseks;
- lihtsa mängu prototüübi arendamiseks;
- uusi tasemeid ja molekule lisades omandatud oskuste suurendamiseks.

## Tulevased täiustused

Mängu saab veel laiemaks teha:

- rohkem molekule ja tasemeid;
- punktisüsteem ja rekordihoid;
- õpetavad vihjed ja raskusastmed;
- animatsioonid ja puuteefektid;
- täiustatud arvutused sidemete ja valemite kontrollimiseks.

## Litsents

See projekt on mõeldud õpetuslikuks ja prototüüpsuseks ning saab vabalt edasi arendada.
