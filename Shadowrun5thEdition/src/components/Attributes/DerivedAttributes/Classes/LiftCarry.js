class LiftCarry {
  constructor() {
    this.name = 'lift_carry',
    this.attributes = ['body', 'strength']
    this.bonus = ['lift_carry_modifier']
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
