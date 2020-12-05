// EVENT HANDLERS
const mentalLimitAttributes = ['intuition', 'willpower', 'logic']
mentalLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('mental_limit')
}))

const physicalLimitAttributes = ['body', 'reaction', 'strength']
physicalLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('physical_limit')
}))

const socialLimitAttributes = ['essence', 'willpower', 'charisma']
socialLimitAttributes.forEach(attr => on(`change:${attr}`, () => {
  updateLimits('social_limit')
}))

const attributeLimits = ['mental_limit', 'physical_limit', 'social_limit']
attributeLimits.forEach(limit => {
  on(`change:${limit}_modifier change:${limit}_temp change:${limit}_temp_flag`, () => {
    updateLimits(limit)
  })
})
