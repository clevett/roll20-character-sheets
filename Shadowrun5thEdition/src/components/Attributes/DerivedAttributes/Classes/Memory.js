class Memory {
  constructor() {
    this.name = 'memory'
    this.attributes = ['logic', 'willpower']
    this.bonus = ['memory_modifier']
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
