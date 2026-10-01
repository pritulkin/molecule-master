using System.Text;

Console.OutputEncoding = Encoding.UTF8;
var catalog = MoleculeCatalog.Create();

Console.WriteLine("CHEMISTRY PUZZLE");
Console.WriteLine("Build familiar molecules from atoms.\n");

while (true)
{
	Console.WriteLine("Choose a target molecule:");
	for (var index = 0; index < catalog.Count; index++)
	{
		var molecule = catalog[index];
		Console.WriteLine($"{index + 1}. {molecule.Name} ({molecule.Formula}) - difficulty {molecule.Difficulty}");
	}

	Console.WriteLine("0. Exit");
	Console.Write("Choice: ");
	var choice = Console.ReadLine();

	if (choice == "0")
		break;

	if (!int.TryParse(choice, out var moleculeNumber) || moleculeNumber < 1 || moleculeNumber > catalog.Count)
	{
		Console.WriteLine("Please enter a number from the menu.\n");
		continue;
	}

	PlayRound(catalog[moleculeNumber - 1]);
}

Console.WriteLine("Goodbye!");

static void PlayRound(Molecule target)
{
	Console.Clear();
	Console.WriteLine($"Build a molecule: {target.Name}");
	Console.WriteLine($"Hint: {target.Hint}");
	Console.WriteLine("Available atoms: H, C, O, N, Na, Cl, S");
	Console.WriteLine("Add atoms one at a time. Submit an empty line when you are done.\n");

	var atoms = new List<string>();
	while (true)
	{
		Console.Write($"Atom {atoms.Count + 1}: ");
		var symbol = Console.ReadLine()?.Trim();
		if (string.IsNullOrWhiteSpace(symbol))
			break;

		var normalizedSymbol = symbol switch
		{
			"h" => "H",
			"c" => "C",
			"o" => "O",
			"n" => "N",
			"na" => "Na",
			"cl" => "Cl",
			"s" => "S",
			_ => symbol
		};

		if (!Elements.Symbols.Contains(normalizedSymbol))
		{
			Console.WriteLine("That atom is not available in this prototype.");
			continue;
		}

		atoms.Add(normalizedSymbol);
	}

	var bonds = new List<Bond>();
	Console.WriteLine("\nAdd bonds as: first atom number, second atom number, bond order.");
	Console.WriteLine("Water example: 1 2 1 and 1 3 1. Submit an empty line when you are done.\n");
	Console.WriteLine($"Your atoms: {string.Join(", ", atoms.Select((atom, index) => $"{index + 1}:{atom}"))}");

	while (true)
	{
		Console.Write("Side: ");
		var input = Console.ReadLine();
		if (string.IsNullOrWhiteSpace(input))
			break;

		var parts = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
		if (parts.Length != 3 ||
			!int.TryParse(parts[0], out var first) ||
			!int.TryParse(parts[1], out var second) ||
			!int.TryParse(parts[2], out var order) ||
			first < 1 || second < 1 || first > atoms.Count || second > atoms.Count ||
			first == second || order < 1 || order > 3)
		{
			Console.WriteLine("Invalid bond. Use a format such as: 1 2 1");
			continue;
		}

		bonds.Add(new Bond(first - 1, second - 1, order));
	}

	var playerMolecule = new Molecule("player", "Your molecule", "", 0, atoms, bonds, "", "");
	Console.WriteLine();
	if (MoleculeMatcher.IsMatch(playerMolecule, target))
	{
		Console.WriteLine($"Correct! You built {target.Name} ({target.Formula}).");
		Console.WriteLine(target.Fact);
	}
	else
	{
		Console.WriteLine("Not quite. Check the number of atoms and the bond types.");
		Console.WriteLine($"Expected formula: {target.Formula}");
	}

	Console.WriteLine("\nPress Enter to return to the menu.");
	Console.ReadLine();
}

static class MoleculeMatcher
{
	public static bool IsMatch(Molecule player, Molecule target)
	{
		var playerAtoms = player.Atoms.GroupBy(atom => atom).ToDictionary(group => group.Key, group => group.Count());
		var targetAtoms = target.Atoms.GroupBy(atom => atom).ToDictionary(group => group.Key, group => group.Count());

		if (!playerAtoms.OrderBy(pair => pair.Key).SequenceEqual(targetAtoms.OrderBy(pair => pair.Key)))
			return false;

		var playerBonds = player.Bonds
			.Select(bond => BondSignature(player.Atoms, bond))
			.OrderBy(signature => signature);
		var targetBonds = target.Bonds
			.Select(bond => BondSignature(target.Atoms, bond))
			.OrderBy(signature => signature);

		return playerBonds.SequenceEqual(targetBonds);
	}

	private static string BondSignature(IReadOnlyList<string> atoms, Bond bond)
	{
		var first = atoms[bond.FirstAtom];
		var second = atoms[bond.SecondAtom];
		var atomsInBond = string.CompareOrdinal(first, second) < 0 ? $"{first}-{second}" : $"{second}-{first}";
		return $"{atomsInBond}-{bond.Order}";
	}
}

static class MoleculeCatalog
{
	public static List<Molecule> Create() =>
	[
		new("water", "Water", "H2O", 1,
			["O", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1)],
			"It is found in drinking water.",
			"The chemical formula for water is H2O."),
		new("carbon-dioxide", "Carbon dioxide", "CO2", 2,
			["C", "O", "O"],
			[new(0, 1, 2), new(0, 2, 2)],
			"It is released when we exhale.",
			"Carbon dioxide is a reactant in photosynthesis."),
		new("methane", "Methane", "CH4", 2,
			["C", "H", "H", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1), new(0, 4, 1)],
			"It is the main component of natural gas.",
			"Methane is the simplest alkane."),
		new("ammonia", "Ammonia", "NH3", 2,
			["N", "H", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1)],
			"It has a sharp, characteristic smell.",
			"Ammonia is used in the production of fertilizers."),
		new("hydrogen", "Hydrogen", "H2", 1,
			["H", "H"],
			[new(0, 1, 1)],
			"It is the simplest and most abundant element in the universe.",
			"Hydrogen is a very light gas and an important energy source."),
		new("oxygen", "Oxygen", "O2", 1,
			["O", "O"],
			[new(0, 1, 2)],
			"It is one of the most important gases for life.",
			"Oxygen is essential for breathing and metabolism."),
		new("hydrogen-chloride", "Hydrogen chloride", "HCl", 1,
			["H", "Cl"],
			[new(0, 1, 1)],
			"Hydrogen chloride dissolves in water to form hydrochloric acid.",
			"Hydrochloric acid is a strong acid in aqueous solution."),
		new("sodium-chloride", "Sodium chloride", "NaCl", 1,
			["Na", "Cl"],
			[new(0, 1, 1)],
			"It is commonly known as table salt.",
			"NaCl is an ionic compound with a crystalline structure."),
		new("hydrogen-peroxide", "Hydrogen peroxide", "H2O2", 3,
			["H", "O", "O", "H"],
			[new(0, 1, 1), new(1, 2, 1), new(2, 3, 1)],
			"It is used for disinfection and bleaching.",
			"Hydrogen peroxide decomposes when exposed to light."),
		new("carbon-monoxide", "Carbon monoxide", "CO", 2,
			["C", "O"],
			[new(0, 1, 3)],
			"This gas is poisonous and colorless.",
			"CO forms during incomplete combustion and has a triple bond."),
		new("sulfur-dioxide", "Sulfur dioxide", "SO2", 3,
			["S", "O", "O"],
			[new(0, 1, 2), new(0, 2, 2)],
			"It is produced by combustion and in industrial processes.",
			"Sulfur dioxide contributes to air pollution and acid rain."),
		new("carbon-tetrachloride", "Carbon tetrachloride", "CCl4", 3,
			["C", "Cl", "Cl", "Cl", "Cl"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1), new(0, 4, 1)],
			"This compound is relatively heavy and has low reactivity.",
			"CCl4 is a halogenated compound with a tetrahedral structure."),
		new("ozone", "Ozone", "O3", 3,
			["O", "O", "O"],
			[new(0, 1, 1), new(1, 2, 2)],
			"Ozone protects Earth from ultraviolet radiation.",
			"Ozone is a pollutant in the troposphere but plays an important role in the stratosphere."),
		new("sodium-hydroxide", "Sodium hydroxide", "NaOH", 2,
			["Na", "O", "H"],
			[new(0, 1, 1), new(1, 2, 1)],
			"It is used in soapmaking and cleaning products.",
			"NaOH is a strong base and dissolves readily in water.")
	];
}

static class Elements
{
	public static readonly HashSet<string> Symbols = ["H", "C", "O", "N", "Na", "Cl", "S"];
}

record Molecule(
	string Id,
	string Name,
	string Formula,
	int Difficulty,
	IReadOnlyList<string> Atoms,
	IReadOnlyList<Bond> Bonds,
	string Hint,
	string Fact);

record Bond(int FirstAtom, int SecondAtom, int Order);
