const DATA_CHARMS = [
    { id: "ch-01", name: "防御の護石", sub_category: "加工屋", rarity: 1, skills: ["防御 Lv.3"], obtained: "生産" },
    { id: "ch-02", name: "加護の護石", sub_category: "加工屋", rarity: 2, skills: ["精霊の加護 Lv.2"], obtained: "生産" },
    { id: "ch-03", name: "耐火の護石", sub_category: "加工屋", rarity: 2, skills: ["火耐性 Lv.3"], obtained: "生産" },
    { id: "ch-04", name: "回避の護石", sub_category: "加工屋", rarity: 3, skills: ["回避性能 Lv.2"], obtained: "生産" },
    { id: "ch-05", name: "跳躍の護石", sub_category: "加工屋", rarity: 3, skills: ["回避距離UP Lv.2"], obtained: "生産" },
    { id: "ch-06", name: "栄世の護石", sub_category: "鑑定護石", rarity: 5, is_random: true, skill_pool: [{name:"攻撃", max_lv:3}, {name:"見切り", max_lv:3}], obtained: "鑑定" },
    { id: "ch-07", name: "秘歴の護石", sub_category: "鑑定護石", rarity: 6, is_random: true, skill_pool: [{name:"超会心", max_lv:2}, {name:"弱点特効", max_lv:2}], obtained: "鑑定" }
].map(d => ({...d, category: "護石"}));