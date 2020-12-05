const determineDerivedAttribute = name => {
  switch(name) {
    case 'composure':
      return new Composure()
    case 'defense':
      return new Defense()
    case 'judge_intentions':
      return new JudgeIntentions()
    case 'lift_carry':
      return new LiftCarry()
    case 'memory':
      return new Memory()
    case 'overflow':
      return new Overflow()
    case 'soak':
      return new Soak()
    default:
      errorMessage('determineDerivedAttribute', 'name did not match the switch cases')
  }
}
