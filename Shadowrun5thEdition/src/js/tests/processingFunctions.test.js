QUnit.module('Shadowrun 5th Edition tests', {
  before: () => maxAsyncDelay = 100, //Sets the mock delay for getAttrs and setAttrs to a maximum of 1000ms.
  beforeEach: () => {
    //Resets attributes before each test
    attributes = {}
    sectionIDS = {}
  }
})

QUnit.test('setAttributes returns error if update is not an object', assert => assert.throws(processingFunctions.setAttributes(6)))

QUnit.test('parseIntegers returns a number', assert => {
  const actual = processingFunctions.parseIntegers({newValue: '6'})
  assert.ok(actual.newValue, 'number')
})

QUnit.test('sumIntegers adds an array of numbers together', assert => assert.strictEqual(processingFunctions.sumIntegers([5, 10, 20]), 35))

QUnit.test('convertInteger converts a string to number', assert => assert.strictEqual(typeof processingFunctions.parseInteger('6'), 'number'))

QUnit.test('getReprowid splQUnit.tests triggerName to get the repeating row id', assert => {
  const expected = 'repeating_advancement_-m1czg68yzicwhfdpyys'
  const actual = processingFunctions.getReprowid('repeating_advancement_-m1czg68yzicwhfdpyys_earned_xp')
  assert.strictEqual(actual, expected)
})

QUnit.test('convertIntegerNegative turns posQUnit.testive integar into negative', assert => assert.strictEqual(processingFunctions.convertIntegerNegative(6), -6))

QUnit.test('sliceAttr removes the @{} from a value', assert => assert.ok(processingFunctions.sliceAttr('@{strength}'), 'strength'))

QUnit.test('The repeating name from the trigger', assert => {
  const actual = processingFunctions.findRepeatingField('repeating_range_-m1czg68yzicwhfdpyys')
  assert.ok(actual, 'range')
})

QUnit.test('Get the attribute name from the trigger', assert => {
  const actual = processingFunctions.getReprowAttribute('repeating_range_-m1czg68yzicwhfdpyys_attrName')
  assert.ok(actual, 'attrName')
})