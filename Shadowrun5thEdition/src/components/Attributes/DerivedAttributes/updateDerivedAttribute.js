const updateDerivedAttribute = name => {
  const attribute = determineDerivedAttribute(name)
  const array = attribute.getAttrsArray()
  getAttrs(array, attrs => {
    const calculated = shadowrunFunctions.attributeFactory(attrs)
    processingFunctions.setAttributes({[name]: calculated.total})
  })
}
