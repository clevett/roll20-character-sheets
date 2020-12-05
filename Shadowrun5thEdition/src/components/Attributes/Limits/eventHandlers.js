// EVENT HANDLERS
const mentalLimitAttributes = new MentalLimit().attributes
mentalLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('mental_limit')
}))

const physicalLimitAttributes = new PhysicalLimit().attributes
physicalLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('physical_limit')
}))

const socialLimitAttributes = new SocialLimit().attributes
socialLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('social_limit')
}))

const attributeLimits = new AttributeLimit().attributes
attributeLimits.forEach(limit => {
  on(`change:${limit}_modifier change:${limit}_temp change:${limit}_temp_flag`, () => {
    updateLimits(limit)
  })
})
