const DATA_LONGSWORD = [
    { id: "ls-01", name: "調査団正式太刀", sub_category: "太刀", rarity: 1, skills: ["見切り Lv.1"], obtained: "初期装備" },
    { id: "ls-02", name: "チャタカ・サーベル", sub_category: "太刀", rarity: 2, skills: ["防御 Lv.1"], obtained: "チャタカブラ素材" },
    { id: "ls-03", name: "ドシャ・クレイモア", sub_category: "太刀", rarity: 2, skills: ["耐震 Lv.1"], obtained: "ドシャグマ素材" },
    { id: "ls-04", name: "ケマト・シミター", sub_category: "太刀", rarity: 3, skills: ["火属性攻撃強化 Lv.1"], obtained: "ケマトリス素材" },
    { id: "ls-05", name: "ダハド・エッジ", sub_category: "太刀", rarity: 3, skills: ["回避距離UP Lv.1"], obtained: "ジン・ダハド素材" },
    { id: "ls-06", name: "バリナ・ニードル", sub_category: "太刀", rarity: 4, skills: ["氷属性攻撃強化 Lv.2"], obtained: "ラバラ・バリナ素材" },
    { id: "ls-07", name: "アルシュサキモリ", sub_category: "太刀", rarity: 4, skills: ["納刀術 Lv.1"], obtained: "アルシュベルド素材" },
    { id: "ls-08", name: "飛竜刀【朱】", sub_category: "太刀", rarity: 5, skills: ["弱点特効 Lv.1"], obtained: "リオレウス素材" },
    { id: "ls-09", name: "ダウ・ボルトライン", sub_category: "太刀", rarity: 5, skills: ["雷属性攻撃強化 Lv.2"], obtained: "レ・ダウ素材" },
    { id: "ls-10", name: "トゥナ・ハルシオン", sub_category: "太刀", rarity: 6, skills: ["攻撃 Lv.2"], obtained: "ウズ・トゥナ素材" }
].map(d => ({...d, category: "武器"}));