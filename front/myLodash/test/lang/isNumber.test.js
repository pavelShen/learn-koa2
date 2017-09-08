/* eslint-disable no-undef */
import isNumber from '../../src/lang/isNumber'

const isNumberTest = function(){
  test('isNumberFunction', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(Number.MIN_VALUE)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
  })
}

export default isNumberTest