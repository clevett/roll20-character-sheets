class LiftCarry extends DerivedAttribute  {
  constructor() {
    super('lift_carry')
    this.attributes = ['body', 'strength']
    this.bonus = ['lift_carry_modifier']
  }
}
