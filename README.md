# Chemistry Game

An educational chemistry puzzle game for learning about molecular structures, formulas, and bonds. The project includes a C# console version and a browser-based graphical game.

## Gameplay

Choose a target molecule, add its atoms, and connect them with the correct chemical bonds. When the formula and bonds match, the game confirms the solution and provides a hint with an additional fact.

## Project overview

- C# console game: `Program.cs`
- Browser game: `index.html`, `styles.css`, and `game.js`
- Molecule data and learning levels are defined in the game source files.

## Run the game

### C# version

```powershell
dotnet run
```

### Browser version

1. Open `index.html` in a browser, or start a local server:

```powershell
python -m http.server 8000
```

2. Open `http://localhost:8000` in your browser.

## How to play

1. Choose a molecule from the current level.
2. Add the required atoms.
3. Click two atoms in sequence to connect them.
4. Select **Check molecule**.
5. Complete the level by matching all atoms and bonds.

## Learning levels

The browser game uses a `LevelConfig` configuration. Each level unlocks after completing all tasks in the previous level. Topics progress through atoms and simple molecules, ions and compounds, molecular shape and intermolecular forces, coordination compounds, radioactive elements, molar mass, and equation balancing.

Level progress is saved in the browser's `localStorage` under `chemistry-game-level-tasks`.

### Ions, bases, and acids

- Choose an atom's charge before adding it: neutral, positive, or negative.
- Ions with opposite charges connect automatically with an ionic bond.
- Validation checks atom charges, requires a total charge of zero, and compares the charges with the target compound.
- The **Build a salt** mode includes NaCl, MgCl₂, AlF₃, and CaO.
- The **Build a base** mode includes NaOH and Ca(OH)₂.
- The **Build an acid** mode includes HCl, H₂S, and HNO₃.

## Molecules and elements

Examples include water (H₂O), carbon dioxide (CO₂), methane (CH₄), ammonia (NH₃), hydrogen (H₂), oxygen (O₂), hydrogen chloride (HCl), and hydrogen peroxide (H₂O₂).

The browser game includes all 118 elements. Search by symbol, name, or atomic number to view a representative reaction or an explanation when no common reaction occurs under standard conditions.

## C# console input

Enter atoms one at a time, then enter bonds in the format `first-atom second-atom bond-order`.

- Water: `1 2 1` and `1 3 1`
- Carbon dioxide: `1 2 2` and `1 3 2`

Submit an empty line to finish entering atoms or bonds.

## Learning references

- [IUPAC Gold Book](https://goldbook.iupac.org/)
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/)
- [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/)

This project is an educational prototype, not a laboratory procedure or a substitute for authoritative chemical data.
