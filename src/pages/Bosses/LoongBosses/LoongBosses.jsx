import BossGridPage from "../BossGridPage";

const loongBosses = [
  {
    name: "Red Loong",
    location: "Black Wind Mountain",
    image:
      "/images/bosses/loong-bosses/red-loong.png",
  },
  {
    name: "Black Loong",
    location: "Yellow Wind Ridge",
    image:
      "/images/bosses/loong-bosses/black-loong.png",
  },
  {
    name: "Kang-Jin Loong",
    location: "The New West",
    image:
      "/images/bosses/loong-bosses/kang-jin-loong.png",
  },
  {
    name: "Cyan Loong",
    location: "The New West",
    image:
      "/images/bosses/loong-bosses/cyan-loong.png",
  },
  {
    name: "Chen Loong",
    location: "The New West",
    image:
      "/images/bosses/loong-bosses/chen-loong.png",
  },
  {
    name: "Yellow Loong",
    location: "The Webbed Hollow",
    image:
      "/images/bosses/loong-bosses/yellow-loong.png",
  },
  {
    name: "Jiao Loong of Waves",
    location: "Mount Huaguo",
    image:
      "/images/bosses/loong-bosses/jiao-loong-of-waves.png",
  },
];

function LoongBosses() {
  return (
    <BossGridPage
      eyebrow="Draconic legends"
      title="Loong"
      description="Track legendary Loongs scattered across the regions and challenge their elemental power."
      heroImage="/images/bosses/loong-bosses.png"
      bosses={loongBosses}
    />
  );
}

export default LoongBosses;
