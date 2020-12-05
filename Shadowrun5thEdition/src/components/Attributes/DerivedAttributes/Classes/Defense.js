class Defense extends DerivedAttribute {
  constructor() {
    super('defense')
    this.attributes = ['reaction', 'intuition']
    this.bonus = ['defense_modifier', 'defense_temp', `defense_temp_flag`]
  }
}
