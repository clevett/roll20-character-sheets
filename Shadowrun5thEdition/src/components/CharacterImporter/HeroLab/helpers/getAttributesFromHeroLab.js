const getAttributesFromHeroLab = (characterAttributes, attributes) => {
  const attributeData = {}

  const findAttribute = term => {
    return characterAttributes.find(element => element._name.toLowerCase() == term)
  }

  attributes.forEach(name => {
    const object = findAttribute(name)
    const attribute = new Attribute(name)
  
    if (object) {
      attribute[`${name}_base`] = parseInteger(object._base)
      attribute[`${name}_modifier`] = object._modified - object._base
      attribute[`${name}`] = parseInteger(object._modified)
  
      attribute[`${name}_display`] = attribute.getDisplay()
    }
  
    for (const [key, value] of Object.entries(attribute)) {
      if (key != 'name') {
        attributeData[key] = value
      }
    }
  })
  
  attributeData['essence'] = findAttribute('essence')._modified
  attributeData['edge'] = findAttribute('edge')._modified
  
  return attributeData
}
