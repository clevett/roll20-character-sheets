const getInitiativeFromHeroLab = characterAttributes => {
  const object = findInHeroLabAttributes(characterAttributes, 'initiative')
  const modifier = getInitiativeModifierFromHeroLab(object)
  const dice = getInitiativeDiceFromHeroLab(object)

  console.log({...modifier, ...dice})

  return {...modifier, ...dice}
}

