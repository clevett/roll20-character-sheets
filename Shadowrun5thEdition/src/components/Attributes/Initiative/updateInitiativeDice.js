
const updateInitiativeDice = attribute => {
  const array = attribute.getAttrsArray()
  const name = attribute.name

  getAttrs(array, values => {
    const edgeFlag = checkFlag(values.edge_toggle)
    const flag = checkFlag(values[`${name}_temp_flag`])
    const temp = values[`${name}_temp`]
    const modifier = values[`${name}_modifier`]

    attribute[`${name}_modifier`] = parseInteger(modifier)
    attribute[`${name}_temp`] = parseInteger(temp)
    attribute[`${name}_temp_flag`] = flag

    const total = attribute.getTotal(edgeFlag)

    processingFunctions.setAttributes({
      [`${name}`]: total
    })
  })
}
