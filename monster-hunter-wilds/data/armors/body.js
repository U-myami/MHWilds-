
const DATA_ARMOR_BODY = [
    { id: "body-01", name: "アルシュメイル α", sub_category: "胴", rarity: 4, skills: ["集中 Lv.1", "攻撃 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "body-02", name: "アルシュメイル β", sub_category: "胴", rarity: 4, skills: ["集中 Lv.1"], slots: "②-①", obtained: "アルシュベルド素材" },
    { id: "body-03", name: "レ・ダウメイル α", sub_category: "胴", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "body-04", name: "レ・ダウメイル β", sub_category: "胴", rarity: 5, skills: ["雷属性攻撃強化 Lv.1"], slots: "③", obtained: "レ・ダウ素材" },
    { id: "body-05", name: "トゥナメイル α", sub_category: "胴", rarity: 6, skills: ["匠 Lv.1", "回避距離UP Lv.1"], obtained: "ウズ・トゥナ素材" },
    { id: "body-06", name: "トゥナメイル β", sub_category: "胴", rarity: 6, skills: ["匠 Lv.1"], slots: "④", obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "防具"}));
