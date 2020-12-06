const updateAttributes = attribute => {
  const array = attribute.getAttrsArray()
  
  getAttrs(array, attrs => {
    attrs = shadowrunFunctions.attributeFactory(attrs)

    const name = attribute.name
    const display = buildDisplayString(attrs)

    processingFunctions.setAttributes({
      [name]: attrs.total,
      [`display_${name}`]: display
    })
  })
}


