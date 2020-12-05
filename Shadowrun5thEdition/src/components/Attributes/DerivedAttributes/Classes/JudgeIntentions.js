class JudgeIntentions extends DerivedAttribute {
  constructor() {
    super('judge_intentions')
    this.attributes = ['charisma', 'intuition']
    this.bonus = ['judge_intentions_modifier']
  }
}
