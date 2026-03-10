
const DATA_ARMOR_ARM = [
    { id: "arm-01", name: "アルシュアーム α", sub_category: "腕", rarity: 4, skills: ["集中 Lv.1", "攻撃 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "arm-02", name: "アルシュアーム β", sub_category: "腕", rarity: 4, skills: ["集中 Lv.1"], slots: "②-①", obtained: "アルシュベルド素材" },
    { id: "arm-03", name: "レ・ダウアーム α", sub_category: "腕", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "arm-04", name: "レ・ダウアーム β", sub_category: "腕", rarity: 5, skills: ["雷属性攻撃強化 Lv.1"], slots: "③", obtained: "レ・ダウ素材" },
    { id: "arm-05", name: "トゥナアーム α", sub_category: "腕", rarity: 6, skills: ["匠 Lv.1", "回避距離UP Lv.1"], obtained: "ウズ・トゥナ素材" },
    { id: "arm-06", name: "トゥナアーム β", sub_category: "腕", rarity: 6, skills: ["匠 Lv.1"], slots: "④", obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "防具"}));
