const updateMatrixInitiative = attribute => {
  const array = attribute.getAttrsArray()

  getAttrs(array, v => {
    const secondAttribute = attribute.determineSecondAttribute(v.sheet_type)

    v = processingFunctions.parseIntegers(v);

    const base = v.data_processing + v[secondAttribute];
    const total = base + v.matrix_mod_modifier;

    const display = buildDisplayString({base, total})

    setAttrs({
      ["matrix_mod"]: total,
      ["display_matrix_mod"]: display
    })
  })
}

