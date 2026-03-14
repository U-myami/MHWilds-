const DATA_MANTLES = [
    { id: "mt-01", name: "隠れ身の装衣", sub_category: "隠れ身の装衣", rarity: 2, effect: "敵から隠れる", duration: "120秒", cooldown: "300秒", skills: ["隠密"], obtained: "任務報酬" },
    { id: "mt-02", name: "不動の装衣", sub_category: "不動の装衣", rarity: 4, effect: "怯み無効・ダメージ軽減", duration: "90秒", cooldown: "360秒", skills: ["不動"], obtained: "特別任務" },
    { id: "mt-03", name: "再生の装衣", sub_category: "再生の装衣", rarity: 3, effect: "自動回復", duration: "60秒", cooldown: "240秒", skills: ["回復"], obtained: "納品依頼" },
    { id: "mt-04", name: "回避の装衣", sub_category: "回避の装衣", rarity: 4, effect: "回避強化・攻撃UP", duration: "90秒", cooldown: "300秒", skills: ["回避性能"], obtained: "闘技大会" },
    { id: "mt-05", name: "蝕攻の装衣", sub_category: "蝕攻の装衣", rarity: 5, effect: "属性やられを力に変える", duration: "100秒", cooldown: "300秒", skills: ["死中に活"], obtained: "調査報酬" }
].map(d => ({...d, category: "装衣"}));