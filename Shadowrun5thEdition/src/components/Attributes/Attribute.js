
class Attribute {
  constructor(name) {
    this.name = name,
    this.base = null,
    this.temp = null,
    this.temp_flag = null,
    this.modifier = null
  }

  buildSheetAttrs() {
    return buildModiferTempFlagBaseArray(this.name)
  }
}
