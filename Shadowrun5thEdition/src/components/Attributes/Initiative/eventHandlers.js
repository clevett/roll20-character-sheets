
//- MUNDANE
const initiativeAttributes = new Initiative().getAttrsArray()
initiativeAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new Initiative()
    updateAttributes(initiative)
  })
})

const initiativeDiceAttributes = new InitiativeDice('initiative_dice').getAttrsArray()
initiativeDiceAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new InitiativeDice('initiative_dice')
    updateInitiativeDice(initiative)
  })
})

//- ASTRAL
const astralInitiativeAttributes = new AstralInitiative().getAttrsArray()
astralInitiativeAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new AstralInitiative()
    updateAstralInitiativeModifier(initiative)
  })
})


const astralInitiativeDiceAttributes = new AstralInitiativeDice().getAttrsArray()
astralInitiativeDiceAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new AstralInitiativeDice()
    updateInitiativeDice(initiative)
  })
})


//- MATRIX
const matrixInitiativeDiceAttributes = new MatrixInitiativeDice().matrixGetAttrsArray()
matrixInitiativeDiceAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new MatrixInitiativeDice()
    updateMatrixInitiativeDice(initiative)
  })
})
