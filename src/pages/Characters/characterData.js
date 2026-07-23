const characters = [
  {
    id: "destined-one",
    number: "01",
    name: "The Destined One",
    title: "Bearer of the Great Sage's Legacy",
    category: "Major Characters",

    image: "/images/characters/destined-one.jpg",
    heroImage: "/images/characters/destined-one.jpg",

    symbol: "命",

    allegiance: "Mount Huaguo",

    location: "Across the Six Chapters",

    quote:
      "A nameless warrior destined to complete the unfinished journey.",

    summary:
      "The Destined One is the protagonist of Black Myth: Wukong. Chosen to recover the six relics of Sun Wukong, he travels across China battling Yaoguai Kings, Celestial Warriors and forgotten legends.",

    biography: [
      "The Destined One begins his pilgrimage from Mount Huaguo.",
      "He inherits the powers, relics and legacy left behind by Sun Wukong.",
      "Every major boss defeated reveals another fragment of the Great Sage's memories.",
    ],

    abilities: [
      "Staff Combat",
      "72 Transformations",
      "Cloud Step",
      "Immobilize",
      "Spirit Skills",
      "Spell Casting",
    ],

    relations: [
      "Sun Wukong",
      "Zhu Bajie",
    ],
  },

  {
    id: "sun-wukong",
    number: "02",
    name: "Sun Wukong",
    title: "The Great Sage Equal to Heaven",

    category: "Major Characters",

    image: "/images/characters/sun-wukong.jpg",
    heroImage: "/images/characters/sun-wukong.jpg",

    symbol: "悟",

    allegiance: "Mount Huaguo",

    location: "Legend of the Great Sage",

    quote:
      "The legend never dies.",

    summary:
      "Sun Wukong is the legendary Monkey King whose memories and relics drive the entire story.",

    biography: [
      "Born from a magical stone.",
      "Defied Heaven.",
      "Journeyed to the West.",
      "Became the Victorious Fighting Buddha.",
    ],

    abilities: [
      "Ruyi Jingu Bang",
      "Cloud Somersault",
      "72 Transformations",
      "Immortality",
      "Clone Technique",
      "Divine Strength",
    ],

    relations: [
      "The Destined One",
      "Zhu Bajie",
      "Erlang Shen",
    ],
  },

  {
    id: "zhu-bajie",
    number: "03",
    name: "Zhu Bajie",
    title: "Marshal Tianpeng",

    category: "Allies",

    image: "/images/characters/zhu-bajie.jpg",
    heroImage: "/images/characters/zhu-bajie.jpg",

    symbol: "戒",

    allegiance: "Journey to the West",

    location: "Webbed Hollow",

    quote:
      "Sometimes laughter hides the deepest scars.",

    summary:
      "Former companion of Sun Wukong and one of the Destined One's closest allies.",

    biography: [
      "Once a Heavenly Marshal.",
      "Banished from Heaven.",
      "Joined the Journey to the West.",
    ],

    abilities: [
      "Nine-Toothed Rake",
      "Great Strength",
      "Transformation",
      "Heavy Combat",
    ],

    relations: [
      "Sun Wukong",
      "The Destined One",
    ],
  },

  {
    id: "erlang-shen",
    number: "04",
    name: "Erlang Shen",
    title: "The Illustrious Sage",

    category: "Celestial Beings",

    image: "/images/characters/erlang-shen.jpg",
    heroImage: "/images/characters/erlang-shen.jpg",

    symbol: "神",

    allegiance: "Heaven",

    location: "Celestial Court",

    quote:
      "Only the strongest deserve freedom.",

    summary:
      "Erlang Shen is Heaven's greatest warrior and Sun Wukong's eternal rival.",

    biography: [
      "Commander of Heaven.",
      "Owner of the Third Eye.",
      "Defeated Sun Wukong in the past.",
    ],

    abilities: [
      "Third Eye",
      "Divine Spear",
      "Celestial Magic",
      "Shape Shifting",
      "Immense Strength",
    ],

    relations: [
      "Sun Wukong",
      "The Destined One",
    ],
  },

  {
    id: "black-bear-guai",
    number: "05",
    name: "Black Bear Guai",
    title: "Lord of Black Wind Mountain",

    category: "Yaoguai Kings",

    image: "/images/characters/black-bear-guai.jpg",
    heroImage: "/images/characters/black-bear-guai.jpg",

    symbol: "熊",

    allegiance: "Black Wind Mountain",

    location: "Chapter 1",

    quote:
      "Power belongs to those who seize it.",

    summary:
      "The first Yaoguai King encountered during the Destined One's journey.",

    biography: [
      "Guardian of Black Wind Mountain.",
      "One of the earliest powerful Yaoguai.",
    ],

    abilities: [
      "Bear Form",
      "Fire Magic",
      "Heavy Strength",
      "Shockwave",
    ],

    relations: [
      "The Destined One",
    ],
  },

  {
    id: "yellow-wind-sage",
    number: "06",
    name: "Yellow Wind Sage",
    title: "Master of the Desert",

    category: "Yaoguai Kings",

    image: "/images/characters/yellow-wind-sage.jpg",
    heroImage: "/images/characters/yellow-wind-sage.jpg",

    symbol: "風",

    allegiance: "Yellow Wind Ridge",

    location: "Chapter 2",

    quote:
      "Even the strongest warrior cannot escape the storm.",

    summary:
      "Master of sandstorms and ruler of Yellow Wind Ridge.",

    biography: [
      "Controls devastating wind magic.",
      "One of the strongest Yaoguai Kings.",
    ],

    abilities: [
      "Sandstorm",
      "Wind Magic",
      "Teleportation",
      "Spear Combat",
    ],

    relations: [
      "The Destined One",
    ],
  },

  {
    id: "yellowbrow",
    number: "07",
    name: "Yellowbrow",
    title: "False Buddha",

    category: "Yaoguai Kings",

    image: "/images/characters/yellowbrow.jpg",
    heroImage: "/images/characters/yellowbrow.jpg",

    symbol: "佛",

    allegiance: "New Thunderclap Temple",

    location: "Chapter 3",

    quote:
      "Faith is easily manipulated.",

    summary:
      "Yellowbrow disguises himself as Buddha and deceives countless followers.",

    biography: [
      "Ancient demon.",
      "Created his own false religion.",
      "Rules New Thunderclap Temple.",
    ],

    abilities: [
      "Golden Form",
      "Lightning",
      "Illusions",
      "Divine Magic",
    ],

    relations: [
      "The Destined One",
    ],
  },

  {
    id: "bull-king",
    number: "08",
    name: "Bull King",
    title: "Great King of the Flaming Mountains",

    category: "Major Characters",

    image: "/images/characters/bull-king.jpg",
    heroImage: "/images/characters/bull-king.jpg",

    symbol: "牛",

    allegiance: "Flaming Mountains",

    location: "Chapter 5",

    quote:
      "A king protects his family before his pride.",

    summary:
      "The mighty Bull King stands among the strongest beings connected to Sun Wukong's past.",

    biography: [
      "Former ally of Sun Wukong.",
      "Ruler of the Flaming Mountains.",
      "Father of Red Boy.",
    ],

    abilities: [
      "Massive Strength",
      "Fire Control",
      "Great Axe",
      "Earth Shattering Attacks",
    ],

    relations: [
      "Sun Wukong",
      "Princess Iron Fan",
      "Red Boy",
    ],
  },
];

export const characterCategories = [
  "All",
  "Major Characters",
  "Allies",
  "Celestial Beings",
  "Yaoguai Kings",
];

export default characters;