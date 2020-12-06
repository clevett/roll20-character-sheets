class Gear extends RepeatingFieldset {
  constructor(name) {
    super('items')
    this.name = name
    this.notes = ''
    this.rating = ''
    this.quantity = ''
  }

  getName() { return this.name }
  getNotes() { return this.notes }
  getRating() { return this.rating }
  getQuantity() { return this.quantity }

  setNotes(value) { this.notes = value }
  setRating(value) { this.rating = value }
  setQuantity(value) { this.quantity = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_item`]: this.getName(),
      [`${row}_rating`]: this.getRating(),
      [`${row}_quantity`]: this.getQuantity(),
      [`${row}_notes`]: this.getNotes()
    }
  }
}
