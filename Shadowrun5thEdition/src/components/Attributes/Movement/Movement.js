class Movement extends DerivedAttribute {
  constructor(name) {
    super(name)
    this.agility = null
    this.walkMultiplier = 4
    this.runMuplitier = 2
    this.attributes = ['agility']
    this.bonus = ['walk_modifier', 'run_modifier']
  }

  getWalkSpeed(agility, modifier) {
    return (agility * this.walkMultiplier) + modifier
  }

  getRunSpeed(agility, modifier) {
    return (agility * this.runMuplitier) + modifier
  }
}


