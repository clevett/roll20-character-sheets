const updateLimits = limitName => {
  const limit = determineLimit(limitName)
  const attributes = limit.buildGetAttrs(limit.attributes)
  const bonus = buildModiferTempFlagArray(limitName)
  
  getAttrs([...attributes, ...bonus], attrs => {
      attrs = shadowrunFunctions.attributeFactory(attrs)
      const bonus = attrs.bonus
      delete attrs.bonus
      const base = shadowrunFunctions.updateLimitTotal(attrs)
      processingFunctions.setAttributes({
        [limitName]: processingFunctions.sumIntegers([base, bonus])
      })
  })
}
