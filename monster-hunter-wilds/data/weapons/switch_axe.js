const DATA_SWITCH_AXE = [
    { id: "sa-01", name: "調査団正式大剣", sub_category: "スラッシュアックス", rarity: 1, skills: ["攻撃 Lv.1"], obtained: "初期装備" },
    { id: "sa-02", name: "チャタカ・グラッパー", sub_category: "スラッシュアックス", rarity: 2, skills: ["体力回復量UP Lv.1"], obtained: "チャタカブラ素材" },
    { id: "sa-03", name: "ドシャ・インパクト", sub_category: "スラッシュアックス", rarity: 2, skills: ["不屈 Lv.1"], obtained: "ドシャグマ素材" },
    { id: "sa-04", name: "ケマト・ブレイズ", sub_category: "スラッシュアックス", rarity: 3, skills: ["火属性攻撃強化 Lv.1"], obtained: "ケマトリス素材" },
    { id: "sa-05", name: "ダハド・カッター", sub_category: "スラッシュアックス", rarity: 3, skills: ["回避性能 Lv.1"], obtained: "ジン・ダハド素材" },
    { id: "sa-06", name: "バリナ・パルサー", sub_category: "スラッシュアックス", rarity: 4, skills: ["氷属性攻撃強化 Lv.1"], obtained: "ラバラ・バリナ素材" },
    { id: "sa-07", name: "アルシュブレイド", sub_category: "スラッシュアックス", rarity: 4, skills: ["集中 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "sa-08", name: "レド・レドス", sub_category: "スラッシュアックス", rarity: 5, skills: ["弱点特効 Lv.1"], obtained: "リオレウス素材" },
    { id: "sa-09", name: "ダウ・エクスプレス", sub_category: "スラッシュアックス", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "sa-10", name: "トゥナ・カタストロフ", sub_category: "スラッシュアックス", rarity: 6, skills: ["超会心 Lv.1"], obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "武器"}));