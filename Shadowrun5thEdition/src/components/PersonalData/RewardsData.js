
class RewardsData {
  constructor() {
    this.street_cred = null,
    this.notoriety = null,
    this.public_awareness = null,
    this.karma = null,
    this.total_karma = null,
    this.misc = null
  }

  setSteetCred(value) { this.street_cred = value}
  setNotoriety(value) { this.notoriety = value}
  setPublicAwareness(value) { this.public_awareness = value}
  setKarma(value) { this.karma = value}
  setTotalKarma(value) { this.total_karma = value}
  setMisc(value) { this.misc = value}

  getSteetCred() { return this.street_cred }
  getNotoriety() { return this.notoriety }
  getPublicAwareness() { return this.public_awareness }
  getKarma() { return this.karma  }
  getTotalKarma() { return this.total_karma }
  getMisc() { return this.misc }

  getSheetAttributes() {
    return  {
      street_cred: this.getSteetCred(),
      notoriety: this.getNotoriety(),
      public_awareness: this.getPublicAwareness(),
      karma: this.getKarma(),
      total_karma: this.getTotalKarma(),
      misc: this.getMisc()
    }
  }
}

