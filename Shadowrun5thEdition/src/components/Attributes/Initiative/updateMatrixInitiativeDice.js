const updateMatrixInitiativeDice = attribute => {
  const array = attribute.matrixGetAttrsArray()

  getAttrs([...array, "initiative_dice"], v => {
    const matrixAttrs = {
      dice: processingFunctions.parseInteger(v.initiative_dice) || 1, 
      modifer: processingFunctions.parseInteger(v.matrix_dice_modifier), 
      edge: v.edge_toggle === "@{edge}" ? true : false,
      mode: v.matrix_mode_toggle,
    }
    const matrixDice = shadowrunFunctions.determineMatrixDice(matrixAttrs)

    setAttrs({
      ["matrix_dice"]: matrixDice
    })
  })
}

