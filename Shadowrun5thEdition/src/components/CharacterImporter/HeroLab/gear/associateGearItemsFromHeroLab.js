const associateGearItemsFromHeroLab = ({ item }) => {
  const data = {}

  item.forEach(element => {
    const { _name, _quantity, _rating } = element
    const notes = buildItemNotesFromHeroLab(element)
    const newItem = new Gear('items', _name)

    newItem.setRating(_rating || '')
    newItem.setQuantity(_quantity)
    newItem.setNotes(notes)

    const attribues = newItem.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  return data
}

