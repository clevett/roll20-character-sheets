
class AttributeLimit {
  constructor(name) {
    this.name = name,
    this.bonus = [...buildModiferTempFlagArray(name)]
  }

  buildGetAttrs(attributes) {
    return [...attributes, ...this.bonus]
  }
}
