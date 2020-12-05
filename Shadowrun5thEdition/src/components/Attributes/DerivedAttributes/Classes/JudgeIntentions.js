class JudgeIntentions {
  constructor() {
    this.name = 'judge_intentions'
    this.attributes = ['charisma', 'intuition']
    this.bonus = ['judge_intentions_modifier']
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
