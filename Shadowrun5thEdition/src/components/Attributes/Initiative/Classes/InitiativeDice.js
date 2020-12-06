
class InitiativeDice extends Attribute {
  constructor(name) {
    super(name)
    this.base = 1

    this[`${this.name}`] = 0
    this[`${this.name}_modifier`] = 0
    this[`${this.name}_temp`] = 0
    this[`${this.name}_temp_flag`] = null
  }

  getBase() {
    return 1
  }

  setBase(value) {
    this.base = value
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
}

