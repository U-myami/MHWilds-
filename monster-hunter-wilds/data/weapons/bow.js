const DATA_BOW = [
    { 
        id: "bow-01", 
        name: "調査団正式弓", 
        sub_category: "弓", 
        rarity: 1, 
        skills: ["攻撃 Lv.1"], 
        obtained: "初期装備",
        attack: 180,
        affinity: 0,
        element: "なし",
        slots: [0, 0, 0], // スロットなし
        image: "../assets/images/weapons/bow/bow-01.webp" 
    },
    { 
        id: "bow-02", 
        name: "火竜の弓", 
        sub_category: "弓", 
        rarity: 5, 
        skills: ["火属性攻撃強化 Lv.2"], 
        obtained: "リオレウス素材",
        attack: 240,
        affinity: 15,
        element: "火 30",
        slots: [2, 1, 0], 
        image: "../assets/images/weapons/bow/bow-02.webp" 
    }
].map(d => ({...d, category: "武器"}));