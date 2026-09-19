using System.Text;

Console.OutputEncoding = Encoding.UTF8;
var catalog = MoleculeCatalog.Create();

Console.WriteLine("KEEMIA PUZZLE");
Console.WriteLine("Koosta aatomitest tuntud molekule.\n");

while (true)
{
	Console.WriteLine("Vali sihtmolekul:");
	for (var index = 0; index < catalog.Count; index++)
	{
		var molecule = catalog[index];
		Console.WriteLine($"{index + 1}. {molecule.Name} ({molecule.Formula}) - raskus {molecule.Difficulty}");
	}

	Console.WriteLine("0. Välju");
	Console.Write("Valik: ");
	var choice = Console.ReadLine();

	if (choice == "0")
		break;

	if (!int.TryParse(choice, out var moleculeNumber) || moleculeNumber < 1 || moleculeNumber > catalog.Count)
	{
		Console.WriteLine("Palun sisesta menüüs olev number.\n");
		continue;
	}

	PlayRound(catalog[moleculeNumber - 1]);
}

Console.WriteLine("Nägemist!");

static void PlayRound(Molecule target)
{
	Console.Clear();
	Console.WriteLine($"Koosta molekul: {target.Name}");
	Console.WriteLine($"Vihje: {target.Hint}");
	Console.WriteLine("Lubatud aatomid: H, C, O, N, Na, Cl, S");
	Console.WriteLine("Lisa aatomeid ükshaaval. Tühi sisend lõpetab aatomite lisamise.\n");

	var atoms = new List<string>();
	while (true)
	{
		Console.Write($"Aatom {atoms.Count + 1}: ");
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
			Console.WriteLine("Seda aatomit selles prototüübis ei ole.");
			continue;
		}

		atoms.Add(normalizedSymbol);
	}

	var bonds = new List<Bond>();
	Console.WriteLine("\nLisa sidemed kujul: esimese aatomi number, teise aatomi number, sideme järk.");
	Console.WriteLine("Näide vee jaoks: 1 2 1 ja 1 3 1. Tühi sisend lõpetab.\n");
	Console.WriteLine($"Sinu aatomid: {string.Join(", ", atoms.Select((atom, index) => $"{index + 1}:{atom}"))}");

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
			Console.WriteLine("Vigane side. Kasuta näiteks: 1 2 1");
			continue;
		}

		bonds.Add(new Bond(first - 1, second - 1, order));
	}

	var playerMolecule = new Molecule("player", "Sinu molekul", "", 0, atoms, bonds, "", "");
	Console.WriteLine();
	if (MoleculeMatcher.IsMatch(playerMolecule, target))
	{
		Console.WriteLine($"Õige! Moodustasid {target.Name} ({target.Formula}).");
		Console.WriteLine(target.Fact);
	}
	else
	{
		Console.WriteLine("Veel mitte. Kontrolli aatomite arvu ja sidemete tüüpe.");
		Console.WriteLine($"Oodatud valem: {target.Formula}");
	}

	Console.WriteLine("\nVajuta Enter, et menüüsse tagasi minna.");
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
		new("water", "Vesi", "H2O", 1,
			["O", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1)],
			"Seda leidub joogivees.",
			"Vee keemiline valem on H2O."),
		new("carbon-dioxide", "Süsinikdioksiid", "CO2", 2,
			["C", "O", "O"],
			[new(0, 1, 2), new(0, 2, 2)],
			"Seda eraldub väljahingamisel.",
			"Süsinikdioksiid on taimede fotosünteesi lähteaine."),
		new("methane", "Metaan", "CH4", 2,
			["C", "H", "H", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1), new(0, 4, 1)],
			"See on maagaasi peamine koostisosa.",
			"Metaan on kõige lihtsam alkaan."),
		new("ammonia", "Ammoniaak", "NH3", 2,
			["N", "H", "H", "H"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1)],
			"Sellel on terav iseloomulik lõhn.",
			"Ammoniaaki kasutatakse muu hulgas väetiste tootmisel."),
		new("hydrogen", "Vesinik", "H2", 1,
			["H", "H"],
			[new(0, 1, 1)],
			"See on lihtsaim ja kõige levinum element universumis.",
			"Vesinik on väga kerge gaas ja oluline energiaallikas."),
		new("oxygen", "Hapnik", "O2", 1,
			["O", "O"],
			[new(0, 1, 2)],
			"See on elu jaoks üks olulisemaid gaase.",
			"Hapnik on vajalik hingamiseks ja metaboolses protsessis."),
		new("hydrogen-chloride", "Vesinikkloriidhape", "HCl", 1,
			["H", "Cl"],
			[new(0, 1, 1)],
			"See aine tekib hapniku ja vesiniku vahelisel sidemel.",
			"HCl on tugev hape, mis lahustub vees soolhappeks."),
		new("sodium-chloride", "Naatriumkloriid", "NaCl", 1,
			["Na", "Cl"],
			[new(0, 1, 1)],
			"Seda tuntakse lauasoola nime all.",
			"NaCl on ioniline ühend, millel on kristalliline struktuur."),
		new("hydrogen-peroxide", "Vesinikperoksiid", "H2O2", 3,
			["H", "O", "O", "H"],
			[new(0, 1, 1), new(1, 2, 1), new(2, 3, 1)],
			"Seda kasutatakse desinfitseerimiseks ja pleegitamiseks.",
			"Vesinikperoksiid laguneb valges valguse toimel."),
		new("carbon-monoxide", "Süsinikmonooksiid", "CO", 2,
			["C", "O"],
			[new(0, 1, 3)],
			"See gaas on mürgine ja värvitu.",
			"CO tekib mittetäieliku põlemise käigus ja sidemete järk on kolm."),
		new("sulfur-dioxide", "Sulfadioksiid", "SO2", 3,
			["S", "O", "O"],
			[new(0, 1, 2), new(0, 2, 2)],
			"Seda tekib põlemisproduktina ja tööstusprotsessides.",
			"Süsinik iseloomustab hästi õhusaaste ja happevihma tekke."),
		new("carbon-tetrachloride", "Süsiniktetrakloriid", "CCl4", 3,
			["C", "Cl", "Cl", "Cl", "Cl"],
			[new(0, 1, 1), new(0, 2, 1), new(0, 3, 1), new(0, 4, 1)],
			"See ühend on küllaltki raske ja teatavasti madala reaktiivsusega.",
			"CCl4 on näiteks halogeenitud alkaan, mille struktuur on tetraeedriline."),
		new("ozone", "Osoon", "O3", 3,
			["O", "O", "O"],
			[new(0, 1, 1), new(1, 2, 2)],
			"Osoon kaitseb Maad UV-kiirguse eest.",
			"Osoon on troposfääris reostaja, aga stratosfääris väga oluline."),
		new("sodium-hydroxide", "Naatriumhüdroksiid", "NaOH", 2,
			["Na", "O", "H"],
			[new(0, 1, 1), new(1, 2, 1)],
			"Seda kasutatakse seebitootmises ja puhastuses.",
			"NaOH on tugev alus ja võib hästi lahustuda vees.")
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
