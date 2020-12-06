
class InitiativeDice {
  constructor(name) {
    this.name = name
    this.bonus = [`${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]
    this[`${this.name}_modifier`] = 0
    this[`${this.name}_temp`] = 0
    this[`${this.name}_temp_flag`] = null
    this.base = 1
  }
  
  getAttrsArray() {
    return [...this.bonus, 'edge_toggle']
  }

  getBonus() {
    const temp = this[`${this.name}_temp_flag`] ? this[`${this.name}_temp`] : 0
    const sum = this[`${this.name}_modifier`] + temp
    return Math.min(sum, 5)
  }

  getTotal(edgeFlag) {
    const total = this.getBonus() + this.base
    return edgeFlag ? 5 : Math.min(total, 5)
  }
}

