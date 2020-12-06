
class Initiative extends DerivedAttribute {
  constructor() {
    super('initiative_mod')
    this.attributes = ['reaction', 'intuition']
    this.bonus = ['initiative_mod_modifier', 'initiative_temp','initiative_temp_flag']
  }
}

