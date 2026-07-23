/*
|--------------------------------------------------------------------------
| Black Myth: Wukong — Location Archive
|--------------------------------------------------------------------------
|
| Structure:
|
| Region
|   └── Places
|         └── Shrines
|
| Shrine arrays are currently empty because shrine names will be added
| separately when the final shrine list is available.
|
*/

const locations = [
  /*
  |--------------------------------------------------------------------------
  | CHAPTER 1 — BLACK WIND MOUNTAIN
  |--------------------------------------------------------------------------
  */

  {
    id: "black-wind-mountain",
    number: "01",
    name: "Black Wind Mountain",
    title: "The Mountain of Smoke and Shadow",
    chapter: "Chapter 1",
    chapterNumber: 1,

    symbol: "黑",

    image:
      "/images/locations/black-wind-mountain/black-wind-mountain.png",

    heroImage:
      "/images/locations/black-wind-mountain/black-wind-mountain-hero.png",

    mapImage:
      "/images/locations/black-wind-mountain/black-wind-mountain-map.png",

    description:
      "A dark mountain region filled with ancient temples, bamboo forests, wolf Yaoguai and the influence of the Black Bear Guai.",

    summary:
      "The Destined One begins the journey through the forests, temples and caves of Black Wind Mountain.",

    theme: "Forest, temples and mountain caves",

places: [
  {
    id: "forest-of-wolves",
    number: "01",
    name: "Forest of Wolves",

    image:
      "/images/locations/black-wind-mountain/forest-of-wolves.png",

    description:
      "A dense woodland occupied by wolf Yaoguai and dangerous creatures guarding the mountain paths.",

    shrines: [
      {
        id: "front-hills",
        number: "01",
        name: "Front Hills",
      },
      {
        id: "outside-the-forest",
        number: "02",
        name: "Outside the Forest",
      },
      {
        id: "loong-claw-grove",
        number: "03",
        name: "Loong Claw Grove",
      },
      {
        id: "guanyin-temple",
        number: "04",
        name: "Guanyin Temple",
      },
    ],
  },

  {
    id: "bamboo-grove",
    number: "02",
    name: "Bamboo Grove",

    image:
      "/images/locations/black-wind-mountain/bamboo-grove.png",

    description:
      "A mist-covered bamboo forest containing winding trails, marshland and hidden enemies.",

    shrines: [
      {
        id: "back-hills",
        number: "01",
        name: "Back Hills",
      },
      {
        id: "snake-trail",
        number: "02",
        name: "Snake Trail",
      },
      {
        id: "marsh-of-white-mist",
        number: "03",
        name: "Marsh of White Mist",
      },
    ],
  },

  {
    id: "black-wind-cave",
    number: "03",
    name: "Black Wind Cave",

    image:
      "/images/locations/black-wind-mountain/black-wind-cave.png",

    description:
      "The cavernous stronghold of the Black Wind King, concealed deep within the mountain.",

    shrines: [
      {
        id: "cave-interior",
        number: "01",
        name: "Cave Interior",
      },
      {
        id: "outside-the-cave",
        number: "02",
        name: "Outside the Cave",
      },
      {
        id: "bodhi-peak",
        number: "03",
        name: "Bodhi Peak",
      },
      {
        id: "trivia",
        number: "04",
        name: "Trivia",
      },
    ],
  },

  {
    id: "ancient-guanyin-temple",
    number: "04",
    name: "Ancient Guanyin Temple",

    image:
      "/images/locations/black-wind-mountain/ancient-guanyin-temple.png",

    description:
      "A secret ancient temple connected to the tragic history of Elder Jinchi and the coveted kasaya.",

    shrines: [
      {
        id: "grand-chamber",
        number: "01",
        name: "Grand Chamber",
      },
    ],
  },
],
  },

  /*
  |--------------------------------------------------------------------------
  | CHAPTER 2 — YELLOW WIND RIDGE
  |--------------------------------------------------------------------------
  */

  {
    id: "yellow-wind-ridge",
    number: "02",
    name: "Yellow Wind Ridge",
    title: "The Kingdom Beneath the Sand",
    chapter: "Chapter 2",
    chapterNumber: 2,

    symbol: "黃",

    image:
      "/images/locations/yellow-wind-ridge/yellow-wind-ridge.png",

    heroImage:
      "/images/locations/yellow-wind-ridge/yellow-wind-ridge-hero.png",

    mapImage:
      "/images/locations/yellow-wind-ridge/yellow-wind-ridge-map.png",

    description:
      "A vast desert region consumed by violent winds, ruined settlements, stone creatures and the power of the Yellow Wind Sage.",

    summary:
      "The Destined One travels through abandoned villages, temples, cliffs and an ancient desert kingdom.",

    theme: "Desert ruins, sandstorms and ancient kingdoms",

places: [
  {
    id: "sandgate-village",
    number: "01",
    name: "Sandgate Village",

    image:
      "/images/locations/yellow-wind-ridge/sandgate-village.png",

    description:
      "A ruined desert settlement occupied by rat Yaoguai and remnants of the Kingdom of Flowing Sands.",

    shrines: [
      {
        id: "village-entrance",
        number: "01",
        name: "Village Entrance",
      },
      {
        id: "valley-of-despair",
        number: "02",
        name: "Valley of Despair",
      },
    ],
  },

  {
    id: "crouching-tiger-temple",
    number: "02",
    name: "Crouching Tiger Temple",

    image:
      "/images/locations/yellow-wind-ridge/crouching-tiger-temple.png",

    description:
      "An imposing temple controlled by powerful tiger warriors and guarded by the Tiger Vanguard.",

    shrines: [
      {
        id: "temple-entrance",
        number: "01",
        name: "Temple Entrance",
      },
      {
        id: "cella",
        number: "02",
        name: "Cella",
      },
      {
        id: "trivia",
        number: "03",
        name: "Trivia",
      },
    ],
  },

  {
    id: "fright-cliff",
    number: "03",
    name: "Fright Cliff",

    image:
      "/images/locations/yellow-wind-ridge/fright-cliff.png",

    description:
      "A rocky region filled with stone Yaoguai, narrow pathways and hidden caverns.",

    shrines: [
      {
        id: "squall-hideout",
        number: "01",
        name: "Squall Hideout",
      },
      {
        id: "rockrest-flat",
        number: "02",
        name: "Rockrest Flat",
      },
      {
        id: "hidden-loong-cavern",
        number: "03",
        name: "Hidden Loong Cavern",
      },
      {
        id: "rock-clash-platform",
        number: "04",
        name: "Rock Clash Platform",
      },
    ],
  },

  {
    id: "yellow-wind-formation",
    number: "04",
    name: "Yellow Wind Formation",

    image:
      "/images/locations/yellow-wind-ridge/yellow-wind-formation.png",

    description:
      "A windswept battlefield surrounded by violent sandstorms and the influence of the Yellow Wind Sage.",

    shrines: [
      {
        id: "windrest-bridge",
        number: "01",
        name: "Windrest Bridge",
      },
      {
        id: "windrest-hamlet",
        number: "02",
        name: "Windrest Hamlet",
      },
      {
        id: "windseal-gate",
        number: "03",
        name: "Windseal Gate",
      },
    ],
  },

  {
    id: "kingdom-of-sahali",
    number: "05",
    name: "Kingdom of Sahali",

    image:
      "/images/locations/yellow-wind-ridge/kingdom-of-sahali.png",

    description:
      "A hidden ancient kingdom preserved through memory and connected to the history of the Yellow Wind Sage.",

    shrines: [
      {
        id: "sandgate-pass",
        number: "01",
        name: "Sandgate Pass",
      },
      {
        id: "sandgate-bound",
        number: "02",
        name: "Sandgate Bound",
      },
    ],
  },
],
  },

  /*
  |--------------------------------------------------------------------------
  | CHAPTER 3 — THE NEW WEST
  |--------------------------------------------------------------------------
  */

  {
    id: "the-new-west",
    number: "03",
    name: "The New West",
    title: "The Frozen Domain of False Enlightenment",
    chapter: "Chapter 3",
    chapterNumber: 3,

    symbol: "西",

    image:
      "/images/locations/the-new-west/the-new-west.png",

    heroImage:
      "/images/locations/the-new-west/the-new-west-hero.png",

    mapImage:
      "/images/locations/the-new-west/the-new-west-map.png",

    description:
      "A vast frozen region containing snow-covered mountains, prisons, temples, forests and the domain of Yellowbrow.",

    summary:
      "The Destined One crosses frozen paths and corrupted sacred grounds while confronting false teachings.",

    theme: "Snowfields, prisons, temples and frozen lakes",

places: [
  {
    id: "snowhill-path",
    number: "01",
    name: "Snowhill Path",

    image:
      "/images/locations/the-new-west/snowhill-path.png",

    description:
      "A frozen mountain route covered in deep snow, icy cliffs and dangerous Yaoguai.",

    shrines: [
      {
        id: "frost-clad-path",
        number: "01",
        name: "Frost-Clad Path",
      },
      {
        id: "mirrormere",
        number: "02",
        name: "Mirrormere",
      },
    ],
  },

  {
    id: "pagoda-realm",
    number: "02",
    name: "Pagoda Realm",

    image:
      "/images/locations/the-new-west/pagoda-realm.png",

    description:
      "A vast prison-like pagoda filled with cursed prisoners, rotating structures and powerful wardens.",

    shrines: [
      {
        id: "lower-pagoda",
        number: "01",
        name: "Lower Pagoda",
      },
      {
        id: "upper-pagoda",
        number: "02",
        name: "Upper Pagoda",
      },
      {
        id: "mani-wheel",
        number: "03",
        name: "Mani Wheel",
      },
      {
        id: "outside-the-wheel",
        number: "04",
        name: "Outside the Wheel",
      },
      {
        id: "snow-veiled-trail",
        number: "05",
        name: "Snow-Veiled Trail",
      },
      {
        id: "warding-temple",
        number: "06",
        name: "Warding Temple",
      },
      {
        id: "the-great-pagoda",
        number: "07",
        name: "The Great Pagoda",
      },
    ],
  },

  {
    id: "bitter-lake",
    number: "03",
    name: "Bitter Lake",

    image:
      "/images/locations/the-new-west/bitter-lake.png",

    description:
      "A frozen lake region containing isolated shores, Turtle Island and hidden paths beneath the snow.",

    shrines: [
      {
        id: "south-shore-of-the-bitter-lake",
        number: "01",
        name: "South Shore of the Bitter Lake",
      },
      {
        id: "turtle-island",
        number: "02",
        name: "Turtle Island",
      },
      {
        id: "north-shore-of-the-bitter-lake",
        number: "03",
        name: "North Shore of the Bitter Lake",
      },
      {
        id: "precept-corridor",
        number: "04",
        name: "Precept Corridor",
      },
    ],
  },

  {
    id: "valley-of-ecstasy",
    number: "04",
    name: "Valley of Ecstasy",

    image:
      "/images/locations/the-new-west/valley-of-ecstasy.png",

    description:
      "A deceptive frozen valley filled with spiritual trials, abandoned settlements and hidden routes.",

    shrines: [
      {
        id: "mindfulness-cliff",
        number: "01",
        name: "Mindfulness Cliff",
      },
      {
        id: "forest-of-felicity",
        number: "02",
        name: "Forest of Felicity",
      },
      {
        id: "melon-field",
        number: "03",
        name: "Melon Field",
      },
      {
        id: "brook-of-bliss",
        number: "04",
        name: "Brook of Bliss",
      },
      {
        id: "towers-of-karma",
        number: "05",
        name: "Towers of Karma",
      },
      {
        id: "longevity-road",
        number: "06",
        name: "Longevity Road",
      },
    ],
  },

  {
    id: "new-thunderclap-temple",
    number: "05",
    name: "New Thunderclap Temple",

    image:
      "/images/locations/the-new-west/new-thunderclap-temple.png",

    description:
      "A grand but corrupted Buddhist temple ruled by Yellowbrow and filled with deceptive disciples.",

    shrines: [
      {
        id: "temple-entrance-new-thunderclap",
        number: "01",
        name: "Temple Entrance",
      },
      {
        id: "mahavira-hall",
        number: "02",
        name: "Mahavira Hall",
      },
      {
        id: "floating-sculpture-lower-level",
        number: "03",
        name: "Floating Sculpture Lower Level",
      },
      {
        id: "trivia-new-thunderclap-temple",
        number: "04",
        name: "Trivia",
      },
    ],
  },

  {
    id: "mount-mei",
    number: "06",
    name: "Mount Mei",

    image:
      "/images/locations/the-new-west/mount-mei.png",

    description:
      "A hidden sacred mountain reached through the Great Pagoda and connected to Erlang's secret domain.",

    shrines: [
      {
        id: "mei-jian-peak",
        number: "01",
        name: "Mei-Jian Peak",
      },
    ],
  },
],
  },

  /*
  |--------------------------------------------------------------------------
  | CHAPTER 4 — THE WEBBED HOLLOW
  |--------------------------------------------------------------------------
  */

  {
    id: "the-webbed-hollow",
    number: "04",
    name: "The Webbed Hollow",
    title: "The Caverns of Silk and Venom",
    chapter: "Chapter 4",
    chapterNumber: 4,

    symbol: "蛛",

    image:
      "/images/locations/the-webbed-hollow/the-webbed-hollow.png",

    heroImage:
      "/images/locations/the-webbed-hollow/the-webbed-hollow-hero.png",

    mapImage:
      "/images/locations/the-webbed-hollow/the-webbed-hollow-map.png",

    description:
      "A vast underground realm inhabited by spider spirits, insect Yaoguai and Daoist practitioners.",

    summary:
      "The Destined One descends into web-covered caverns before reaching the Temple of Yellow Flowers.",

    theme: "Webbed caverns, villages and Daoist temples",

places: [
  {
    id: "village-of-lanxi",
    number: "01",
    name: "Village of Lanxi",

    image:
      "/images/locations/the-webbed-hollow/village-of-lanxi.png",

    description:
      "A peaceful-looking village hiding the influence of the Spider Yaoguai and the entrance to the Webbed Hollow.",

    shrines: [
      {
        id: "estate-of-the-zhu",
        number: "01",
        name: "Estate of the Zhu",
      },
    ],
  },

  {
    id: "webbed-hollow",
    number: "02",
    name: "Webbed Hollow",

    image:
      "/images/locations/the-webbed-hollow/webbed-hollow.png",

    description:
      "A vast underground labyrinth woven with spider silk, ancient caverns and forgotten sanctuaries beneath the mountain.",

    shrines: [
      {
        id: "upper-hollow",
        number: "01",
        name: "Upper Hollow",
      },
      {
        id: "pool-of-shattered-jade",
        number: "02",
        name: "Pool of Shattered Jade",
      },
      {
        id: "the-verdure-bridge",
        number: "03",
        name: "The Verdure Bridge",
      },
      {
        id: "middle-hollow",
        number: "04",
        name: "Middle Hollow",
      },
      {
        id: "bonevault",
        number: "05",
        name: "Bonevault",
      },
      {
        id: "cliff-of-oblivion",
        number: "06",
        name: "Cliff of Oblivion",
      },
      {
        id: "relief-of-the-fallen-loong",
        number: "07",
        name: "Relief of the Fallen Loong",
      },
      {
        id: "lower-hollow",
        number: "08",
        name: "Lower Hollow",
      },
      {
        id: "hut-of-immortality",
        number: "09",
        name: "Hut of Immortality",
      },
      {
        id: "the-purifying-spring",
        number: "10",
        name: "The Purifying Spring",
      },
      {
        id: "the-gathering-cave",
        number: "11",
        name: "The Gathering Cave",
      },
    ],
  },

  {
    id: "temple-of-yellow-flowers",
    number: "03",
    name: "Temple of Yellow Flowers",

    image:
      "/images/locations/the-webbed-hollow/temple-of-yellow-flowers.png",

    description:
      "An ancient temple overrun by poisonous creatures and devoted to mysterious rituals deep within the mountain.",

    shrines: [
      {
        id: "mountain-trail",
        number: "01",
        name: "Mountain Trail",
      },
      {
        id: "forest-of-ferocity",
        number: "02",
        name: "Forest of Ferocity",
      },
      {
        id: "temple-entrance-yellow-flowers",
        number: "03",
        name: "Temple Entrance",
      },
      {
        id: "court-of-illumination",
        number: "04",
        name: "Court of Illumination",
      },
    ],
  },

  {
    id: "purple-cloud-mountain",
    number: "04",
    name: "Purple Cloud Mountain",

    image:
      "/images/locations/the-webbed-hollow/purple-cloud-mountain.png",

    description:
      "A hidden secret realm blooming with mystical flowers and leading to the final confrontation with the Venom Daoist.",

    shrines: [
      {
        id: "valley-of-blooms",
        number: "01",
        name: "Valley of Blooms",
      },
      {
        id: "bounds-of-deitys-abode",
        number: "02",
        name: "Bounds of Deity's Abode",
      },
      {
        id: "petalfall-hamlet",
        number: "03",
        name: "Petalfall Hamlet",
      },
      {
        id: "cloudnest-peak",
        number: "04",
        name: "Cloudnest Peak",
      },
    ],
  },
],
  },

  /*
  |--------------------------------------------------------------------------
  | CHAPTER 5 — FLAMING MOUNTAINS
  |--------------------------------------------------------------------------
  */

  {
    id: "flaming-mountains",
    number: "05",
    name: "Flaming Mountains",
    title: "The Land Consumed by Fire",
    chapter: "Chapter 5",
    chapterNumber: 5,

    symbol: "火",

    image:
      "/images/locations/flaming-mountains/flaming-mountains.png",

    heroImage:
      "/images/locations/flaming-mountains/flaming-mountains-hero.png",

    mapImage:
      "/images/locations/flaming-mountains/flaming-mountains-map.png",

    description:
      "A burning volcanic region ruled by the Bull King's family and filled with fire, lava and powerful Yaoguai forces.",

    summary:
      "The Destined One crosses burning forests and volcanic valleys while confronting Red Boy and the Yaksha King.",

    theme: "Fire, volcanic valleys and burning battlefields",

places: [
  {
    id: "woods-of-ember",
    number: "01",
    name: "Woods of Ember",

    image:
      "/images/locations/flaming-mountains/woods-of-ember.png",

    description:
      "A scorched forest consumed by endless flames, burning pathways and powerful Yaoguai guarding the approach to Furnace Valley.",

    shrines: [
      {
        id: "ashen-pass-i",
        number: "01",
        name: "Ashen Pass I",
      },
      {
        id: "camp-of-seasons",
        number: "02",
        name: "Camp of Seasons",
      },
      {
        id: "height-of-ember",
        number: "03",
        name: "Height of Ember",
      },
      {
        id: "ashen-pass-ii",
        number: "04",
        name: "Ashen Pass II",
      },
    ],
  },

  {
    id: "furnace-valley",
    number: "02",
    name: "Furnace Valley",

    image:
      "/images/locations/flaming-mountains/furnace-valley.png",

    description:
      "A volcanic basin dominated by molten rivers, towering furnaces and the Rakshasa Palace.",

    shrines: [
      {
        id: "valley-entrance",
        number: "01",
        name: "Valley Entrance",
      },
      {
        id: "rakshasa-palace",
        number: "02",
        name: "Rakshasa Palace",
      },
      {
        id: "the-emerald-hall",
        number: "03",
        name: "The Emerald Hall",
      },
    ],
  },

  {
    id: "field-of-fire",
    number: "03",
    name: "Field of Fire",

    image:
      "/images/locations/flaming-mountains/field-of-fire.png",

    description:
      "A blazing battlefield filled with lava flows, collapsed furnaces and relentless waves of fire.",

    shrines: [
      {
        id: "ashen-pass-iii",
        number: "01",
        name: "Ashen Pass III",
      },
      {
        id: "cooling-slope",
        number: "02",
        name: "Cooling Slope",
      },
      {
        id: "fallen-furnace-crater",
        number: "03",
        name: "Fallen Furnace Crater",
      },
    ],
  },

  {
    id: "bishui-cave",
    number: "04",
    name: "Bishui Cave",

    image:
      "/images/locations/flaming-mountains/bishui-cave.png",

    description:
      "A hidden cavern where fire and ice coexist, leading to the final battle against the Bishui Beast.",

    shrines: [
      {
        id: "purge-pit",
        number: "01",
        name: "Purge Pit",
      },
      {
        id: "cave-depths",
        number: "02",
        name: "Cave Depths",
      },
      {
        id: "corridor-of-fire-and-ice",
        number: "03",
        name: "Corridor of Fire and Ice",
      },
    ],
  },
],
  },

  /*
  |--------------------------------------------------------------------------
  | CHAPTER 6 — MOUNT HUAGUO
  |--------------------------------------------------------------------------
  */

  {
    id: "mount-huaguo",
    number: "06",
    name: "Mount Huaguo",
    title: "The Birthplace of the Great Sage",
    chapter: "Chapter 6",
    chapterNumber: 6,

    symbol: "聖",

    image:
      "/images/locations/mount-huaguo/mount-huaguo.png",

    heroImage:
      "/images/locations/mount-huaguo/mount-huaguo-hero.png",

    mapImage:
      "/images/locations/mount-huaguo/mount-huaguo-map.png",

    description:
      "The legendary homeland of Sun Wukong, containing great cliffs, waterfalls and the memories of the Great Sage.",

    summary:
      "The final stage of the journey takes the Destined One through Sun Wukong's homeland and toward his ultimate inheritance.",

    theme: "Sacred mountains, waterfalls and the Great Sage's legacy",

   places: [
  {
    id: "foothills",
    number: "01",
    name: "Foothills",

    image:
      "/images/locations/mount-huaguo/foothills.png",

    description:
      "The lush lower slopes of Mount Huaguo where ancient forests, powerful Yaoguai and legendary beasts guard the path toward the mountain's summit.",

    shrines: [
      {
        id: "verdant-path",
        number: "01",
        name: "Verdant Path",
      },
      {
        id: "rhino-watch-slope",
        number: "02",
        name: "Rhino Watch Slope",
      },
      {
        id: "mantis-catching-swamp",
        number: "03",
        name: "Mantis-Catching Swamp",
      },
      {
        id: "deer-sight-forest",
        number: "04",
        name: "Deer Sight Forest",
      },
    ],
  },

  {
    id: "water-curtain-cave",
    number: "02",
    name: "Water Curtain Cave",

    image:
      "/images/locations/mount-huaguo/water-curtain-cave.png",

    description:
      "The legendary cave hidden behind the great waterfall, serving as the birthplace and sanctuary of the Monkey King.",

    shrines: [
      {
        id: "return-path",
        number: "01",
        name: "Return Path",
      },
      {
        id: "peak-of-innocence",
        number: "02",
        name: "Peak of Innocence",
      },
    ],
  },

  {
    id: "birthstone",
    number: "03",
    name: "Birthstone",

    image:
      "/images/locations/mount-huaguo/birthstone.png",

    description:
      "The sacred Birthstone where destiny reaches its conclusion and the final confrontation of the journey unfolds.",

    shrines: [
      {
        id: "heart-of-birthstone",
        number: "01",
        name: "Heart of Birthstone",
      },
    ],
  },
],
  },
];

/*
|--------------------------------------------------------------------------
| Location Filter Options
|--------------------------------------------------------------------------
*/

export const locationChapters = [
  "All Chapters",
  "Chapter 1",
  "Chapter 2",
  "Chapter 3",
  "Chapter 4",
  "Chapter 5",
  "Chapter 6",
];

/*
|--------------------------------------------------------------------------
| Helper Functions
|--------------------------------------------------------------------------
*/

export function getLocationById(locationId) {
  return (
    locations.find(
      (location) =>
        location.id === locationId
    ) || null
  );
}

export function getPlaceById(
  locationId,
  placeId
) {
  const location =
    getLocationById(locationId);

  if (!location) {
    return null;
  }

  return (
    location.places.find(
      (place) => place.id === placeId
    ) || null
  );
}

export function getAllPlaces() {
  return locations.flatMap((location) =>
    location.places.map((place) => ({
      ...place,

      locationId: location.id,
      locationName: location.name,
      chapter: location.chapter,
    }))
  );
}

export function getTotalPlaceCount() {
  return locations.reduce(
    (total, location) =>
      total + location.places.length,
    0
  );
}

export function getTotalShrineCount() {
  return locations.reduce(
    (locationTotal, location) =>
      locationTotal +
      location.places.reduce(
        (placeTotal, place) =>
          placeTotal +
          place.shrines.length,
        0
      ),
    0
  );
}

export default locations;