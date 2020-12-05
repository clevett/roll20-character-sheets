// EVENT HANDLERS
const physicalAttributes = ['body', 'agility', 'reaction', 'strength']
const mentalAttributes = ['willpower', 'logic', 'intuition', 'charisma']
const specialAttributes = ['magic', 'resonance']

const allAttributes = [...physicalAttributes, ...mentalAttributes, ...specialAttributes]

allAttributes.forEach(attribute => {
  const array = new Attribute(attribute).buildSheetAttrs()
  array.forEach(attr => {
    on(`change:${attr}`, () => updateAttributes(attribute) )
  })
})
