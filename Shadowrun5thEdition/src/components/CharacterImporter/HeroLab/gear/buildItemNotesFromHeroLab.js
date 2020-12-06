const buildItemNotesFromHeroLab = item => {
  const { 
    accessories,
    ammunition,
    availability,
    description, 
    gearcost,
    matrix,
    modifications,
    othergear,
    programs,
    _size,
    _wireless
  } = item
  let notes = ''

  notes += accessories ? `Accessories: ${accessories} \n` : ''
  notes += ammunition ? `Ammunition: ${ammunition._value} \n` : ''
  notes += availability ? `Availability: ${availability._value} \n` : ''
  notes += gearcost ? `Cost: ${gearcost._text} \n` : ''

  if (matrix.matrixattribute) {
    let matrixArray = ''
    matrix.matrixattribute.forEach(attribute => {
      const { _name, _modified } = attribute
      const number = parseInt(_modified)
      matrixArray += number ? `${_name}: ${_modified}` : ''
    })

    notes += matrixArray ? `${matrixArray} \n` : ''
  }

  notes += _wireless ? `Wireless: ${_wireless} \n` : ''
  notes += programs ? `Programs: ${programs} \n` : ''

  notes += modifications ? `Modifications: ${modifications} \n` : ''
  notes += othergear ? `Other Gear: ${othergear} \n` : ''
  notes += _size ? `Size: ${_size} \n` : ''

  notes += description ? `\n${description}` : ''

  return notes
}
