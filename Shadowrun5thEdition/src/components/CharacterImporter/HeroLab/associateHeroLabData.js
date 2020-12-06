
const associateHeroLabData = character => {
  let setText = {
    "error": "",
    "results": "",
    "ignored": ""
  }

  console.log(character)

  /* Personal Info */
  const personalData = associatePersonalData(character)

  /* ATTRIBUTES */
  const characterAttributes = character.attributes.attribute
  const attributes = [...physicalAttributes, ...mentalAttributes, ...specialAttributes]
  const attributeData = getAttributesFromHeroLab(characterAttributes, attributes)
  
  const specialFlag = attributeData.magic ? 'magic' : attributeData.resonance ? 'resonance' : 'mundane'
  attributeData['flag_special'] = specialFlag

  const initiativeData = getInitiativeFromHeroLab(character.attributes.attribute)

  const characterMovement = character.movementtypes.movementtype
  const movementData = associateMovementFromHeroLab(characterMovement, attributeData)

  const Roll20Character = {
    ...personalData,
    ...attributeData,
    ...initiativeData,
    ...movementData,
  }

  //Will need to return character eventually
  return {text: setText, character: Roll20Character}
}

