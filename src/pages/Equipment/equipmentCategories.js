export const equipmentCategories = [
  {
    id: "relics",
    number: "01",
    title: "Relics",
    subtitle: "Fragments of the Great Sage",

    description:
      "Explore the sacred relics recovered throughout the Destined One's journey and the powerful abilities they awaken.",

    image:
      "/images/equipment/relics-card.png",

    path:
      "/equipment/relics",

    symbol: " 遗迹",
  },

  {
    id: "weapons",
    number: "02",
    title: "Weapons",
    subtitle: "Arms of the Destined One",

    description:
      "Discover staffs, spears, mallets and legendary weapons forged to confront the strongest Yaoguai.",

    image:
      "/images/equipment/weapons-card.png",

    path:
      "/equipment/weapons",

    symbol: "武器",
  },

  {
    id: "armors",
    number: "03",
    title: "Armors",
    subtitle: "Vestments of Protection",

    description:
      "Browse headgear, chest pieces, armguards and legwear that grant defense, resistance and set bonuses.",

    image:
      "/images/equipment/armor-card.png",

    path:
      "/equipment/armors",

    symbol: " 盔甲",
  },

  {
    id: "gourds",
    number: "04",
    title: "Gourds",
    subtitle: "Vessels of Restoration",

    description:
      "Examine healing gourds, their drink capacity and the special abilities that support the Destined One in battle.",

    image:
      "/images/equipment/gourds-card.png",

    path:
      "/equipment/gourds",

    symbol: " 葫芦",
  },

  {
    id: "curios",
    number: "05",
    title: "Curios",
    subtitle: "Treasures of Hidden Power",

    description:
      "Discover mystical curios that provide passive bonuses, elemental resistance and combat enhancements.",

    image:
      "/images/equipment/curios-card.png",

    path:
      "/equipment/curios",

    symbol: " 古玩",
  },

  {
    id: "vessels",
    number: "06",
    title: "Vessels",
    subtitle: "Ancient Sacred Artifacts",

    description:
      "Explore powerful vessels capable of releasing unique abilities against dangerous enemies and chapter bosses.",

    image:
      "/images/equipment/vessels-card.png",

    path:
      "/equipment/vessels",

    symbol: " 血管",
  },

  {
    id: "spirits",
    number: "07",
    title: "Spirits",
    subtitle: "Echoes of Defeated Yaoguai",

    description:
      "Study the spirits absorbed from fallen enemies and the transformations, attributes and passive bonuses they provide.",

    image:
      "/images/equipment/spirits-card.png",

    path:
      "/equipment/spirits",

    symbol: " 精神",
  },
];

export function getEquipmentCategory(categoryId) {
  return equipmentCategories.find(
    (category) => category.id === categoryId
  );
}