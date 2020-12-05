const updateAttributes = attribute => {
  const array = attribute.getAttrsArray()
  
  getAttrs(array, attrs => {
    attrs = shadowrunFunctions.attributeFactory(attrs)

    const name = attribute.name
    attribute[`${name}_base`] = attrs.base
    attribute.total = attrs.total

    processingFunctions.setAttributes({
      [name]: attribute.total,
      [`display_${name}`]: attribute.getDisplay()
    })
  })
}


