const updateAttributes = name => {
  const attribute = new Attribute(name)
  const array = attribute.buildSheetAttrs()
  getAttrs(array, attrs => {
    attrs = shadowrunFunctions.attributeFactory(attrs)

    const display = attrs.base === attrs.total ? attrs.base : `${attrs.base} (${attrs.total})`

    processingFunctions.setAttributes({
      [name]: attrs.total,
      [`display_${name}`]: display
    })
  })
}


