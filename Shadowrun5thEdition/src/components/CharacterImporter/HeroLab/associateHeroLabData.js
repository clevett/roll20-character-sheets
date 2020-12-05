
const associateHeroLabData = character => {
  console.log(character)

  const personalData = new PersonalData()
  personalData.age = character.personal._age
  personalData.ethnicity = character.heritage._name
  personalData.height = character.personal.charheight._text
  personalData.metatype = character.race._name
  personalData.name = character._name 
  personalData.sex = character.personal._gender
  personalData.weight = character.personal.charweight._text

  const rewardsData = new RewardsData()
  rewardsData.karma = character.karma._left,
  rewardsData.total_karma = character.karma._total

  const reputations = getReputationsFromHeroLab(character.reputations)
  rewardsData.street_cred = reputations.street_cred,
  rewardsData.notoriety = reputations.notoriety,
  rewardsData.public_awareness = reputations.public_awareness,
  rewardsData.misc = reputations.misc

  const Roll20Character = {
    ...personalData,
    ...rewardsData,
  }

  //Will need to return character eventually
  return {text: '', character: Roll20Character}
}

