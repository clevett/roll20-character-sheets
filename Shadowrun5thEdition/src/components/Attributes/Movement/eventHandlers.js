const movementAttributes = new Movement().getAttrsArray()
movementAttributes.forEach(attr => {
  const movement = new Movement()
  on(`change:${attr}`, () => updateMovement(movement))
})


