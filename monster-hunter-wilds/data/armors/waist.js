
const DATA_ARMOR_WAIST = [
    { id: "waist-01", name: "アルシュチェスト α", sub_category: "腰", rarity: 4, skills: ["集中 Lv.1", "攻撃 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "waist-02", name: "アルシュチェスト β", sub_category: "腰", rarity: 4, skills: ["集中 Lv.1"], slots: "②-①", obtained: "アルシュベルド素材" },
    { id: "waist-03", name: "レ・ダウチェスト α", sub_category: "腰", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "waist-04", name: "レ・ダウチェスト β", sub_category: "腰", rarity: 5, skills: ["雷属性攻撃強化 Lv.1"], slots: "③", obtained: "レ・ダウ素材" },
    { id: "waist-05", name: "トゥナチェスト α", sub_category: "腰", rarity: 6, skills: ["匠 Lv.1", "回避距離UP Lv.1"], obtained: "ウズ・トゥナ素材" },
    { id: "waist-06", name: "トゥナチェスト β", sub_category: "腰", rarity: 6, skills: ["匠 Lv.1"], slots: "④", obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "防具"}));
