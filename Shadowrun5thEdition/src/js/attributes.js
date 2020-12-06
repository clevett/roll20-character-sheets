
const sheetAttributes = {
  translationsAttributes: ['attribute', ...physicalAttributes, ...mentalAttributes, 'edge', 'none'],
  repeating: ['quality', 'martial', 'items', 'range', 'melee', 'armor', 'spell', 'preps', 'ritual', 'powers', 'forms', 'vehicle', 'augementations', 'lifestyle', 'contacts', 'programs'],
  repeatingSkills: ['active', 'knowledge', 'language'],
  tabs: [`core`, `arms`, `augs`, `gear`, `magic`, `matrix`, `social`, `vehicle`, `options`],
  woundCalculation: ['high_pain_tolerance', 'low_pain_tolerance', 'damage_compensators_physical', 'damage_compensators_stun', 'stun', 'physical'],

  calculatedAttributes: ['attack', 'sleaze', 'data_processing', 'firewall'],
  matrix_mod: [],

  conditionTracks: ['stun', 'physical', 'matrix'],
  physical: ['physical_modifier', 'body', 'sheet_type', 'flag_drone'],
  stun: ['stun_modifier', 'willpower'],
  matrix: ['matrix_modifier', 'device_rating'],

  stunCharacters: ['grunt', 'pc'],
  physicalCharacters: ['grunt', 'pc', 'vehicle'],
  matrixCharacters: ['vehicle', 'host', 'sprite'],
  matrixAttributes: ['attack', 'sleaze', 'data_processing', 'firewall'],

  weaponTypes: ['range', 'melee'],
  rangeAttributes: ['dicepool', 'weapon', 'damage', 'acc', 'ap', 'skill', 'ammo', 'mode', 'recoil'],
  meleeAttributes: ['dicepool', 'weapon', 'damage', 'acc', 'ap', 'skill', 'reach'],

  spellTypes: ['spell', 'preps', 'ritual', 'forms'],

  armorAttributes: ['name', 'rating', 'acid_modifier', 'electrical_modifier', 'cold_modifier', 'fire_modifier', 'radiation_modifier', 'dicepool_modifier'],
  armorSoak: ['dicepool_modifier', 'rating'],
  armorProtections: ['acid', 'electrical', 'cold', 'fire', 'radiation']
}

