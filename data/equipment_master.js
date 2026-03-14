const EQUIP_DATA = [
    // 武器
    ...(typeof DATA_GREATSWORD !== 'undefined' ? DATA_GREATSWORD : []),
    ...(typeof DATA_LONGSWORD !== 'undefined' ? DATA_LONGSWORD : []),
    ...(typeof DATA_SWORD_SHIELD !== 'undefined' ? DATA_SWORD_SHIELD : []),
    ...(typeof DATA_DUAL_BLADES !== 'undefined' ? DATA_DUAL_BLADES : []),
    ...(typeof DATA_HAMMER !== 'undefined' ? DATA_HAMMER : []),
    ...(typeof DATA_HORN !== 'undefined' ? DATA_HORN : []),
    ...(typeof DATA_LANCE !== 'undefined' ? DATA_LANCE : []),
    ...(typeof DATA_GUN_LANCE !== 'undefined' ? DATA_GUN_LANCE : []),
    ...(typeof DATA_SWITCH_AXE !== 'undefined' ? DATA_SWITCH_AXE : []),
    ...(typeof DATA_CHARGE_BLADE !== 'undefined' ? DATA_CHARGE_BLADE : []),
    ...(typeof DATA_GLAIVE !== 'undefined' ? DATA_GLAIVE : []),
    ...(typeof DATA_BOW !== 'undefined' ? DATA_BOW : []),
    ...(typeof DATA_LIGHT_BG !== 'undefined' ? DATA_LIGHT_BG : []),
    ...(typeof DATA_HEAVY_BG !== 'undefined' ? DATA_HEAVY_BG : []),
    
    // 防具
    ...(typeof DATA_ARMOR_HEAD !== 'undefined' ? DATA_ARMOR_HEAD : []),
    ...(typeof DATA_ARMOR_BODY !== 'undefined' ? DATA_ARMOR_BODY : []),
    ...(typeof DATA_ARMOR_ARM !== 'undefined' ? DATA_ARMOR_ARM : []),
    ...(typeof DATA_ARMOR_WAIST !== 'undefined' ? DATA_ARMOR_WAIST : []),
    ...(typeof DATA_ARMOR_LEG !== 'undefined' ? DATA_ARMOR_LEG : []),
    
    // その他
    ...(typeof DATA_CHARMS !== 'undefined' ? DATA_CHARMS : []),
    ...(typeof DATA_MANTLES !== 'undefined' ? DATA_MANTLES : [])
];