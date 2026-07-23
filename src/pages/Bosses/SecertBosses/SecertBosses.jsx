import BossGridPage from "../BossGridPage";

const secertBosses = [
  {
    name: "Elder Jinchi",
    image:
      "/images/bosses/secert-bosses/elder-jinchi.png",
  },
  {
    name: "Shigandang",
    image:
      "/images/bosses/secert-bosses/shigandang.png",
  },
  {
    name: "Captain Lotus-Vision",
    image:
      "/images/bosses/secert-bosses/captain-lotus-vision.png",
  },
  {
    name: "Yin Tiger",
    image:
      "/images/bosses/secert-bosses/yin-tiger.png",
  },
  {
    name: "Non-Void",
    image:
      "/images/bosses/secert-bosses/non-void.png",
  },
  {
    name: "Supreme Inspector",
    image:
      "/images/bosses/secert-bosses/supreme-inspector.png",
  },
  {
    name: "The Scorpionlord",
    image:
      "/images/bosses/secert-bosses/the-scorpionlord.png",
  },
  {
    name: "Daoist Mi",
    image:
      "/images/bosses/secert-bosses/daoist-mi.png",
  },
  {
    name: "The Duskveil",
    image:
      "/images/bosses/secert-bosses/the-duskveil.png",
  },
  {
    name: "Mother of Flamlings",
    image:
      "/images/bosses/secert-bosses/mother-of-flamlings.png",
  },
  {
    name: "Baw-Lang-Lang",
    image:
      "/images/bosses/secert-bosses/baw-lang-lang.png",
  },
  {
    name: "Top Takes Bottom",
    image:
      "/images/bosses/secert-bosses/top-takes-bottom.png",
  },
  {
    name: "Bottom Takes Top",
    image:
      "/images/bosses/secert-bosses/bottom-takes-top.png",
  },
  {
    name: "Bishui Golden-Eyed Beast",
    image:
      "/images/bosses/secert-bosses/bishui-golden-eyed-beast.png",
  },
  {
    name: "Erlang, the Sacred Divinity",
    image:
      "/images/bosses/secert-bosses/erlang-shen.jpg",
  },
];

function SecertBosses() {
  return (
    <BossGridPage
      eyebrow="Hidden encounters"
      title="Secert"
      description="Discover optional challengers concealed behind quests, secret areas and unusual conditions."
      heroImage="/images/bosses/secert-bosses.png"
      bosses={secertBosses}
    />
  );
}

export default SecertBosses;
