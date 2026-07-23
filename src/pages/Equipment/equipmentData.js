export const equipmentCategories = [
  {
    id: "all",
    label: "All Equipment",
  },
  {
    id: "weapons",
    label: "Weapons",
  },
  {
    id: "armor",
    label: "Armor",
  },
  {
    id: "curios",
    label: "Curios",
  },
  {
    id: "gourds",
    label: "Gourds",
  },
  {
    id: "drinks",
    label: "Drinks",
  },
  {
    id: "soaks",
    label: "Soaks",
  },
];

export const equipmentRarities = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythical",
];

/*
|--------------------------------------------------------------------------
| Weapon Factory
|--------------------------------------------------------------------------
*/

function createWeapon({
  id,
  number,
  name,
  filename,
  subcategory = "Staff",
  rarity = "Common",
}) {
  return {
    id,
    number,
    name,

    category: "weapons",
    categoryLabel: "Weapons",

    subcategory,
    rarity,

    image: `/images/equipment/weapons/${filename}`,

    description:
      "Weapon information, attributes and unique effects will be added to the encyclopedia.",

    lore: "",

    stats: [],

    effects: [],

    setName: null,
    setBonus: [],

    obtainedFrom: [],

    upgradeable: false,
  };
}

/*
|--------------------------------------------------------------------------
| Weapons
|--------------------------------------------------------------------------
*/

export const weaponData = [
  createWeapon({
    id: "willow-wood-staff",
    number: "001",
    name: "Willow Wood Staff",
    filename: "willow-wood-staff.png",
    rarity: "Common",
  }),

  createWeapon({
    id: "bronze-cloud-staff",
    number: "002",
    name: "Bronze Cloud Staff",
    filename: "bronze-cloud-staff.png",
    rarity: "Uncommon",
  }),

  createWeapon({
    id: "twin-serpents-staff",
    number: "003",
    name: "Twin Serpents Staff",
    filename: "twin-serpents-staff.png",
    rarity: "Uncommon",
  }),

  createWeapon({
    id: "wind-sear-staff",
    number: "004",
    name: "Wind Sear Staff",
    filename: "wind-sear-staff.png",
    rarity: "Rare",
  }),

  createWeapon({
    id: "loongwreathe-staff",
    number: "005",
    name: "Loongwreathe Staff",
    filename: "loongwreathe-staff.png",
    rarity: "Epic",
  }),

  createWeapon({
    id: "rat-sage-staff",
    number: "006",
    name: "Rat Sage Staff",
    filename: "rat-sage-staff.png",
    rarity: "Epic",
  }),

  createWeapon({
    id: "kang-jin-staff",
    number: "007",
    name: "Kang-Jin Staff",
    filename: "kang-jin-staff.png",
    rarity: "Epic",
  }),

  createWeapon({
    id: "visionary-centipede-staff",
    number: "008",
    name: "Visionary Centipede Staff",
    filename: "visionary-centipede-staff.png",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "cloud-patterned-stone-staff",
    number: "009",
    name: "Cloud-Patterned Stone Staff",
    filename: "cloud-patterned-stone-staff.png",
    rarity: "Rare",
  }),

  createWeapon({
    id: "chu-bai-spear",
    number: "010",
    name: "Chu-Bai Spear",
    filename: "chu-bai-spear.png",
    subcategory: "Spear",
    rarity: "Epic",
  }),

  createWeapon({
    id: "spikeshaft-staff",
    number: "011",
    name: "Spikeshaft Staff",
    filename: "spikeshaft-staff.png",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "chitin-staff",
    number: "012",
    name: "Chitin Staff",
    filename: "chitin-staff.png",
    rarity: "Epic",
  }),

  createWeapon({
    id: "golden-loong-staff",
    number: "013",
    name: "Golden Loong Staff",
    filename: "golden-loong-staff.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "spider-celestial-staff",
    number: "014",
    name: "Spider Celestial Staff",
    filename: "spider-celestial-staff.png",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "staff-of-blazing-karma",
    number: "015",
    name: "Staff of Blazing Karma",
    filename: "staff-of-blazing-karma.png",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "bishui-beast-staff",
    number: "016",
    name: "Bishui Beast Staff",
    filename: "bishui-beast-staff.png",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "jingubang",
    number: "017",
    name: "Jingubang",
    filename: "jingubang.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "tri-point-double-edged-spear",
    number: "018",
    name: "Tri-Point Double-Edged Spear",
    filename: "tri-point-double-edged-spear.png",
    subcategory: "Spear",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "adept-spine-shooting-fuban-staff",
    number: "019",
    name: "Adept Spine-Shooting Fuban Staff",
    filename: "adept-spine-shooting-fuban-staff.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "stormflash-loong-staff",
    number: "020",
    name: "Stormflash Loong Staff",
    filename: "stormflash-loong-staff.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "dark-iron-staff",
    number: "021",
    name: "Dark Iron Staff",
    filename: "dark-iron-staff.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "leeching-centipede-staff",
    number: "022",
    name: "Leeching Centipede Staff",
    filename: "leeching-centipede-staff.png",
    rarity: "Mythical",
  }),

  createWeapon({
    id: "qing-mallet",
    number: "023",
    name: "Qing Mallet",
    filename: "qing-mallet.png",
    subcategory: "Mallet",
    rarity: "Legendary",
  }),

  createWeapon({
    id: "fanged-cyan-staff",
    number: "024",
    name: "Fanged Cyan Staff",
    filename: "fanged-cyan-staff.png",
    rarity: "Legendary",
  }),
];

/*
|--------------------------------------------------------------------------
| Curio Factory
|--------------------------------------------------------------------------
*/

function createCurio({
  id,
  number,
  name,
  filename,
  rarity = "Rare",
}) {
  return {
    id,
    number,
    name,

    category: "curios",
    categoryLabel: "Curios",

    subcategory: "Curio",
    rarity,

    image: `/images/equipment/curios/${filename}`,

    description:
      "A mystical curio that grants passive attributes, resistance or special combat enhancements to the Destined One.",

    lore: "",

    stats: [],

    effects: [],

    setName: null,
    setBonus: [],

    obtainedFrom: [],

    upgradeable: false,
  };
}

/*
|--------------------------------------------------------------------------
| Curios
|--------------------------------------------------------------------------
*/

export const curiosData = [
  createCurio({
    id: "wind-chime",
    number: "001",
    name: "Wind Chime",
    filename: "wind-chime.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "cat-eye-beads",
    number: "002",
    name: "Cat-Eye Beads",
    filename: "cat-eye-beads.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "agate-jar",
    number: "003",
    name: "Agate Jar",
    filename: "agate-jar.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "back-scratcher",
    number: "004",
    name: "Back Scratcher",
    filename: "back-scratcher.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "boshan-censer",
    number: "005",
    name: "Boshan Censer",
    filename: "boshan-censer.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "tridacna-pendant",
    number: "006",
    name: "Tridacna Pendant",
    filename: "tridacna-pendant.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "glazed-reliquary",
    number: "007",
    name: "Glazed Reliquary",
    filename: "glazed-reliquary.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "tiger-tally",
    number: "008",
    name: "Tiger Tally",
    filename: "tiger-tally.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "mani-bead",
    number: "009",
    name: "Mani Bead",
    filename: "mani-bead.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "fine-china-tea-bowl",
    number: "010",
    name: "Fine China Tea Bowl",
    filename: "fine-china-tea-bowl.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "frostsprout-twig",
    number: "011",
    name: "Frostsprout Twig",
    filename: "frostsprout-twig.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "auspicious-lantern",
    number: "012",
    name: "Auspicious Lantern",
    filename: "auspicious-lantern.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "thunderstone",
    number: "013",
    name: "Thunderstone",
    filename: "thunderstone.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "snow-fox-brush",
    number: "014",
    name: "Snow Fox Brush",
    filename: "snow-fox-brush.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "beast-buddha",
    number: "015",
    name: "Beast Buddha",
    filename: "beast-buddha.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "bronze-buddha-pendant",
    number: "016",
    name: "Bronze Buddha Pendant",
    filename: "bronze-buddha-pendant.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "thunderflame-seal",
    number: "017",
    name: "Thunderflame Seal",
    filename: "thunderflame-seal.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "cuo-jin-yin-belt-hook",
    number: "018",
    name: "Cuo Jin-Yin Belt Hook",
    filename: "cuo-jin-yin-belt-hook.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "spine-in-the-sack",
    number: "019",
    name: "Spine in the Sack",
    filename: "spine-in-the-sack.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "white-seashell-waist-chain",
    number: "020",
    name: "White Seashell Waist Chain",
    filename: "white-seashell-waist-chain.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "gold-button",
    number: "021",
    name: "Gold Button",
    filename: "gold-button.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "flame-orb",
    number: "022",
    name: "Flame Orb",
    filename: "flame-orb.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "virtuous-bamboo-engraving",
    number: "023",
    name: "Virtuous Bamboo Engraving",
    filename: "virtuous-bamboo-engraving.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "tablet-of-the-three-supreme",
    number: "024",
    name: "Tablet of the Three Supreme",
    filename: "tablet-of-the-three-supreme.png",
    rarity: "Rare",
  }),

  createCurio({
    id: "golden-carp",
    number: "025",
    name: "Golden Carp",
    filename: "golden-carp.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "gold-sun-crow",
    number: "026",
    name: "Gold Sun Crow",
    filename: "gold-sun-crow.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "celestial-registry-tablet",
    number: "027",
    name: "Celestial Registry Tablet",
    filename: "celestial-registry-tablet.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "preservation-orb",
    number: "028",
    name: "Preservation Orb",
    filename: "preservation-orb.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "amber-prayer-beads",
    number: "029",
    name: "Amber Prayer Beads",
    filename: "amber-prayer-beads.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "daoists-basket-of-fire-and-water",
    number: "030",
    name: "Daoist's Basket of Fire and Water",
    filename: "daoist's-basket-of-fire-and-water.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "waterward-orb",
    number: "031",
    name: "Waterward Orb",
    filename: "waterward-orb.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "goldflora-hairpin",
    number: "032",
    name: "Goldflora Hairpin",
    filename: "goldflora-hairpin.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "jade-moon-rabbit",
    number: "033",
    name: "Jade Moon Rabbit",
    filename: "jade-moon-rabbit.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "maitreyas-orb",
    number: "034",
    name: "Maitreya's Orb",
    filename: "maitreya's-orb.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "gold-spikeplate",
    number: "035",
    name: "Gold Spikeplate",
    filename: "gold-spikeplate.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "ever-burning-palace-lantern",
    number: "036",
    name: "Ever-Burning Palace Lantern",
    filename: "ever-burning-palace-lantern.png",
    rarity: "Epic",
  }),

  createCurio({
    id: "celestial-birthstone-fragment",
    number: "037",
    name: "Celestial Birthstone Fragment",
    filename: "celestial-birthstone-fragment.png",
    rarity: "Legendary",
  }),

  createCurio({
    id: "tiger-tendon-belt",
    number: "038",
    name: "Tiger Tendon Belt",
    filename: "tiger-tendon-belt.png",
    rarity: "Legendary",
  }),

  createCurio({
    id: "stone-tiger-tally",
    number: "039",
    name: "Stone Tiger Tally",
    filename: "stone-tiger-tally.png",
    rarity: "Legendary",
  }),

  createCurio({
    id: "fragment-of-the-ocean-settling-pillar",
    number: "040",
    name: "Fragment of the Ocean-Settling Pillar",
    filename: "fragment-of-the-ocean-settling-pillar.png",
    rarity: "Legendary",
  }),
];

/*
|--------------------------------------------------------------------------
| Gourd Factory
|--------------------------------------------------------------------------
*/

function createGourd({
  id,
  number,
  name,
  filename,
  rarity = "Rare",
}) {
  return {
    id,
    number,
    name,

    category: "gourds",
    categoryLabel: "Gourds",

    subcategory: "Gourd",
    rarity,

    image: `/images/equipment/gourds/${filename}`,

    description:
      "A restorative gourd carried by the Destined One, offering healing uses and unique supportive abilities during battle.",

    lore: "",

    stats: [],

    effects: [],

    setName: null,
    setBonus: [],

    obtainedFrom: [],

    upgradeable: false,
  };
}

/*
|--------------------------------------------------------------------------
| Gourds
|--------------------------------------------------------------------------
*/

export const gourdData = [
  createGourd({
    id: "old-gourd",
    number: "001",
    name: "Old Gourd",
    filename: "old-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "medicine-gourd",
    number: "002",
    name: "Medicine Gourd",
    filename: "medicine-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "healing-gourd",
    number: "003",
    name: "Healing Gourd",
    filename: "healing-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "medicine-sage-gourd",
    number: "004",
    name: "Medicine Sage Gourd",
    filename: "medicine-sage-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "medicine-master-gourd",
    number: "005",
    name: "Medicine Master Gourd",
    filename: "medicine-master-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "medicine-buddha-gourd",
    number: "006",
    name: "Medicine Buddha Gourd",
    filename: "medicine-buddha-gourd.png",
    rarity: "Legendary",
  }),

  createGourd({
    id: "supreme-gourd",
    number: "007",
    name: "Supreme Gourd",
    filename: "supreme-gourd.png",
    rarity: "Rare",
  }),

  createGourd({
    id: "jade-lotus-gourd",
    number: "008",
    name: "Jade Lotus Gourd",
    filename: "jade-lotus-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "jade-guanyin-gourd",
    number: "009",
    name: "Jade Guanyin Gourd",
    filename: "jade-guanyin-gourd.png",
    rarity: "Legendary",
  }),

  createGourd({
    id: "trailblazers-scarlet-gourd",
    number: "010",
    name: "Trailblazer's Scarlet Gourd",
    filename: "trailblazer's-scarlet-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "plaguebane-gourd",
    number: "011",
    name: "Plaguebane Gourd",
    filename: "plaguebane-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "fiery-gourd",
    number: "012",
    name: "Fiery Gourd",
    filename: "fiery-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "stained-jade-gourd",
    number: "013",
    name: "Stained Jade Gourd",
    filename: "stained-jade-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "xiang-river-goddess-gourd",
    number: "014",
    name: "Xiang River Goddess Gourd",
    filename: "xiang-river-goddess-gourd.png",
    rarity: "Epic",
  }),

  createGourd({
    id: "immortal-blessing-gourd",
    number: "015",
    name: "Immortal Blessing Gourd",
    filename: "immortal-blessing-gourd.png",
    rarity: "Legendary",
  }),

  createGourd({
    id: "qing-tian-gourd",
    number: "016",
    name: "Qing-Tian Gourd",
    filename: "qing-tian-gourd.png",
    rarity: "Legendary",
  }),

  createGourd({
    id: "multi-glazed-gourd",
    number: "017",
    name: "Multi-Glazed Gourd",
    filename: "multi-glazed-gourd.png",
    rarity: "Legendary",
  }),
];

/*
|--------------------------------------------------------------------------
| Spirit Factory
|--------------------------------------------------------------------------
*/

function createSpirit({
  id,
  number,
  name,
  filename,
  locationId,
  location,
  chapter,
  rarity = "Epic",
}) {
  return {
    id,
    number,
    name,

    category: "spirits",
    categoryLabel: "Spirits",

    subcategory: "Spirit",
    rarity,

    locationId,
    location,
    chapter,

    image:
      `/images/equipment/spirits/${filename}`,

    description:
      `A captured yaoguai spirit discovered in ${location}. Equip this spirit to gain a passive benefit and invoke its unique combat skill.`,

    lore: "",

    stats: [
      {
        label: "Location",
        value: location,
      },
      {
        label: "Chapter",
        value: chapter,
      },
    ],

    effects: [],

    setName: null,
    setBonus: [],

    obtainedFrom: [
      location,
    ],

    upgradeable: true,
  };
}

/*
|--------------------------------------------------------------------------
| Spirits
|--------------------------------------------------------------------------
*/

export const spiritData = [
  /*
  |--------------------------------------------------------------------------
  | Chapter 1 — Black Wind Mountain
  |--------------------------------------------------------------------------
  */

  createSpirit({
    id: "wandering-wight",
    number: "001",
    name: "Wandering Wight",
    filename: "wandering-wight.png",
    locationId: "black-wind-mountain",
    location: "Black Wind Mountain",
    chapter: "Chapter 1",
  }),

  createSpirit({
    id: "baw-li-guhh-lang",
    number: "002",
    name: "Baw-Li-Guhh-Lang",
    filename: "baw-li-guhh-lang.png",
    locationId: "black-wind-mountain",
    location: "Black Wind Mountain",
    chapter: "Chapter 1",
  }),

  createSpirit({
    id: "guangmou",
    number: "003",
    name: "Guangmou",
    filename: "guangmou.png",
    locationId: "black-wind-mountain",
    location: "Black Wind Mountain",
    chapter: "Chapter 1",
  }),

  createSpirit({
    id: "wolf-assassin",
    number: "004",
    name: "Wolf Assassin",
    filename: "wolf-assassin.png",
    locationId: "black-wind-mountain",
    location: "Black Wind Mountain",
    chapter: "Chapter 1",
  }),

  /*
  |--------------------------------------------------------------------------
  | Chapter 2 — Yellow Wind Ridge
  |--------------------------------------------------------------------------
  */

  createSpirit({
    id: "earth-wolf",
    number: "005",
    name: "Earth Wolf",
    filename: "earth-wolf.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "rat-archer",
    number: "006",
    name: "Rat Archer",
    filename: "rat-archer.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "second-rat-prince",
    number: "007",
    name: "Second Rat Prince",
    filename: "second-rat-prince.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "swift-bat",
    number: "008",
    name: "Swift Bat",
    filename: "swift-bat.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "poisestone",
    number: "009",
    name: "Poisestone",
    filename: "poisestone.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "spearbone",
    number: "010",
    name: "Spearbone",
    filename: "spearbone.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "rat-governor",
    number: "011",
    name: "Rat Governor",
    filename: "rat-governor.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "civet-sergeant",
    number: "012",
    name: "Civet Sergeant",
    filename: "civet-sergeant.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "rat-imperial-guard",
    number: "013",
    name: "Rat Imperial Guard",
    filename: "rat-imperial-guard.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "tigers-acolyte",
    number: "014",
    name: "Tiger's Acolyte",
    filename: "tiger's-acolyte.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "gore-eye-daoist",
    number: "015",
    name: "Gore-Eye Daoist",
    filename: "gore-eye-daoist.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  createSpirit({
    id: "mad-tiger",
    number: "016",
    name: "Mad Tiger",
    filename: "mad-tiger.png",
    locationId: "yellow-wind-ridge",
    location: "Yellow Wind Ridge",
    chapter: "Chapter 2",
  }),

  /*
  |--------------------------------------------------------------------------
  | Chapter 3 — The New West
  |--------------------------------------------------------------------------
  */

  createSpirit({
    id: "mountain-patroller",
    number: "017",
    name: "Mountain Patroller",
    filename: "mountain-patroller.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "enslaved-yaksha",
    number: "018",
    name: "Enslaved Yaksha",
    filename: "enslaved-yaksha.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "fungiman",
    number: "019",
    name: "Fungiman",
    filename: "fungiman.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "blade-monk",
    number: "020",
    name: "Blade Monk",
    filename: "blade-monk.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "falcon-hermit",
    number: "021",
    name: "Falcon Hermit",
    filename: "falcon-hermit.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "apramana-bat",
    number: "022",
    name: "Apramana Bat",
    filename: "apramana-bat.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "red-haired-yaksha",
    number: "023",
    name: "Red-Haired Yaksha",
    filename: "red-haired-yaksha.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "non-white",
    number: "024",
    name: "Non-White",
    filename: "non-white.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "crow-diviner",
    number: "025",
    name: "Crow Diviner",
    filename: "crow-diviner.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "old-ginseng-guai",
    number: "026",
    name: "Old Ginseng Guai",
    filename: "old-ginseng-guai.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "non-able",
    number: "027",
    name: "Non-Able",
    filename: "non-able.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "non-void",
    number: "028",
    name: "Non-Void",
    filename: "non-void.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "clay-vajra",
    number: "029",
    name: "Clay Vajra",
    filename: "clay-vajra.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "non-pure",
    number: "030",
    name: "Non-Pure",
    filename: "non-pure.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  createSpirit({
    id: "lantern-holder",
    number: "031",
    name: "Lantern Holder",
    filename: "lantern-holder.png",
    locationId: "the-new-west",
    location: "The New West",
    chapter: "Chapter 3",
  }),

  /*
  |--------------------------------------------------------------------------
  | Chapter 4 — Webbed Hollow
  |--------------------------------------------------------------------------
  */

  createSpirit({
    id: "beetle-captain",
    number: "032",
    name: "Beetle Captain",
    filename: "beetle-captain.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "scorpion-prince",
    number: "033",
    name: "Scorpion Prince",
    filename: "scorpion-prince.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "elder-amourworm",
    number: "034",
    name: "Elder Amourworm",
    filename: "elder-amourworm.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "puppet-spider",
    number: "035",
    name: "Puppet Spider",
    filename: "puppet-spider.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "centipede-guai",
    number: "036",
    name: "Centipede Guai",
    filename: "centipede-guai.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "puppet-tick",
    number: "037",
    name: "Puppet Tick",
    filename: "puppet-tick.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "dragonfly-guai",
    number: "038",
    name: "Dragonfly Guai",
    filename: "dragonfly-guai.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "commander-beetle",
    number: "039",
    name: "Commander Beetle",
    filename: "commander-beetle.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "snake-sheriff",
    number: "040",
    name: "Snake Sheriff",
    filename: "snake-sheriff.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "fungiwoman",
    number: "041",
    name: "Fungiwoman",
    filename: "fungiwoman.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "verdant-glow",
    number: "042",
    name: "Verdant Glow",
    filename: "verdant-glow.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  createSpirit({
    id: "snake-herbalist",
    number: "043",
    name: "Snake Herbalist",
    filename: "snake-herbalist.png",
    locationId: "webbed-hollow",
    location: "Webbed Hollow",
    chapter: "Chapter 4",
  }),

  /*
  |--------------------------------------------------------------------------
  | Chapter 5 — Flaming Mountains
  |--------------------------------------------------------------------------
  */

  createSpirit({
    id: "father-of-stones",
    number: "044",
    name: "Father of Stones",
    filename: "father-of-stones.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "charface",
    number: "045",
    name: "Charface",
    filename: "charface.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "turtle-treasure",
    number: "046",
    name: "Turtle Treasure",
    filename: "turtle-treasure.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "flint-chief",
    number: "047",
    name: "Flint Chief",
    filename: "flint-chief.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "earth-rakshasa",
    number: "048",
    name: "Earth Rakshasa",
    filename: "earth-rakshasa.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "misty-cloud",
    number: "049",
    name: "Misty Cloud",
    filename: "misty-cloud.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "nine-capped-lingzhi-guai",
    number: "050",
    name: "Nine-Capped Lingzhi Guai",
    filename: "nine-capped-lingzhi-guai.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "flint-vanguard",
    number: "051",
    name: "Flint Vanguard",
    filename: "flint-vanguard.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "mother-of-flamlings",
    number: "052",
    name: "Mother of Flamlings",
    filename: "mother-of-flamlings.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "spike-ball",
    number: "053",
    name: "Spike Ball",
    filename: "spike-ball.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "bull-governor",
    number: "054",
    name: "Bull Governor",
    filename: "bull-governor.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),

  createSpirit({
    id: "baw-baw-lang-lang",
    number: "055",
    name: "Baw-Baw-Lang-Lang",
    filename: "baw-baw-lang-lang.png",
    locationId: "flaming-mountains",
    location: "Flaming Mountains",
    chapter: "Chapter 5",
  }),
];

/*
|--------------------------------------------------------------------------
| Armor Factory
|--------------------------------------------------------------------------
*/

function createArmor({
  id,
  number,
  name,
  filename,
  armorType,
  armorTypeLabel,
 rarity = "Common",
}) {
  return {
    id,
    number,
    name,

    category: "armor",
    categoryLabel: "Armor",

    subcategory: armorTypeLabel,
    armorType,
    armorTypeLabel,

    rarity,

    image:
      `/images/equipment/armor/${armorType}/${filename}`,

    description:
      `A piece of ${armorTypeLabel.toLowerCase()} armor worn by the Destined One, offering protection and potential equipment-set bonuses.`,

    lore: "",

    stats: [
      {
        label: "Armor Type",
        value: armorTypeLabel,
      },
    ],

    effects: [],

    setName: null,
    setBonus: [],

    obtainedFrom: [],

    upgradeable: true,
  };
}

/*
|--------------------------------------------------------------------------
| Armor Source Lists
|--------------------------------------------------------------------------
*/

const headgearItems = [
  [
    "old-headgear",
    "Old Headgear",
    "old-headgear.png",
  ],
  [
    "folk-opera-mask",
    "Folk Opera Mask",
    "folk-opera-mask.png",
  ],
  [
    "lion-head-of-opulence",
    "Lion Head of Opulence",
    "lion-head-of-opulence.png",
  ],
  [
    "pilgrims-headband",
    "Pilgrim's Headband",
    "pilgrim's-headband.png",
  ],
  [
    "bronze-monkey-mask",
    "Bronze Monkey Mask",
    "bronze-monkey-mask.png",
  ],
  [
    "monastic-insect-hat",
    "Monastic Insect Hat",
    "monastic-insect-hat.png",
  ],
  [
    "golden-mask-of-fury",
    "Golden Mask of Fury",
    "golden-mask-of-fury.png",
  ],
  [
    "non-pure-broken-mask",
    "Non-Pure Broken Mask",
    "non-pure-broken-mask.png",
  ],
  [
    "centipede-hat-of-transcendence",
    "Centipede Hat of Transcendence",
    "centipede-hat-of-transcendence.png",
  ],
  [
    "iron-horned-helm",
    "Iron Horned Helm",
    "iron-horned-helm.png",
  ],
  [
    "yaksha-mask-of-outrage",
    "Yaksha Mask of Outrage",
    "yaksha-mask-of-outrage.png",
  ],
  [
    "bull-kings-mask",
    "Bull King's Mask",
    "bull-king's-mask.png",
  ],
  [
    "golden-feng-tail-crown-original",
    "Golden Feng-Tail Crown (Original)",
    "golden-feng-tail-crown-(original).png",
  ],
  [
    "golden-feng-tail-crown",
    "Golden Feng-Tail Crown",
    "golden-feng-tail-crown.png",
  ],
  [
    "grey-wolf-mask",
    "Grey Wolf Mask",
    "grey-wolf-mask.png",
  ],
  [
    "snout-mask",
    "Snout Mask",
    "snout-mask.png",
  ],
  [
    "see-no-evil",
    "See No Evil",
    "see-no-evil.png",
  ],
  [
    "locust-antennae-mask",
    "Locust Antennae Mask",
    "locust-antennae-mask.png",
  ],
  [
    "skull-of-turtle-treasure",
    "Skull of Turtle Treasure",
    "skull-of-turtle-treasure.png",
  ],
  [
    "earth-spirit-cap",
    "Earth Spirit Cap",
    "earth-spirit-cap.png",
  ],
  [
    "three-hill-crown",
    "Three-Hill Crown",
    "three-hill-crown.png",
  ],
];

const chestItems = [
  [
    "old-monk-robe",
    "Old Monk Robe",
    "old-monk-robe.png",
  ],
  [
    "tiger-hide-loincloth",
    "Tiger Hide Loincloth",
    "tiger-hide-loincloth.png",
  ],
  [
    "folk-opera-almsgiving-armor",
    "Folk Opera Almsgiving Armor",
    "folk-opera-almsgiving-armor.png",
  ],
  [
    "red-silk-robe-of-opulence",
    "Red Silk Robe of Opulence",
    "red-silk-robe-of-opulence.png",
  ],
  [
    "pilgrims-garb",
    "Pilgrim's Garb",
    "pilgrim's-garb.png",
  ],
  [
    "serpentscale-battlerobe",
    "Serpentscale Battlerobe",
    "serpentscale-battlerobe.png",
  ],
  [
    "bronze-brocade-battlerobe",
    "Bronze Brocade Battlerobe",
    "bronze-brocade-battlerobe.png",
  ],
  [
    "ebongold-silk-robe",
    "Ebongold Silk Robe",
    "ebongold-silk-robe.png",
  ],
  [
    "galeguard-beastmaw-armor",
    "Galeguard Beastmaw Armor",
    "galeguard-beastmaw-armor.png",
  ],
  [
    "ochre-battlerobe",
    "Ochre Battlerobe",
    "ochre-battlerobe.png",
  ],
  [
    "loongscale-battlerobe",
    "Loongscale Battlerobe",
    "loongscale-battlerobe.png",
  ],
  [
    "venomous-sting-insect-armor",
    "Venomous Sting Insect Armor",
    "venomous-sting-insect-armor.png",
  ],
  [
    "golden-embroidered-shirt",
    "Golden Embroidered Shirt",
    "golden-embroidered-shirt.png",
  ],
  [
    "non-pure-armor-of-coiling-loong",
    "Non-Pure Armor of Coiling Loong",
    "non-pure-armor-of-coiling-loong.png",
  ],
  [
    "centipede-qiang-jin-armor",
    "Centipede Qiang-Jin Armor",
    "centipede-qiang-jin-armor.png",
  ],
  [
    "iron-tough-armor",
    "Iron-Tough Armor",
    "iron-tough-armor.png",
  ],
  [
    "embroidered-shirt-of-outrage",
    "Embroidered Shirt of Outrage",
    "embroidered-shirt-of-outrage.png",
  ],
  [
    "bull-kings-shan-wen-armor",
    "Bull King's Shan-Wen Armor",
    "bull-king's-shan-wen-armor.png",
  ],
  [
    "gold-suozi-armor-original",
    "Gold Suozi Armor (Original)",
    "gold-suozi-armor-(original).png",
  ],
  [
    "gold-suozi-armor",
    "Gold Suozi Armor",
    "gold-suozi-armor.png",
  ],
  [
    "ginseng-cape",
    "Ginseng Cape",
    "ginseng-cape.png",
  ],
  [
    "yin-yang-daoist-robe",
    "Yin-Yang Daoist Robe",
    "yin-yang-daoist-robe.png",
  ],
];

const armItems = [
  [
    "old-bracers",
    "Old Bracers",
    "old-bracers.png",
  ],
  [
    "cotton-wristwraps",
    "Cotton Wristwraps",
    "cotton-wristwraps.png",
  ],
  [
    "folk-opera-leather-bracers",
    "Folk Opera Leather Bracers",
    "folk-opera-leather-bracers.png",
  ],
  [
    "armguard-of-opulence",
    "Armguard of Opulence",
    "armguard-of-opulence.png",
  ],
  [
    "pilgrims-wristwraps",
    "Pilgrim's Wristwraps",
    "pilgrim's-wristwraps.png",
  ],
  [
    "serpentscale-bracers",
    "Serpentscale Bracers",
    "serpentscale-bracers.png",
  ],
  [
    "bronze-armguard",
    "Bronze Armguard",
    "bronze-armguard.png",
  ],
  [
    "ebongold-armguard",
    "Ebongold Armguard",
    "ebongold-armguard.png",
  ],
  [
    "galeguard-bracers",
    "Galeguard Bracers",
    "galeguard-bracers.png",
  ],
  [
    "ochre-armguard",
    "Ochre Armguard",
    "ochre-armguard.png",
  ],
  [
    "loongscale-armguard",
    "Loongscale Armguard",
    "loongscale-armguard.png",
  ],
  [
    "insect-spike-bracers",
    "Insect Spike Bracers",
    "insect-spike-bracers.png",
  ],
  [
    "golden-armguard",
    "Golden Armguard",
    "golden-armguard.png",
  ],
  [
    "non-pure-gauntlets",
    "Non-Pure Gauntlets",
    "non-pure-gauntlets.png",
  ],
  [
    "venomous-armguard",
    "Venomous Armguard",
    "venomous-armguard.png",
  ],
  [
    "centipede-spiked-armguard",
    "Centipede Spiked Armguard",
    "centipede-spiked-armguard.png",
  ],
  [
    "iron-tough-gauntlets",
    "Iron-Tough Gauntlets",
    "iron-tough-gauntlets.png",
  ],
  [
    "yaksha-bracers-of-outrage",
    "Yaksha Bracers of Outrage",
    "yaksha-bracers-of-outrage.png",
  ],
  [
    "bull-kings-bracers",
    "Bull King's Bracers",
    "bull-king's-bracers.png",
  ],
  [
    "dian-cui-loong-soaring-bracers-original",
    "Dian-Cui Loong-Soaring Bracers (Original)",
    "dian-cui-loong-soaring-bracers-(original).png",
  ],
  [
    "dian-cui-loong-soaring-bracers",
    "Dian-Cui Loong-Soaring Bracers",
    "dian-cui-loong-soaring-bracers.png",
  ],
  [
    "guanyins-prayer-beads",
    "Guanyin's Prayer Beads",
    "guanyin's-prayer-beads.png",
  ],
  [
    "vajra-armguard",
    "Vajra Armguard",
    "vajra-armguard.png",
  ],
];

const legItems = [
  [
    "old-legwraps",
    "Old Legwraps",
    "old-legwraps.png",
  ],
  [
    "cotton-legwraps",
    "Cotton Legwraps",
    "cotton-legwraps.png",
  ],
  [
    "folk-opera-buskins",
    "Folk Opera Buskins",
    "folk-opera-buskins.png",
  ],
  [
    "buskins-of-opulence",
    "Buskins of Opulence",
    "buskins-of-opulence.png",
  ],
  [
    "pilgrims-legwraps",
    "Pilgrim's Legwraps",
    "pilgrim's-legwraps.png",
  ],
  [
    "serpentscale-gaiters",
    "Serpentscale Gaiters",
    "serpentscale-gaiters.png",
  ],
  [
    "bronze-buskins",
    "Bronze Buskins",
    "bronze-buskins.png",
  ],
  [
    "ebongold-gaiters",
    "Ebongold Gaiters",
    "ebongold-gaiters.png",
  ],
  [
    "galeguard-greaves",
    "Galeguard Greaves",
    "galeguard-greaves.png",
  ],
  [
    "ochre-greaves",
    "Ochre Greaves",
    "ochre-greaves.png",
  ],
  [
    "loongscale-greaves",
    "Loongscale Greaves",
    "loongscale-greaves.png",
  ],
  [
    "insect-spike-gaiters",
    "Insect Spike Gaiters",
    "insect-spike-gaiters.png",
  ],
  [
    "golden-greaves",
    "Golden Greaves",
    "golden-greaves.png",
  ],
  [
    "non-pure-greaves",
    "Non-Pure Greaves",
    "non-pure-greaves.png",
  ],
  [
    "centipede-gaiters-of-transcendence",
    "Centipede Gaiters of Transcendence",
    "centipede-gaiters-of-transcendence.png",
  ],
  [
    "iron-tough-greaves",
    "Iron-Tough Greaves",
    "iron-tough-greaves.png",
  ],
  [
    "yaksha-greaves-of-outrage",
    "Yaksha Greaves of Outrage",
    "yaksha-greaves-of-outrage.png",
  ],
  [
    "bull-kings-greaves",
    "Bull King's Greaves",
    "bull-king's-greaves.png",
  ],
  [
    "lotus-silk-cloudtreaders-original",
    "Lotus Silk Cloudtreaders (Original)",
    "lotus-silk-cloudtreaders-(original).png",
  ],
  [
    "lotus-silk-cloudtreaders",
    "Lotus Silk Cloudtreaders",
    "lotus-silk-cloudtreaders.png",
  ],
];


/*
|--------------------------------------------------------------------------
| Armor Rarity Map
|--------------------------------------------------------------------------
*/

const armorRarityMap = {
  /*
  |--------------------------------------------------------------------------
  | Headgear
  |--------------------------------------------------------------------------
  */

  "old-headgear": "Common",
  "folk-opera-mask": "Rare",
  "lion-head-of-opulence": "Rare",
  "pilgrims-headband": "Uncommon",
  "bronze-monkey-mask": "Rare",
  "monastic-insect-hat": "Epic",
  "golden-mask-of-fury": "Legendary",
  "non-pure-broken-mask": "Legendary",
  "centipede-hat-of-transcendence": "Legendary",
  "iron-horned-helm": "Legendary",
  "yaksha-mask-of-outrage": "Legendary",
  "bull-kings-mask": "Mythical",
  "golden-feng-tail-crown-original": "Mythical",
  "golden-feng-tail-crown": "Mythical",
  "grey-wolf-mask": "Rare",
  "snout-mask": "Rare",
  "see-no-evil": "Epic",
  "locust-antennae-mask": "Epic",
  "skull-of-turtle-treasure": "Legendary",
  "earth-spirit-cap": "Epic",
  "three-hill-crown": "Mythical",

  /*
  |--------------------------------------------------------------------------
  | Chest
  |--------------------------------------------------------------------------
  */

  "old-monk-robe": "Common",
  "tiger-hide-loincloth": "Common",
  "folk-opera-almsgiving-armor": "Rare",
  "red-silk-robe-of-opulence": "Rare",
  "pilgrims-garb": "Uncommon",
  "serpentscale-battlerobe": "Rare",
  "bronze-brocade-battlerobe": "Rare",
  "ebongold-silk-robe": "Rare",
  "galeguard-beastmaw-armor": "Epic",
  "ochre-battlerobe": "Epic",
  "loongscale-battlerobe": "Epic",
  "venomous-sting-insect-armor": "Epic",
  "golden-embroidered-shirt": "Legendary",
  "non-pure-armor-of-coiling-loong": "Legendary",
  "centipede-qiang-jin-armor": "Legendary",
  "iron-tough-armor": "Legendary",
  "embroidered-shirt-of-outrage": "Legendary",
  "bull-kings-shan-wen-armor": "Mythical",
  "gold-suozi-armor-original": "Mythical",
  "gold-suozi-armor": "Mythical",
  "ginseng-cape": "Epic",
  "yin-yang-daoist-robe": "Legendary",

  /*
  |--------------------------------------------------------------------------
  | Arms
  |--------------------------------------------------------------------------
  */

  "old-bracers": "Common",
  "cotton-wristwraps": "Common",
  "folk-opera-leather-bracers": "Rare",
  "armguard-of-opulence": "Rare",
  "pilgrims-wristwraps": "Uncommon",
  "serpentscale-bracers": "Rare",
  "bronze-armguard": "Rare",
  "ebongold-armguard": "Rare",
  "galeguard-bracers": "Epic",
  "ochre-armguard": "Epic",
  "loongscale-armguard": "Epic",
  "insect-spike-bracers": "Epic",
  "golden-armguard": "Legendary",
  "non-pure-gauntlets": "Legendary",
  "venomous-armguard": "Legendary",
  "centipede-spiked-armguard": "Legendary",
  "iron-tough-gauntlets": "Legendary",
  "yaksha-bracers-of-outrage": "Legendary",
  "bull-kings-bracers": "Mythical",
  "dian-cui-loong-soaring-bracers-original": "Mythical",
  "dian-cui-loong-soaring-bracers": "Mythical",
  "guanyins-prayer-beads": "Epic",
  "vajra-armguard": "Epic",

  /*
  |--------------------------------------------------------------------------
  | Legs
  |--------------------------------------------------------------------------
  */

  "old-legwraps": "Common",
  "cotton-legwraps": "Common",
  "folk-opera-buskins": "Rare",
  "buskins-of-opulence": "Rare",
  "pilgrims-legwraps": "Uncommon",
  "serpentscale-gaiters": "Rare",
  "bronze-buskins": "Rare",
  "ebongold-gaiters": "Rare",
  "galeguard-greaves": "Epic",
  "ochre-greaves": "Epic",
  "loongscale-greaves": "Epic",
  "insect-spike-gaiters": "Epic",
  "golden-greaves": "Legendary",
  "non-pure-greaves": "Legendary",
  "centipede-gaiters-of-transcendence": "Legendary",
  "iron-tough-greaves": "Legendary",
  "yaksha-greaves-of-outrage": "Legendary",
  "bull-kings-greaves": "Mythical",
  "lotus-silk-cloudtreaders-original": "Mythical",
  "lotus-silk-cloudtreaders": "Mythical",
};
/*
|--------------------------------------------------------------------------
| Armor Data Generator
|--------------------------------------------------------------------------
*/

function generateArmorItems(
  items,
  armorType,
  armorTypeLabel,
  startingNumber
) {
  return items.map(
    ([id, name, filename], index) =>
      createArmor({
        id,

        number: String(
          startingNumber + index
        ).padStart(3, "0"),

        name,
        filename,
        armorType,
        armorTypeLabel,

        rarity:
          armorRarityMap[id] ||
          "Common",
      })
  );
}
/*
|--------------------------------------------------------------------------
| Complete Armor Data
|--------------------------------------------------------------------------
*/

export const armorData = [
  ...generateArmorItems(
    headgearItems,
    "headgear",
    "Headgear",
    1
  ),

  ...generateArmorItems(
    chestItems,
    "chest",
    "Chest",
    22
  ),

  ...generateArmorItems(
    armItems,
    "arms",
    "Arms",
    44
  ),

  ...generateArmorItems(
    legItems,
    "legs",
    "Legs",
    67
  ),
];
/*
|--------------------------------------------------------------------------
| Complete Equipment Data
|--------------------------------------------------------------------------
*/

export const equipmentData = [
  ...weaponData,
  ...curiosData,
  ...gourdData,
  ...spiritData,
  ...armorData,
];
/*
|--------------------------------------------------------------------------
| Data Helpers
|--------------------------------------------------------------------------
*/

export function getEquipmentById(equipmentId) {
  return equipmentData.find(
    (item) => item.id === equipmentId
  );
}

export function getEquipmentByCategory(category) {
  if (!category || category === "all") {
    return equipmentData;
  }

  return equipmentData.filter(
    (item) => item.category === category
  );
}

export function getEquipmentByRarity(rarity) {
  if (!rarity || rarity === "all") {
    return equipmentData;
  }

  return equipmentData.filter(
    (item) =>
      item.rarity?.toLowerCase() ===
      rarity.toLowerCase()
  );
}

export function getEquipmentBySubcategory(
  subcategory
) {
  if (!subcategory || subcategory === "all") {
    return equipmentData;
  }

  return equipmentData.filter(
    (item) =>
      item.subcategory?.toLowerCase() ===
      subcategory.toLowerCase()
  );
}

export function getEquipmentCount() {
  return equipmentData.length;
}

export function getWeaponCount() {
  return weaponData.length;
}

export function getCuriosCount() {
  return curiosData.length;
}

export function getGourdCount() {
  return gourdData.length;
}
export function getSpiritCount() {
  return spiritData.length;
}
export function getArmorCount() {
  return armorData.length;
}