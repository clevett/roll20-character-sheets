const updateAstralInitiativeModifier = attribute => {
  const array = attribute.getAttrsArray()

  getAttrs(array, attrs => {
    const values = processingFunctions.parseIntegers(attrs)
    const base = values.intuition * 2
    const bonus = values.astral_mod_modifier
    const total = base + bonus

    const display = buildDisplayString({base, total})

    setAttrs({
      ["astral_mod"]: total,
      ["display_astral_mod"]: display
    })
  })
}
