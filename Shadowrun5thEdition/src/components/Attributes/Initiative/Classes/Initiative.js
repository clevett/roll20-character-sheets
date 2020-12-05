class Initiative extends DerivedAttribute {
  constructor() {
    super('soak')
    this.attributes = ['reaction', 'intuition']
    this.bonus = ['initiative_mod_modifier', 'initiative_temp', 'initiative_temp_flag']
  }

  display(attrs) {
    return buildDisplayString(attrs)
  }
}
