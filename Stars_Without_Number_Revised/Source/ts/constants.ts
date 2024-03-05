/* global getAttrs, setAttrs, getSectionIDs, generateRowID, on, removeRepeatingRow, _, getTranslationByKey */

/* Data constants */
const sheetName = "Stars Without Number (revised)";
const sheetVersion = "2.6.5";
const translate = getTranslationByKey;
const attributes = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];
const effortAttributes = [
  "wisdom_mod",
  "constitution_mod",
  "psionics_extra_effort",
  "skill_biopsionics",
  "skill_precognition",
  "skill_telepathy",
  "skill_teleportation",
  "skill_telekinesis",
  "skill_metapsionics",
  "psionics_committed_effort_current",
  "psionics_committed_effort_scene",
  "psionics_committed_effort_day",
];
const shipStatEvent = [
  ...["hardpoints", "power", "mass"].map(
    (x) => `change:repeating_ship-weapons:weapon_${x}`
  ),
  ...["power", "mass"].map(
    (x) => `change:repeating_ship-defenses:defense_${x}`
  ),
  ...["power", "mass"].map(
    (x) => `change:repeating_ship-fittings:fitting_${x}`
  ),
  "change:ship_power",
  "change:ship_mass",
  "change:ship_hardpoints",
  "remove:repeating_ship-weapons",
  "remove:repeating_ship-defenses",
  "remove:repeating_ship-fittings",
].join(" ");
const weaponSkills = [
  "skill_exert",
  "skill_punch",
  "skill_shoot",
  "skill_stab",
  "skill_combat_energy",
  "skill_combat_gunnery",
  "skill_combat_primitive",
  "skill_combat_projectile",
  "skill_combat_psitech",
  "skill_combat_unarmed",
  "skill_telekinesis",
  "skill_sunblade",
];
const weaponDisplayEvent = [
  ...[
    "attack",
    "name",
    "skill_bonus",
    "attribute_mod",
    "damage",
    "shock",
    "shock_damage",
    "shock_ac",
    "skill_to_damage",
  ].map((x) => `change:repeating_weapons:weapon_${x}`),
  "remove:repeating_weapons",
  "change:attack_bonus",
  ...weaponSkills.map((name) => `change:${name}`),
].join(" ");
const skills: { [key: string]: string[] } = {
  revised: [
    "administer",
    "connect",
    "exert",
    "fix",
    "heal",
    "know",
    "lead",
    "notice",
    "perform",
    "pilot",
    "program",
    "punch",
    "shoot",
    "sneak",
    "stab",
    "survive",
    "talk",
    "trade",
    "work",
  ],
  cwn: [
    "administer",
    "connect",
    "drive",
    "exert",
    "fix",
    "heal",
    "know",
    "lead",
    "notice",
    "perform",
    "program",
    "punch",
    "shoot",
    "sneak",
    "stab",
    "survive",
    "talk",
    "trade",
    "work",
  ],
  first: [
    "artist",
    "athletics",
    "bureaucracy",
    "business",
    "combat_energy",
    "combat_gunnery",
    "combat_primitive",
    "combat_projectile",
    "combat_psitech",
    "combat_unarmed",
    "computer",
    "culture_alien",
    "culture_criminal",
    "culture_spacer",
    "culture_traveller",
    "culture_one",
    "culture_two",
    "culture_three",
    "exosuit",
    "gambling",
    "history",
    "instructor",
    "language",
    "leadership",
    "navigation",
    "perception",
    "persuade",
    "profession",
    "religion",
    "science",
    "security",
    "stealth",
    "steward",
    "survival",
    "tactics",
    "tech_astronautic",
    "tech_maltech",
    "tech_medical",
    "tech_postech",
    "tech_pretech",
    "tech_psitech",
    "vehicle_air",
    "vehicle_grav",
    "vehicle_land",
    "vehicle_space",
    "vehicle_water",
  ],
  psionic: [
    "biopsionics",
    "metapsionics",
    "precognition",
    "telekinesis",
    "telepathy",
    "teleportation",
  ],
  magic: ["know_magic", "use_magic", "sunblade"],
  wwn: [
    "administer",
    "connect",
    "convince",
    "craft",
    "exert",
    "heal",
    "know",
    "lead",
    "magic",
    "notice",
    "perform",
    "pray",
    "punch",
    "ride",
    "sail",
    "shoot",
    "sneak",
    "stab",
    "survive",
    "trade",
    "work",
  ],
};
const shipStats = [
  "ship_ac",
  "ship_armor",
  "ship_class",
  "ship_crew_max",
  "ship_crew_min",
  "ship_hardpoints_max",
  "ship_hp",
  "ship_hp_max",
  "ship_mass_max",
  "ship_power_max",
  "ship_speed",
  "ship_hull_price",
];

type ReverseHullTypes =
  | "battleship"
  | "bulk_freighter"
  | "carrier"
  | "corvette"
  | "fleet_cruiser"
  | "free_merchant"
  | "heavy_frigate"
  | "large_station"
  | "patrol_boat"
  | "small_station"
  | "strike_fighter"
  | "shuttle";

const reverseHullTypes = {
  [translate("BATTLESHIP").toString().toLowerCase()]: "battleship",
  [translate("BULK_FREIGHTER").toString().toLowerCase()]: "bulk_freighter",
  [translate("CARRIER").toString().toLowerCase()]: "carrier",
  [translate("CORVETTE").toString().toLowerCase()]: "corvette",
  [translate("FLEET_CRUISER").toString().toLowerCase()]: "fleet_cruiser",
  [translate("FREE_MERCHANT").toString().toLowerCase()]: "free_merchant",
  [translate("HEAVY_FRIGATE").toString().toLowerCase()]: "heavy_frigate",
  [translate("LARGE_STATION").toString().toLowerCase()]: "large_station",
  [translate("PATROL_BOAT").toString().toLowerCase()]: "patrol_boat",
  [translate("SMALL_STATION").toString().toLowerCase()]: "small_station",
  [translate("STRIKE_FIGHTER").toString().toLowerCase()]: "strike_fighter",
  [translate("SHUTTLE").toString().toLowerCase()]: "shuttle",
};
