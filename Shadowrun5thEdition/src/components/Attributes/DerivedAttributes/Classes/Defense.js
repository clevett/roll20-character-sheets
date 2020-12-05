class Defense {
  constructor() {
    this.name = 'defense',
    this.attributes = ['reaction', 'intuition']
    this.bonus = ['defense_modifier', 'defense_temp', `defense_temp_flag`]
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
