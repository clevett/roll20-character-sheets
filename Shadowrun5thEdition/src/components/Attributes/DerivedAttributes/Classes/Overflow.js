class Overflow {
  constructor() {
    this.name = 'overflow',
    this.attributes = ['body']
    this.bonus = ['overflow_modifier']
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
