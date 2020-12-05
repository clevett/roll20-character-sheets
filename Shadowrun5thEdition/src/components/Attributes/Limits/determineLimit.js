const determineLimit = name => {
  switch(name) {
    case 'mental_limit':
      return new MentalLimit()
    case 'physical_limit':
      return new PhysicalLimit()
    case 'social_limit':
      return new SocialLimit()
    default:
      errorMessage('limitAttributes', 'limit name did not match the switch')
  }
}
