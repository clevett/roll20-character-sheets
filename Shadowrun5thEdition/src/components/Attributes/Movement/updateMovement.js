const updateMovement = attribute => {
  const array = attribute.getAttrsArray()

  getAttrs(array, attrs => {
    const {agility, run_modifier, walk_modifier} = processingFunctions.parseIntegers(attrs)

    const walk = attribute.getWalkSpeed(agility, walk_modifier)
    const run = attribute.getRunSpeed(agility, run_modifier)

    processingFunctions.setAttributes({
      walk,
      run
    })
  })
}
