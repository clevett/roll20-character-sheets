
class InitiativeDice extends Attribute {
  constructor(name) {
    super(name)
    this.base = 1
  }
  
  getAttrsArray() {
    const name = this.name
    const bonus = [`${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]
    return [...bonus, 'edge_toggle']
  }

  getBonus() {
    const temp = this[`${this.name}_temp_flag`] ? this[`${this.name}_temp`] : 0
    const sum = this[`${this.name}_modifier`] + temp
    return Math.min(sum, 5)
  }

  getTotal(edgeFlag) {
    const total = this.getBonus() + this.getBase()
    return edgeFlag ? 5 : Math.min(total, 5)
  }

  getSheetAttributes() {
    const name = this.getName()

    return  {
      [`${name}`]: this.getTotal(),
      [`${name}_temp`]: this.getTemp(),
      [`${name}_temp_flag`]: this.getTempFlag(),
      [`${name}_modifier`]: this.getModifier(),
      [`${name}_display`]: this.getDisplay()
    }
  }
}

