
const DATA_ARMOR_LEG = [
    { id: "leg-01", name: "アルシュブーツ α", sub_category: "脚", rarity: 4, skills: ["集中 Lv.1", "攻撃 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "leg-02", name: "アルシュブーツ β", sub_category: "脚", rarity: 4, skills: ["集中 Lv.1"], slots: "②-①", obtained: "アルシュベルド素材" },
    { id: "leg-03", name: "レ・ダウブーツ α", sub_category: "脚", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "leg-04", name: "レ・ダウブーツ β", sub_category: "脚", rarity: 5, skills: ["雷属性攻撃強化 Lv.1"], slots: "③", obtained: "レ・ダウ素材" },
    { id: "leg-05", name: "トゥナブーツ α", sub_category: "脚", rarity: 6, skills: ["匠 Lv.1", "回避距離UP Lv.1"], obtained: "ウズ・トゥナ素材" },
    { id: "leg-06", name: "トゥナブーツ β", sub_category: "脚", rarity: 6, skills: ["匠 Lv.1"], slots: "④", obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "防具"}));
