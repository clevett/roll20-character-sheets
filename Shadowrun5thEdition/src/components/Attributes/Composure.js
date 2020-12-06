class Composure extends DerivedAttribute {
  constructor() {
    super('composure')
    this.attributes = ['charisma', 'willpower']
    this.bonus = ['composure_modifier']
  }
}
