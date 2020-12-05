class Composure {
  constructor() {
    this.name = 'composure'
    this.attributes = ['charisma', 'willpower']
    this.bonus = ['composure_modifier']
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
