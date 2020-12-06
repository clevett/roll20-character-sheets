
class Initiative {
  constructor() {
    this.name = 'initiative_mod'
    this.initiative_mod = 0
    this.initiative_mod_modifier = 0
    this.initiative_temp = 0
    this.initiative_temp_flag = true
  }

  setModModifier(value) {
    this.initiative_mod = value
  }

  getAttrsArray() {
    const attributes = ['reaction', 'intuition']
    const bonus = ['initiative_mod_modifier', 'initiative_temp','initiative_temp_flag']
    return [...attributes, ...bonus]
  }
}

