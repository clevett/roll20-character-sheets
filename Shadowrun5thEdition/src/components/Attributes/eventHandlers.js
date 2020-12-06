// EVENT HANDLERS
const physicalAttributes = ['body', 'agility', 'reaction', 'strength']
const mentalAttributes = ['willpower', 'logic', 'intuition', 'charisma']
const specialAttributes = ['magic', 'resonance']

const allAttributes = [...physicalAttributes, ...mentalAttributes, ...specialAttributes]

allAttributes.forEach(name => {
  const newAttribute = new CoreAttribute(name)
  const array = newAttribute.getAttrsArray()
  
  array.forEach(attr => {
    on(`change:${attr}`, () => {
      updateAttributes(newAttribute)
    })
  })
})
