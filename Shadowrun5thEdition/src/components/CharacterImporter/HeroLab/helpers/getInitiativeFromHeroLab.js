const getInitiativeFromHeroLab = characterAttributes => {
  const data = {}
  const object = findInHeroLabAttributes(characterAttributes, 'initiative')

  const initiativeModifier = new Initiative()
  const modifierDifference = parseInteger(object._modified) - parseInteger(object._base)
  initiativeModifier.setModModifier(modifierDifference)

  const initiativeDice = new InitiativeDice('initiative_dice')

  for (const [key, value] of Object.entries({...initiativeModifier, ...initiativeDice})) {
    if (key != 'name') {
      data[key] = value
    }
  }

  return data
}

// attribute[`${name}_base`] = parseInteger(object._base)
// attribute[`${name}_modifier`] = object._modified - object._base
// attribute[`${name}`] = parseInteger(object._modified)


// _augmentedmaximum: "13"
// _base: "9"
// _category: "Derived"
// _minimum: "2"
// _modified: "11"
// _name: "Initiative"
// _naturalmaximum: "12"
// _text: "9/11+3D6"