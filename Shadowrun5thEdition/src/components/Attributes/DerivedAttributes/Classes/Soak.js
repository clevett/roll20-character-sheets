class Soak {
  constructor() {
    this.name = 'soak',
    this.attributes = ['body', 'armor_rating']
    this.bonus = ['soak_modifier', 'soak_temp', `soak_temp_flag`]
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
