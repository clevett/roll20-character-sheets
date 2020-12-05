
const composureAttributes = new Composure().getAttrsArray()
composureAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('composure'))
})

const defenseAttributes = new Defense().getAttrsArray()
defenseAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('defense'))
})

const judgeIntentionsAttributes = new JudgeIntentions().getAttrsArray()
judgeIntentionsAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('judge_intentions'))
})

const liftCarryAttributes = new LiftCarry().getAttrsArray()
liftCarryAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('lift_carry'))
})

const memoryAttributes = new Memory().getAttrsArray()
memoryAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('memory'))
})

const OverflowAttributes = new Overflow().getAttrsArray()
OverflowAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('overflow'))
})

const soakAttributes = new Soak().getAttrsArray()
soakAttributes.forEach(attr => {
  on(`change:${attr}`, () => updateDerivedAttribute('soak'))
})



