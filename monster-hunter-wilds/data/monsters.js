const MONSTERS = [
    { 
        id: 'Arkveld', 
        name: 'アルシュベルド', 
        type: '不明', 
        threat: '★★★★★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 1, water: 2, thunder: 0, ice: 3, dragon: 2 },
        description: '「白の孤影」と呼ばれる謎多きモンスター。鎖状の翼を駆使した変幻自在の攻撃を仕掛けてくる。その生態は未だ謎に包まれている部分が多い。',
        tips: '鎖状の翼を用いた広範囲攻撃は、予備動作を見極めて回避に専念せよ。'
    },
    { 
        id: 'Chatacabra', 
        name: 'チャタカブラ', 
        type: '両生種', 
        threat: '★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 2, water: 1, thunder: 3, ice: 1, dragon: 0 },
        description: '粘着性のある唾液で腕に岩石を付着させ、強力な一撃を放つ両生種。舌を使った遠距離攻撃も得意とする。',
        tips: '腕の岩石を破壊すれば、肉質が柔らかくなり攻撃のチャンスが生まれる。'
    },
    { 
        id: 'Gore Magala', 
        name: 'ゴア・マガラ', 
        type: '不明', 
        threat: '★★★★★',
        locations: ['不明'], 
        weakness: { fire: 3, water: 0, thunder: 1, ice: 1, dragon: 2 },
        description: '目を持たず、鱗粉を撒き散らして周囲の状態を把握する黒蝕竜。鱗粉を吸い込んだ獲物は狂竜症を発症する。',
        tips: '狂竜症の発症を抑えるには、積極的に攻撃を当てて「克服」を目指す必要がある。'
    },
    { 
        id: 'Guardian Doshaguma', 
        name: '護竜ドシャグマ', 
        type: '牙獣種', 
        threat: '★★★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 3, water: 0, thunder: 1, ice: 2, dragon: 1 },
        description: 'ドシャグマの中でも特に強大な個体。群れを率い、縄張りに侵入する者には容赦のない猛攻を加える。',
        tips: '非常にタフだが火属性が有効。群れで行動している際は分断して戦うのが定石。'
    },
    { 
        id: 'Jin Dahaad', 
        name: 'ジン・ダハド', 
        type: '牙獣種', 
        threat: '★★★',
        locations: ['緋の森'], 
        weakness: { fire: 1, water: 0, thunder: 2, ice: 3, dragon: 1 },
        description: '粘着性の高い泥を操り、外敵を拘束する。機敏な動きと泥のコンビネーションが脅威となる牙獣。',
        tips: '泥に足を取られると危険。水属性は無効だが、氷属性による攻撃が非常に有効。'
    },
    { 
        id: 'Lala Barina', 
        name: 'ラバラ・バリナ', 
        type: '鋏角種', 
        threat: '★★★★',
        locations: ['緋の森'], 
        weakness: { fire: 3, water: 1, thunder: 1, ice: 2, dragon: 0 },
        description: '大振りの鋏角と、腹部から放つ美しいが致命的な糸で獲物を捕らえる。華やかな外見に反して攻撃性は極めて高い。',
        tips: '糸による拘束を避けるため、常に側面から攻撃を仕掛けるのが安全だ。'
    },
    { 
        id: 'Nu Udra', 
        name: 'ヌ・エグドラ', 
        type: '海竜種', 
        threat: '★★★★★',
        locations: ['緋の森'], 
        weakness: { fire: 2, water: 0, thunder: 0, ice: 3, dragon: 1 },
        description: '雷を帯びた攻撃を得意とする海竜種。高い知性を持ち、地形を利用した変則的な立ち回りを行う。',
        tips: '帯電部位を破壊することで雷属性攻撃を弱体化させることが可能。'
    },
    { 
        id: 'Quematrice', 
        name: 'ケマトリス', 
        type: '獣竜種', 
        threat: '★★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 0, water: 3, thunder: 1, ice: 1, dragon: 1 },
        description: '尻尾を地面に擦り付けて発火させ、広範囲に炎を撒き散らす獣竜。',
        tips: '尻尾の摩擦熱を水属性攻撃で冷却すれば、火炎攻撃を封じることができる。'
    },
    { 
        id: 'Rathalos', 
        name: 'リオレウス', 
        type: '飛竜種', 
        threat: '★★★★★',
        locations: ['隔絶地帯', '緋 of Forest'], 
        weakness: { fire: 0, water: 1, thunder: 2, ice: 1, dragon: 3 },
        description: '「空の王者」と称される飛竜。強力なブレスと毒の爪を使い、空からの猛攻で獲物を仕留める。',
        tips: '閃光玉やスリンガーを用いて、空中にいる時間を短縮させるのが攻略の鍵。'
    },
    { 
        id: 'Rathian', 
        name: 'リオレイア', 
        type: '飛竜種', 
        threat: '★★★',
        locations: ['隔絶地帯', '緋 of Forest'], 
        weakness: { fire: 0, water: 1, thunder: 2, ice: 1, dragon: 3 },
        description: '「陸の女王」として知られる。地上での突進や、毒を含んだ尻尾によるサマーソルトが非常に強力。',
        tips: '尻尾を部位破壊すれば、毒攻撃のリーチと威力を大幅に減少させられる。'
    },
    { 
        id: 'Rey Dau', 
        name: 'レ・ダウ', 
        type: '飛竜種', 
        threat: '★★★★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 1, water: 3, thunder: 0, ice: 1, dragon: 2 },
        description: '砂嵐と共に現れ、強力な放電を行う飛竜。鋭利な翼を避雷針のように地面に突き刺し電磁波を発生させる。',
        tips: '砂嵐中は放電が激化するため、地形の遮蔽物を利用して雷をやり過ごせ。'
    },
    { 
        id: 'Uth Duna', 
        name: 'ウズトゥナ', 
        type: '海竜種', 
        threat: '★★★★★',
        locations: ['緋の森'], 
        weakness: { fire: 2, water: 0, thunder: 3, ice: 1, dragon: 1 },
        description: '大量の水を操り、霧を発生させて姿を隠す。水辺での戦闘能力は極めて高く、緋の森の主とされる。',
        tips: '水衣を纏っている間は肉質が変化する。雷属性の武器で水衣を剥がし取れ。'
    },
    { 
        id: 'Xu-Wu', 
        name: 'シーウー', 
        type: '牙獣種', 
        threat: '★★★',
        locations: ['隔絶地帯'], 
        weakness: { fire: 1, water: 1, thunder: 3, ice: 0, dragon: 0 },
        description: '長い鼻と強靭な四肢を持つ。群れで行動し、侵入者を一斉に排除しようとする好戦的な牙獣。',
        tips: '長い鼻を振り回す攻撃はリーチが長い。足元に潜り込むように立ち回るのが有効。'
    }
];