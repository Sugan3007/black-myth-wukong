const IMAGE_BASE = "/images/items/medicines";

const medicineGroups = [
  {
    id: "alleviating",
    label: "Alleviating Medicine",
    shortLabel: "Alleviating",
    symbol: "解",
    description: "Powders, pellets and medicaments prepared to relieve harmful conditions and steady the body during dangerous encounters.",
    items: [
      ["antimiasma-powder", "Antimiasma Powder"],
      ["body-cooling-powder", "Body-Cooling Powder"],
      ["body-warming-powder", "Body-Warming Powder"],
      ["ginseng-pellets", "Ginseng Pellets"],
      ["shock-quelling-powder", "Shock-Quelling Powder"],
      ["tiger-subduing-pellets", "Tiger-Subduing Pellets"],
      ["fortifying-medicament", "Fortifying Medicament"],
      ["evil-repelling-medicament", "Evil-Repelling Medicament"],
    ],
  },
  {
    id: "fortifying",
    label: "Fortifying Medicine",
    shortLabel: "Fortifying",
    symbol: "壮",
    description: "Potent medicines used to reinforce combat ability, heighten resilience and prepare the Destined One for demanding battles.",
    items: [
      ["amplification-pellets", "Amplification Pellets"],
      ["enhanced-tiger-subduing-pellets", "Enhanced Tiger-Subduing Pellets"],
      ["body-fleeting-powder", "Body-Fleeting Powder"],
      ["glimmering-scale-pellets", "Glimmering Scale Pellets"],
      ["loong-aura-amplification-pellets", "Loong Aura Amplification Pellets"],
      ["enhanced-ginseng-pellets", "Enhanced Ginseng Pellets"],
      ["ascension-powder", "Ascension Powder"],
    ],
  },
  {
    id: "enhancing",
    label: "Enhancing Medicine",
    shortLabel: "Enhancing",
    symbol: "益",
    description: "Rare decoctions designed to strengthen the foundations of the body and provide lasting improvements to vital capability.",
    items: [
      ["longevity-decoction", "Longevity Decoction"],
      ["tonifying-decoction", "Tonifying Decoction"],
      ["essence-decoction", "Essence Decoction"],
    ],
  },
  {
    id: "reassuring",
    label: "Reassuring Medicine",
    shortLabel: "Reassuring",
    symbol: "安",
    description: "Exceptional pills reserved for grave moments, capable of restoring confidence and turning the course of a desperate encounter.",
    items: [
      ["mirage-pill", "Mirage Pill"],
      ["life-saving-pill", "Life-Saving Pill"],
      ["septenary-heartfire-pill", "Septenary Heartfire Pill"],
      ["soul-remigration-pill", "Soul Remigration Pill"],
    ],
  },
  {
    id: "celestial",
    label: "Celestial Medicine",
    shortLabel: "Celestial",
    symbol: "仙",
    description: "Divine medicines of extraordinary rarity, refined through celestial methods and treasured for their profound permanent effects.",
    items: [
      ["celestial-jade-lotus-pill", "Celestial Jade Lotus Pill"],
      ["celestial-nonary-pill", "Celestial Nonary Pill"],
      ["celestial-taiyi-pill", "Celestial Taiyi Pill"],
      ["five-skandhas-pill", "Five Skandhas Pill"],
    ],
  },
  {
    id: "lesser-celestial",
    label: "Lesser Celestial Medicine",
    shortLabel: "Lesser Celestial",
    symbol: "灵",
    description: "Precious lesser celestial pills and decoctions that permanently cultivate selected aspects of the Destined One's strength.",
    items: [
      ["jade-lotus-pill", "Jade Lotus Pill"],
      ["taiyi-pill", "Taiyi Pill"],
      ["nonary-pill", "Nonary Pill"],
      ["no-mind-medicament", "No-Mind Medicament"],
      ["iron-bull-pill", "Iron Bull Pill"],
      ["yang-supplementing-pill", "Yang-Supplementing Pill"],
      ["water-jade-pill", "Water Jade Pill"],
      ["bloom-seed-decoction", "Bloom Seed Decoction"],
      ["wujin-pill", "Wujin Pill"],
    ],
  },
  {
    id: "formulas",
    label: "Formulas",
    shortLabel: "Formulas",
    symbol: "方",
    description: "Alchemy recipes that preserve the knowledge required to craft medicines after the necessary ingredients have been gathered.",
    items: [
      ["evil-repelling-medicament-formula", "Evil-Repelling Medicament Formula"],
      ["longevity-decoction-formula", "Longevity Decoction Formula"],
      ["tonifying-decoction-formula", "Tonifying Decoction Formula"],
      ["fortifying-medicament-formula", "Fortifying Medicament Formula"],
      ["enhanced-tiger-subduing-pellets-formula", "Enhanced Tiger-Subduing Pellets Formula"],
      ["body-fleeting-powder-formula", "Body-Fleeting Powder Formula"],
      ["essence-decoction-formula", "Essence Decoction Formula"],
      ["mirage-pill-formula", "Mirage Pill Formula"],
      ["life-saving-pill-formula", "Life-Saving Pill Formula"],
      ["loong-aura-amplification-pellets-formula", "Loong Aura Amplification Pellets Formula"],
      ["septenary-heartfire-pill-formula", "Septenary Heartfire Pill Formula"],
      ["ascension-powder-formula", "Ascension Powder Formula"],
      ["soul-remigration-pill-formula", "Soul Remigration Pill Formula"],
      ["glimmering-scale-pellets-formula", "Glimmering Scale Pellets Formula"],
    ],
  },
];

export const medicineTypes = [
  { id: "all", label: "All Medicines", shortLabel: "All Medicines" },
  ...medicineGroups.map(({ id, label, shortLabel }) => ({ id, label, shortLabel })),
];

export const medicinesData = medicineGroups.flatMap((group) =>
  group.items.map(([slug, name], index) => ({
    id: `${group.id}-${slug}`,
    slug,
    name,
    type: group.id,
    typeLabel: group.label,
    typeShortLabel: group.shortLabel,
    symbol: group.symbol,
    image: `${IMAGE_BASE}/${slug}.png`,
    number: index + 1,
    description: `${name} belongs to the ${group.label.toLowerCase()} collection. ${group.description}`,
  }))
);

export const medicineStats = medicineGroups.map((group) => ({
  id: group.id,
  label: group.label,
  count: group.items.length,
}));

export default medicinesData;
