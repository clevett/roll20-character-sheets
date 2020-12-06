
class MatrixInitiative extends DerivedAttribute {
  constructor() {
    super('matrix_mod')
    this.attributes = ['intuition', "data_processing", "pilot", "host_rating", "level", "sheet_type"]
    this.bonus = ['matrix_mod_modifier']
  }

  determineSecondAttribute(type) {
    switch(type) {
      case 'sprite':
        return 'level'
      case 'vehicle':
        return 'pilot'
      case 'host': 
        return 'host_rating'
      default:
        return 'intuition'
    }
  }
}

