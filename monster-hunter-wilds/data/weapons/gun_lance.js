const DATA_GUN_LANCE = [
    { id: "glance-01", name: "調査団正式ガンランス", sub_category: "ガンランス", rarity: 1, skills: ["砲術 Lv.1"], obtained: "初期装備" },
    { id: "glance-02", name: "チャタカ・バースト", sub_category: "ガンランス", rarity: 2, skills: ["防御 Lv.1"], obtained: "チャタカブラ素材" },
    { id: "glance-03", name: "ドシャ・キャノン", sub_category: "ガンランス", rarity: 2, skills: ["耐震 Lv.1"], obtained: "ドシャグマ素材" },
    { id: "glance-04", name: "ケマト・フレア", sub_category: "ガンランス", rarity: 3, skills: ["火属性攻撃強化 Lv.1"], obtained: "ケマトリス素材" },
    { id: "glance-05", name: "ダハド・ボルト", sub_category: "ガンランス", rarity: 3, skills: ["回避距離UP Lv.1"], obtained: "ジン・ダハド素材" },
    { id: "glance-06", name: "バリナ・フロスト", sub_category: "ガンランス", rarity: 4, skills: ["氷属性攻撃強化 Lv.2"], obtained: "ラバラ・バリナ素材" },
    { id: "glance-07", name: "アルシュガンス", sub_category: "ガンランス", rarity: 4, skills: ["砲弾装填数UP Lv.1"], obtained: "アルシュベルド素材" },
    { id: "glance-08", name: "真・飛竜銃槍", sub_category: "ガンランス", rarity: 5, skills: ["弱点特効 Lv.1"], obtained: "リオレウス素材" },
    { id: "glance-09", name: "ダウ・サンダー", sub_category: "ガンランス", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "glance-10", name: "トゥナ・ハイドロ", sub_category: "ガンランス", rarity: 6, skills: ["匠 Lv.1"], obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "武器"}));