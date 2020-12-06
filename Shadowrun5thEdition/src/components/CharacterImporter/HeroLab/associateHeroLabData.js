
const associateHeroLabData = character => {
  let setText = {
    "error": "",
    "results": "",
    "ignored": ""
  }

  console.log(character)

  /* Personal Info */
  const personalData = new PersonalData()
  personalData.age = character.personal._age
  personalData.ethnicity = character.heritage._name
  personalData.height = character.personal.charheight._text
  personalData.metatype = character.race._name
  personalData.name = character._name 
  personalData.sex = character.personal._gender
  personalData.weight = character.personal.charweight._text

  /* Rewards */
  const rewardsData = new RewardsData()
  rewardsData.karma = character.karma._left,
  rewardsData.total_karma = character.karma._total

  /* Reputations */
  const reputations = getReputationsFromHeroLab(character.reputations)
  rewardsData.street_cred = reputations.street_cred,
  rewardsData.notoriety = reputations.notoriety,
  rewardsData.public_awareness = reputations.public_awareness,
  rewardsData.misc = reputations.misc

  /* ATTRIBUTES */
  const characterAttributes = character.attributes.attribute
  const attributes = [...physicalAttributes, ...mentalAttributes, ...specialAttributes]
  const attributeData = getAttributesFromHeroLab(characterAttributes, attributes)
  
  const specialFlag = attributeData.magic ? 'magic' : attributeData.resonance ? 'resonance' : 'mundane'
  attributeData['flag_special'] = specialFlag

  const Roll20Character = {
    ...personalData,
    ...rewardsData,
    ...attributeData,
  }

  //Will need to return character eventually
  return {text: setText, character: Roll20Character}
}

