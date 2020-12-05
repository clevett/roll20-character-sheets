class DerivedAttribute {
  constructor(name) {
    this.name = name
    this.attributes = []
    this.bonus = []
  }

  getAttrsArray() {
    return [...this.attributes, ...this.bonus]
  }
}
