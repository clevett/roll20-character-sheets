const updateInitiative = attribute => {
  const array = attribute.getAttrsArray()
  
  getAttrs(array, attrs => {
    const name = attribute.name
    
    attrs = shadowrunFunctions.attributeFactory(attrs)

    processingFunctions.setAttributes({
      [name]: attrs.total,
      [`display_${name}`]: attribute.display
    })
  })
}


