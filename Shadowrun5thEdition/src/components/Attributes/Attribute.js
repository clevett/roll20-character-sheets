
class Attribute {
  constructor(name) {
    this.name = name
    this[`${name}_base`] = 0
    this[`${name}_temp`] = 0
    this[`${name}_temp_flag`] = true
    this[`${name}_modifier`] = 0
    this[`${name}`] = this.getTotal()
    this[`${name}_display`] = this.getDisplay()
  }

  getAttrsArray() {
    const name = this.name
    return [`${name}_base`, `${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]
  }

  getBonus() {
    const name = this.name
    const temp = this[`${name}_temp_flag`] ? this[`${name}_temp`] : 0
    return temp + this[`${name}_modifier`]
  }

  getDisplay() {
    const name = this.name
    const base = this[`${name}_base`]
    const total = this[`${name}`]
    return base == !total || total == base ? base : `${base} (${total})`
  }

  getTotal() {
    const name = this.name
    return this[`${name}_base`] + this.getBonus()
  }
}
