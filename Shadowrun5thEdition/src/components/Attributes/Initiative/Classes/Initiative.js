
class Initiative extends DerivedAttribute {
  constructor() {
    super('initiative_mod')
    this.modifier = 0
    this.dice = 0
    this.attributes = ['reaction', 'intuition']
    this.bonus = ['initiative_mod_modifier', 'initiative_temp','initiative_temp_flag']
  }
}

