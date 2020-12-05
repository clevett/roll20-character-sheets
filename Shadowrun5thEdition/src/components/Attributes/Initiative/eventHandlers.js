const initiativeAttributes = new Initiative().getAttrsArray()
initiativeAttributes.forEach(attr => {
  on(`change:${attr}`, () => {
    const initiative = new Initiative()
    updateAttributes(initiative)
  })
})
