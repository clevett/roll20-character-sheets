class RepeatingFieldset {
  constructor(groupname, id) {
    this.groupname = groupname
    this.reprowid = id || generateRowID()
    this.flag = false
    this.display_flag = false
  }

  getGroupName() { return this.groupname }
  getRowID() { return this.reprowid }

  buildRowName() {
    return `repeating_${this.getGroupName()}_${this.getRowID()}`
  }

  addAttribute(attributesibuteName) {
    return `${this.buildRowName()}_${attributesibuteName}`
  }
}