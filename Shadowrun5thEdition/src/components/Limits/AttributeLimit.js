
class AttributeLimit {
  constructor(name) {
    this.name = name,
    this.bonus = [...buildModiferTempFlagArray(name)],
    this.attributes = ['mental_limit', 'physical_limit', 'social_limit']
  }

  buildGetAttrs(attributes) {
    return [...attributes, ...this.bonus]
  }
}
