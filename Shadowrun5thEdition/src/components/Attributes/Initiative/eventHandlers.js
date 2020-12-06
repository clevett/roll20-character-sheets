
const initiativeAttributes = new Initiative().getAttrsArray()

initiativeAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new Initiative()
    updateAttributes(initiative)
  })
})

const astralInitiativeAttributes = new AstralInitiative().getAttrsArray()
astralInitiativeAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new AstralInitiative()
    updateAstralInitiativeModifier(initiative)
  })
})
