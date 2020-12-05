class Soak extends DerivedAttribute {
  constructor() {
    super('soak')
    this.attributes = ['body', 'armor_rating']
    this.bonus = ['soak_modifier', 'soak_temp', `soak_temp_flag`]
  }
}
